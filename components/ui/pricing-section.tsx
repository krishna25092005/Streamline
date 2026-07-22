"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { processRazorpayCheckout } from "@/lib/razorpay-client";

const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Up to 10 boards per workspace", icon: <Briefcase size={20} /> },
      { text: "Up to 10GB storage", icon: <Database size={20} /> },
      { text: "Limited analytics", icon: <Server size={20} /> },
    ],
    includes: [
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "Unlimted boards", icon: <Briefcase size={20} /> },
      { text: "Storage (250MB/file)", icon: <Database size={20} /> },
      { text: "100 workspace command runs", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited board", icon: <Briefcase size={20} /> },
      { text: "Unlimited storage ", icon: <Database size={20} /> },
      { text: "Unlimited workspaces", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-neutral-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-white"
              : "text-muted-foreground hover:text-black dark:hover:text-white"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-8 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "1"
              ? "text-white"
              : "text-muted-foreground hover:text-black dark:hover:text-white"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-black">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div className="px-4 pt-20 pb-16 min-h-screen mx-auto relative bg-slate-50/50 dark:bg-slate-950/60" ref={pricingRef}>
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, #206ce8 0%, transparent 70%)
      `,
          opacity: 0.4,
          mixBlendMode: "multiply",
        }}
      />

      <div className="text-center mb-6 max-w-3xl mx-auto relative z-10">
        <TimelineContent
          as="h2"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="md:text-6xl sm:text-4xl text-3xl font-extrabold font-bricolage text-slate-900 dark:text-white mb-4"
        >
          Plans that works best for your{" "}
          <TimelineContent
            as="span"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="border border-dashed border-blue-500 px-3 py-1 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 capitalize inline-block"
          >
            business
          </TimelineContent>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={2}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="sm:text-base text-sm text-slate-600 dark:text-slate-400 sm:w-[70%] w-[80%] mx-auto"
        >
          Trusted by millions, We help teams all around the world, Explore which
          option is right for you.
        </TimelineContent>
      </div>

      <TimelineContent
        as="div"
        animationNum={3}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="relative z-10"
      >
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </TimelineContent>

      <div className="grid md:grid-cols-3 max-w-7xl gap-6 py-8 mx-auto relative z-10">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={4 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <CardContainer className="w-full">
              <CardBody className="w-full h-full">
                <Card
                  className={`relative border-slate-200 dark:border-slate-800 ${
                    plan.popular ? "ring-2 ring-blue-500 bg-blue-50/50 dark:bg-slate-900/90" : "bg-white dark:bg-slate-900/80"
                  }`}
                >
                  <CardHeader className="text-left">
                    <div className="flex justify-between items-center">
                      <CardItem translateZ="40" className="text-3xl font-bold font-bricolage text-slate-900 dark:text-white mb-2">
                        {plan.name}
                      </CardItem>
                      {plan.popular && (
                        <CardItem translateZ="50">
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            Popular
                          </span>
                        </CardItem>
                      )}
                    </div>
                    <CardItem translateZ="30" className="text-sm text-slate-600 dark:text-slate-400 mb-4">{plan.description}</CardItem>
                    <CardItem translateZ="60" className="flex items-baseline">
                      <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                        $
                        <NumberFlow
                          value={isYearly ? plan.yearlyPrice : plan.price}
                          className="text-4xl font-extrabold"
                        />
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 ml-1">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </CardItem>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardItem translateZ="70" className="w-full">
                      <button
                        onClick={() => {
                          const targetPlan = plan.name === "Enterprise" ? "ENTERPRISE" : "PRO";
                          processRazorpayCheckout({ plan: targetPlan });
                        }}
                        className={`w-full mb-6 p-4 text-lg font-bold rounded-xl transition-all cursor-pointer ${
                          plan.popular
                            ? "bg-gradient-to-t from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30 border border-blue-400 text-white hover:scale-[1.02]"
                            : plan.buttonVariant === "outline"
                              ? "bg-slate-900 dark:bg-slate-800 text-white border border-slate-700 hover:bg-slate-800 dark:hover:bg-slate-700"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {plan.buttonText}
                      </button>
                    </CardItem>
                    <ul className="space-y-3 font-semibold py-5">
                      {plan.features.map((feature, featureIndex) => (
                        <CardItem key={featureIndex} translateZ={20 + featureIndex * 10} className="flex items-center">
                          <span className="text-blue-500 grid place-content-center mt-0.5 mr-3">
                            {feature.icon}
                          </span>
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {feature.text}
                          </span>
                        </CardItem>
                      ))}
                    </ul>

                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <CardItem translateZ="30" className="font-medium text-base text-slate-900 dark:text-white mb-3">
                        {plan.includes[0]}
                      </CardItem>
                      <ul className="space-y-2.5 font-semibold">
                        {plan.includes.slice(1).map((feature, featureIndex) => (
                          <CardItem key={featureIndex} translateZ={20 + featureIndex * 5} className="flex items-center">
                            <span className="h-6 w-6 bg-blue-50 dark:bg-blue-950 border border-blue-500 rounded-full grid place-content-center mt-0.5 mr-3 shrink-0">
                              <CheckCheck className="h-4 w-4 text-blue-500" />
                            </span>
                            <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                          </CardItem>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </CardBody>
            </CardContainer>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
