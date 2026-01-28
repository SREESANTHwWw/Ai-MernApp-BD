const axios = require("axios");
const express = require("express");

const Router = express.Router();

Router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "arcee-ai/trinity-large-preview:free",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant. Answer clearly."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      answer: response.data.choices[0].message.content.trim(),
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "limit" });
  }
});

module.exports = Router;
