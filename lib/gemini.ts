/**
 * Real-Time Google Gemini API Integration Utility
 * Primary Model: gemini-2.5-flash (Status 200 Verified)
 */

export function cleanAiResponseText(text: string): string {
  if (!text || typeof text !== 'string') return '';

  return text
    // Remove markdown headers (e.g. ### Header or # Header)
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold formatting **text**
    .replace(/\*\*(.*?)\*\*/g, '$1')
    // Remove italic formatting *text* or _text_
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    // Convert markdown list symbols (* item, - item) to clean bullet points (• item)
    .replace(/^[\*\-\+]\s+/gm, '• ')
    // Remove inline backticks `code`
    .replace(/`/g, '')
    // Remove any remaining stray asterisks or hash symbols
    .replace(/[\*#]/g, '')
    .trim();
}

export async function callGeminiApi(prompt: string, systemInstruction?: string): Promise<string | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn('GEMINI_API_KEY is not set');
    return null;
  }

  // System instruction specifying no markdown asterisks or hashes
  const noSymbolInstruction = systemInstruction
    ? `${systemInstruction}\nIMPORTANT RULE: Provide responses in clear plain text without using markdown symbols like *, #, **, or backticks.`
    : 'Provide responses in clear plain text without using markdown symbols like *, #, **, or backticks.';

  const fullPrompt = `${noSymbolInstruction}\n\nUSER REQUEST: ${prompt}`;

  const models = ['gemini-2.5-flash', 'gemini-1.5-flash-latest', 'gemini-pro'];

  for (const modelName of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: fullPrompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text?.trim()) {
          return cleanAiResponseText(text.trim());
        }
      } else {
        const errorText = await res.text();
        console.warn(`Gemini Model ${modelName} returned status ${res.status}:`, errorText.slice(0, 150));
      }
    } catch (err) {
      console.error(`Gemini Model ${modelName} Exception:`, err);
    }
  }

  return null;
}
