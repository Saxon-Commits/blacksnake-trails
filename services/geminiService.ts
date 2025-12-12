import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// The API key must be provided in the environment variable API_KEY
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

/**
 * Refines a rough user project description into a structured enquiry using Gemini.
 */
export const refineProjectDescription = async (roughNotes: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning original text.");
    return roughNotes;
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are an expert trail builder and landscaper assistant for "Blacksnake Trails" in Tasmania.
      The user has provided rough notes about a project they want done. 
      Rewrite these notes into a professional, clear, and structured project enquiry for a contractor.
      
      Include headers for:
      - Project Overview
      - Key Objectives (e.g., specific features, flow, difficulty)
      - Terrain/Site Description (inferred if possible, or noted as "To be assessed")
      - Estimated Scope
      
      Keep the tone professional but enthusiastic about outdoor recreation.
      
      User's rough notes: "${roughNotes}"
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful landscaping consultant. specific output format: Plain text, ready for a form email body.",
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster simple text tasks
      }
    });

    return response.text || roughNotes;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback to original text if API fails
    return roughNotes;
  }
};