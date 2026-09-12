import React, { useState } from "react";

export default function ExplorePage({ onBack }) {
  const [active, setActive] = useState("home");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [partOpen, setPartOpen] = useState(null);

  const parts = [
    {
      id: "love",
      title: "भाग 1 — प्रेम के स्वर",
      icon: "❤️",
      units: [
        {
          id: "love-1",
          title: "Unit 1 — प्रेम की शुरुआत",
          poem: `कभी-कभी मोहब्बत किसी दस्तक की तरह नहीं आती,
वो ख़ामोशी से दिल में अपना घर बना लेती है।

न कोई वादा होता है,
न कोई इकरार,
बस किसी की मौजूदगी
दिल को अच्छी लगने लगती है।

फिर उसकी एक मुस्कान,
दिन का सबसे ख़ूबसूरत लम्हा बन जाती है,
और उसकी ख़ामोशी भी
दिल को कुछ कहती हुई लगती है।

शायद यही प्रेम की शुरुआत है—
जब किसी अजनबी का ख़याल
धीरे-धीरे
अपना सा लगने लगे।`
        },
        {
          id: "love-2",
          title: "Unit 2 — पहली मुलाक़ात"
        },
        {
          id: "love-3",
          title: "Unit 3 — मोहब्बत का एहसास"
        },
        {
          id: "love-4",
          title: "Unit 4 — किसी के लिए ख़ुद को खो देना"
        },
        {
          id: "love-5",
          title: "Unit 5 — बेपनाह मोहब्बत"
        }
      ]
    },

    {
      id: "waiting",
      title: "भाग 2 — इंतज़ार और विरह",
      icon: "🌙",
      units: [
        { id: "waiting-1", title: "Unit 1 — मिलने की चाह" },
        { id: "waiting-2", title: "Unit 2 — इंतज़ार" },
        { id: "waiting-3", title: "Unit 3 — दूरी का दर्द" },
        { id: "waiting-4", title: "Unit 4 — अधूरी मुलाक़ात" },
        { id: "waiting-5", title: "Unit 5 — बिछड़ने की रात" }
      ]
    },

    {
      id: "loneliness",
      title: "भाग 3 — तन्हाई और ख़ामोशी",
      icon: "🖤",
      units: [
        { id: "loneliness-1", title: "Unit 1 — अकेलेपन की आवाज़" },
        { id: "loneliness-2", title: "Unit 2 — ख़ामोश दिल" },
        { id: "loneliness-3", title: "Unit 3 — अनकहे शब्द" },
        { id: "loneliness-4", title: "Unit 4 — भीड़ में तन्हाई" },
        { id: "loneliness-5", title: "Unit 5 — ख़ुद से बातचीत" }
      ]
    },

    {
      id: "pain",
      title: "भाग 4 — दर्द और टूटना",
      icon: "💔",
      units: [
        { id: "pain-1", title: "Unit 1 — दिल का टूटना" },
        { id: "pain-2", title: "Unit 2 — बेवफ़ाई" },
        { id: "pain-3", title: "Unit 3 — यादों का बोझ" },
        { id: "pain-4", title: "Unit 4 — अधूरी मोहब्बत" },
        { id: "pain-5", title: "Unit 5 — टूटकर भी मोहब्बत करना" }
      ]
    },

    {
      id: "memories",
      title: "भाग 5 — यादें और गुज़रा वक़्त",
      icon: "🕰️",
      units: [
        { id: "memories-1", title: "Unit 1 — पुरानी यादें" },
        { id: "memories-2", title: "Unit 2 — बीते लम्हे" },
        { id: "memories-3", title: "Unit 3 — साथ बिताए पल" },
        { id: "memories-4", title: "Unit 4 — तस्वीरों में बचा रिश्ता" },
        { id: "memories-5", title: "Unit 5 — वापस न आने वाला समय" }
      ]
    },

    {
      id: "other-love",
      title: "भाग 6 — मोहब्बत का दूसरा पहलू",
      icon: "🥀",
      units: [
        { id: "other-love-1", title: "Unit 1 — मिलना ही मोहब्बत नहीं" },
        { id: "other-love-2", title: "Unit 2 — बिना पाए प्रेम करना" },
        { id: "other-love-3", title: "Unit 3 — किसी की ख़ुशी में अपनी ख़ुशी" },
        { id: "other-love-4", title: "Unit 4 — एकतरफ़ा मोहब्बत" },
        { id: "other-love-5", title: "Unit 5 — आख़िरी उम्मीद" }
      ]
    },

    {
      id: "self",
      title: "भाग 7 — ख़ुद से मुलाक़ात",
      icon: "🌱",
      units: [
        { id: "self-1", title: "Unit 1 — दर्द से सीखना" },
        { id: "self-2", title: "Unit 2 — ख़ुद को समझना" },
        { id: "self-3", title: "Unit 3 — ख़ामोशी को स्वीकार करना" },
        { id: "self-4", title: "Unit 4 — यादों से आगे बढ़ना" },
        { id: "self-5", title: "Unit 5 — फिर से जीना" }
      ]
    },

    {
      id: "ending",
      title: "भाग 8 — अंतिम स्वर",
      icon: "✨",
      units: [
        { id: "ending-1", title: "Unit 1 — अधूरी कहानी" },
        { id: "ending-2", title: "Unit 2 — आख़िरी ख़त" },
        { id: "ending-3", title: "Unit 3 — आख़िरी मुलाक़ात" },
        { id: "ending-4", title: "Unit 4 — विदाई" },
        { id: "ending-5", title: "Unit 5 — मन के अनकहे स्वर" }
      ]
    }
  ];

  const menuItems = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "poems", icon: "📖", label: "Poems" },
    { id: "research", icon: "🔬", label: "Research" },
    { id: "ideas", icon: "💡", label: "Ideas" },
    { id: "library", icon: "📚", label: "Library" }
  ];

  return (
    <div className="explorePage">

      <button className="exploreBack" onClick={onBack}>
        ← Back
      </button>

      <header className="exploreHeader">
        <span className="eyebrow">ANSHU'S WORLD</span>
        <h1>Explore</h1>
        <p>My poems, research, ideas and personal library.</p>
      </header>

      <nav className="exploreMenu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={active === item.id ? "activeExplore" : ""}
            onClick={() => {
              setActive(item.id);
              setSelectedUnit(null);
              setPartOpen(null);
            }}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>

      {active === "poems" && (
        <main className="exploreContent poemsSection">

          <div className="poemsIntro">
            <span className="poemsLabel">✍️ ORIGINAL POETRY COLLECTION</span>
            <h2>📖 मन के अनकहे स्वर</h2>
            <p>
              प्रेम, विरह, तन्हाई, दर्द, यादों और जीवन के अनकहे एहसासों की यात्रा।
            </p>
          </div>

          {selectedUnit ? (
            <article className="poemReader">

              <button
                className="poemBack"
                onClick={() => setSelectedUnit(null)}
              >
                ← वापस Units
              </button>

              <span className="poemReaderLabel">
                मन के अनकहे स्वर
              </span>

              <h2>{selectedUnit.title}</h2>

              {selectedUnit.poem ? (
                <div className="poemText">
                  {selectedUnit.poem.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <p className="poemComingSoon">
                  ✍️ इस Unit की कविता जल्द ही यहाँ जोड़ी जाएगी।
                </p>
              )}

            </article>
          ) : (
            <div className="poemSyllabus">

              {parts.map((part) => (
                <div className="poemPart" key={part.id}>

                  <button
                    className="partButton"
                    onClick={() =>
                      setPartOpen(
                        partOpen === part.id ? null : part.id
                      )
                    }
                  >
                    <span>
                      {part.icon} {part.title}
                    </span>

                    <span>
                      {partOpen === part.id ? "−" : "+"}
                    </span>
                  </button>

                  {partOpen === part.id && (
                    <div className="unitList">

                      {part.units.map((unit) => (
                        <button
                          className="unitButton"
                          key={unit.id}
                          onClick={() => setSelectedUnit(unit)}
                        >
                          <span>📄</span>
                          <span>{unit.title}</span>
                          <span>→</span>
                        </button>
                      ))}

                    </div>
                  )}

                </div>
              ))}

            </div>
          )}

        </main>
      )}

      {active === "home" && (
        <main className="exploreContent">
          <h2>🏠 Welcome to Anshu's World</h2>
          <p>
            A personal space where creativity, engineering,
            research and new ideas come together.
          </p>
        </main>
      )}

      {active === "research" && (
        <main className="exploreContent">
          <h2>🔬 Research</h2>
          <p>
            Scientific thoughts, engineering concepts and future technology.
          </p>
        </main>
      )}

      {active === "ideas" && (
        <main className="exploreContent">
          <h2>💡 Ideas</h2>
          <p>
            New inventions, projects and future concepts.
          </p>
        </main>
      )}

      {active === "library" && (
        <main className="exploreContent">
          <h2>📚 Library</h2>
          <p>
            A growing collection of creative, technical and research work.
          </p>
        </main>
      )}

    </div>
  );
}
