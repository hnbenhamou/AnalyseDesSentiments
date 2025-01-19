import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getChatGPTResponse = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "developer", content: "You are a helpful assistant." },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    console.log("OpenAI Chat response:", response);
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error communicating with ChatGPT API:", error);
    throw new Error("Error communicating with ChatGPT API");
  }
};
