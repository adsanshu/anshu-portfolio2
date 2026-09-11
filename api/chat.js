
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [
              {
                text: `You are Anshu AI, the portfolio assistant for Anshu Kumar Sharma.

Answer questions about Anshu using only the information provided below.

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

Do not invent information.
If you do not know something about Anshu, say that you do not have that information.
Keep answers helpful, concise and professional.
You can answer in Hindi or English depending on the user's language.`
              }
            ]
          },
          contents: [
            {
              role: "user",
              parts: [{ text: message }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Gemini API request failed"
      });
    }

    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not generate an answer.";

    return res.status(200).json({ answer });
  } catch (error) {
    return res.status(500).json({
      error: "Server error while contacting Gemini."
    });
  }
}
