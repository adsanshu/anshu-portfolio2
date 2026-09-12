export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { message } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is missing in Vercel."
      });
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `
You are Anshu AI, a helpful general-purpose AI assistant on Anshu Kumar Sharma's portfolio website.

You can answer questions about science, mathematics, engineering, mechanical engineering, coding, technology, education, general knowledge, writing, translation and everyday topics.

About Anshu:
Name: Anshu Kumar Sharma
Domain: Mechanical Engineering
College: Vishveshwarya Group of Institutions (VGI), affiliated with AKTU
B.Tech: Mechanical Engineering, 2024-2028
Skills: Engineering Drawing & Computer Graphics, Manufacturing, CAD/Design, Coding, Problem Solving
Projects: Agro-Nexa, ADS Learn Academy, Chat with Anshu, Sharma Wood Mart
Certificate: NPTEL Product Design and Development from IIT Roorkee, 2025, 4 weeks, score 56%
Achievement: 4th rank in College Mathematics Society, 2023
Email: adsanshu.123@gmail.com
LinkedIn: linkedin.com/in/anshu-kumar-sharma-680038375

Rules:
- Answer general questions normally.
- For questions about Anshu, use only the information provided above.
- Never invent personal information about Anshu.
- Answer in Hindi, Hinglish or English according to the user's language.
- Keep answers clear and helpful.
- For educational questions, explain simply when appropriate.

User question:
${message.trim()}
                  `
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          `Gemini API error: ${response.status}`
      });
    }

    const answer =
      data?.candidates?.[0]?.content?.parts
        ?.map(part => part.text || "")
        .join("")
        .trim();

    if (!answer) {
      console.error("Empty Gemini response:", data);

      return res.status(500).json({
        error: "Gemini returned an empty response."
      });
    }

    return res.status(200).json({
      answer
    });

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      error: error.message || "Server error"
    });
  }
}
