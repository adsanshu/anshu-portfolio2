import React, { useState } from "react";

function ExplorePage({ onBack }) {
  const [active, setActive] = useState("home");
const poemParts = [
  {
    id: 1,
    title: "प्रेम की शुरुआत",
    icon: "❤️",
    units: [
      "पहली मुलाकात",
      "पहली नज़र",
      "अनकहा एहसास",
      "दिल की दस्तक",
      "मोहब्बत का पहला रंग",
    ],
  },
  {
    id: 2,
    title: "इश्क़ की गहराई",
    icon: "🌹",
    units: [
      "इश्क़ क्या है",
      "तेरी याद",
      "तेरा ज़िक्र",
      "बेपनाह मोहब्बत",
      "इश्क़ में डूबना",
    ],
  },
  {
    id: 3,
    title: "विरह और तन्हाई",
    icon: "🌙",
    units: [
      "तेरे बिना",
      "तन्हा रातें",
      "दूरी",
      "इंतज़ार",
      "विरह की रात",
    ],
  },
  {
    id: 4,
    title: "यादों का सफ़र",
    icon: "🕯️",
    units: [
      "पुरानी यादें",
      "वो शाम",
      "तेरी तस्वीर",
      "गुज़रा हुआ कल",
      "यादों में तुम",
    ],
  },
  {
    id: 5,
    title: "दर्द और ख़ामोशी",
    icon: "💔",
    units: [
      "दिल का दर्द",
      "ख़ामोश आँसू",
      "टूटा हुआ दिल",
      "दर्द की आवाज़",
      "ख़ामोशी",
    ],
  },
  {
    id: 6,
    title: "बिछड़ने का मौसम",
    icon: "🍂",
    units: [
      "बिछड़ना",
      "आख़िरी मुलाकात",
      "अधूरी कहानी",
      "तुम चले गए",
      "फिर कभी नहीं",
    ],
  },
  {
    id: 7,
    title: "उम्मीद और इंतज़ार",
    icon: "✨",
    units: [
      "एक उम्मीद",
      "तेरे लौटने का इंतज़ार",
      "फिर मिलने की चाह",
      "दिल की दुआ",
      "अधूरी उम्मीद",
    ],
  },
  {
    id: 8,
    title: "ज़िंदगी के रंग",
    icon: "🌿",
    units: [
      "ज़िंदगी",
      "सफ़र",
      "वक़्त",
      "लोग और रिश्ते",
      "ख़ुद से मुलाकात",
    ],
  },
  {
    id: 9,
    title: "रूह और एहसास",
    icon: "🕊️",
    units: [
      "रूह का रिश्ता",
      "आत्मा की पुकार",
      "अधूरा एहसास",
      "दिल और रूह",
      "अनकहे स्वर",
    ],
  },
  {
    id: 10,
    title: "आख़िरी ख़त",
    icon: "✉️",
    units: [
      "एक आख़िरी ख़त",
      "तुम्हारे नाम",
      "जो कह न सका",
      "अंतिम मुलाकात",
      "अलविदा",
    ],
  },
];
  const menuItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "poems", label: "Poems", icon: "📖" },
    { id: "research", label: "Research", icon: "🔬" },
    { id: "ideas", label: "Ideas", icon: "💡" },
    { id: "library", label: "Library", icon: "📚" },
  ];

  return (
    <div className="explorePage">

      <button className="exploreBack" onClick={onBack}>
        ← Back
      </button>

      <header className="exploreHeader">
        <span className="eyebrow">ANSHU'S WORLD</span>

        <h1>Explore</h1>

        <p>
          My poems, research, ideas and personal library.
        </p>
      </header>

      <nav className="exploreMenu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={active === item.id ? "activeExplore" : ""}
            onClick={() => setActive(item.id)}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>

      <main className="exploreContent">

        {active === "home" && (
          <>
            <h2>🏠 Welcome to Anshu's World</h2>

            <p>
              A personal space where creativity,
              engineering, research and new ideas
              come together.
            </p>
          </>
        )}

        {active === "poems" && (
  <main className="exploreContent poemsSection">

    <div className="poemsIntro">
      <span className="poemsLabel">
        ✍️ ORIGINAL POETRY COLLECTION
      </span>

      <h2>📖 मन के अनकहे स्वर</h2>

      <p>
        प्रेम, विरह, तन्हाई, दर्द, यादों और जीवन
        के अनकहे एहसासों की यात्रा।
      </p>
    </div>

    <div className="poemParts">

      {poemParts.map((part) => (
        <details className="poemPart" key={part.id}>

          <summary className="partButton">
            <span>
              {part.icon} Part {part.id} — {part.title}
            </span>

            <span>＋</span>
          </summary>

          <div className="unitList">

            {part.units.map((unit, index) => (
              <div className="unitItem" key={index}>
                <span>📄</span>

                <span>
                  Unit {index + 1} — {unit}
                </span>
              </div>
            ))}

          </div>

        </details>
      ))}

    </div>

  </main>
)}
        {active === "research" && (
          <>
            <h2>🔬 Research</h2>

            <p>
              Engineering, science, space technology
              and future research concepts.
            </p>
          </>
        )}

        {active === "ideas" && (
          <>
            <h2>💡 Ideas</h2>

            <p>
              New ideas combining engineering,
              technology, science and creativity.
            </p>
          </>
        )}

        {active === "library" && (
          <>
            <h2>📚 Library</h2>

            <p>
              Books, notes, learning resources and
              useful references will be added here.
            </p>
          </>
        )}

      </main>

    </div>
  );
}

export default ExplorePage;;
