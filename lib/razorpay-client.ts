import toast from 'react-hot-toast';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if (window.Razorpay) return resolve(true);

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function processRazorpayCheckout({
  plan,
  workspaceId,
  userEmail,
  userName,
  onSuccess,
}: {
  plan: 'PRO' | 'ENTERPRISE';
  workspaceId?: string;
  userEmail?: string;
  userName?: string;
  onSuccess?: () => void;
}) {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    toast.error('Failed to load Razorpay Checkout SDK. Please check your connection.');
    return;
  }

  const token = localStorage.getItem('accessToken');
  if (!token) {
    toast.error('Please log in to upgrade plan.');
    return;
  }

  try {
    // 1. Create Order on backend
    const orderRes = await fetch('/api/payments/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ plan, workspaceId }),
    });

    const orderData = await orderRes.json();
    if (!orderData.success) {
      toast.error(orderData.error?.message || 'Failed to initialize payment order.');
      return;
    }

    const { orderId, amount, currency, keyId } = orderData.data;

    // 2. Open Razorpay Standard Checkout Form
    const options = {
      key: keyId,
      amount,
      currency,
      name: 'Streamline SaaS Enterprise',
      description: `Upgrade Workspace Subscription to ${plan} Plan`,
      image: '/Strreamline_Logo.png',
      order_id: orderId,
      prefill: {
        name: userName || 'Gaurav Kumar',
        email: userEmail || 'gaurav.kumar@example.com',
        contact: '+919876543210',
      },
      theme: {
        color: '#2563eb',
      },
      handler: async function (response: any) {
        toast.loading('Verifying Razorpay payment...', { id: 'razorpay-verify' });

        try {
          // 3. Verify Signature & Update Workspace in Database
          const verifyRes = await fetch('/api/payments/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              workspaceId,
              plan,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            toast.success(`🎉 Payment Verified! Workspace upgraded to ${plan} Plan.`, { id: 'razorpay-verify' });
            if (onSuccess) onSuccess();
          } else {
            toast.error(verifyData.error?.message || 'Signature verification failed.', { id: 'razorpay-verify' });
          }
        } catch (err) {
          console.error(err);
          toast.error('Network error verifying payment signature.', { id: 'razorpay-verify' });
        }
      },
      modal: {
        ondismiss: function () {
          toast.error('Payment checkout closed.');
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error('Razorpay Checkout Exception:', err);
    toast.error('Payment checkout failed.');
  }
}
