import { getChatGPTResponse } from "../insights/chatgpt.service.js";

export const chatWithGPT = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await getChatGPTResponse(prompt);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
