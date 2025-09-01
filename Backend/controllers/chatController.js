import axios from "axios";

const chatWithBot = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Gemini 1.5 model (latest) ko call karo
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
      }
    );

    const botReply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn’t understand.";

    res.json({ reply: botReply });
  } catch (error) {
    console.error("Chat API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong. Try again later." });
  }
};

export default chatWithBot;
