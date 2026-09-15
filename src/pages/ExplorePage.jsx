import React, { useState } from "react";
import ResearchPage from "./ResearchPage";
import LibraryPage from "./LibraryPage";
function ExplorePage({ onBack }) {
  const [active, setActive] = useState("home");
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
  const [poemsUnlocked, setPoemsUnlocked] = useState(false);
const [poemCode, setPoemCode] = useState("");
const poemParts = [
  {
    id: 1,
    title: "प्रेम की शुरुआत",
    icon: "❤️❤️",
    units: [
      {
        id: "part1-unit1",
        title: "पहली मुलाकात",
        poem: `उस दिन तुमसे मिला था,
तो लगा जैसे कोई पुरानी कहानी
अचानक मेरे सामने आकर ठहर गई हो।

न कोई वादा था,
न कोई रिश्ता,
बस तुम्हारी आँखों में
एक अजीब-सी पहचान थी।

तुम कुछ कहती रहीं,
और मैं तुम्हारी आवाज़ में
अपने लिए कोई अनकहा जवाब ढूँढता रहा।

मुझे नहीं मालूम था
कि एक छोटी-सी मुलाकात
दिल में इतनी बड़ी जगह बना सकती है।

उस दिन तुम चली गईं,
मगर तुम्हारी याद वहीं रह गई,
जहाँ पहली बार
मेरे दिल ने तुम्हें देखा था।

शायद मोहब्बत
हमेशा इज़हार से शुरू नहीं होती,
कभी-कभी
सिर्फ़ एक मुलाकात ही
पूरी उम्र का एहसास बन जाती है।`
      },
      {
        id: "part1-unit2",
        title: "पहली नज़र",
        poem: ""
      },
      {
        id: "part1-unit3",
        title: "अनकहा एहसास",
        poem: ""
      },
      {
        id: "part1-unit4",
        title: "दिल की दस्तक",
        poem: ""
      },
      {
        id: "part1-unit5",
        title: "मोहब्बत का पहला रंग",
        poem: ""
      }
    ]
  },

  {
    id: 2,
    title: "इश्क़ का सफ़र",
    icon: "🌹✈️",
    units: [
      { id: "part2-unit1", title: "बढ़ती मोहब्बत", poem: "" },
      { id: "part2-unit2", title: "तेरी आदत", poem: "" },
      { id: "part2-unit3", title: "तेरा इंतज़ार", poem: "" },
      { id: "part2-unit4", title: "दिल की चाहत", poem: "" },
      { id: "part2-unit5", title: "इश्क़ का एहसास", poem: "" }
    ]
  },

  {
    id: 3,
    title: "यादें",
    icon: "🌙",
    units: [
      { id: "part3-unit1", title: "तेरी याद", poem: "" },
      { id: "part3-unit2", title: "पुरानी बातें", poem: "" },
      { id: "part3-unit3", title: "खामोश यादें", poem: "" },
      { id: "part3-unit4", title: "बीते लम्हे", poem: "" },
      { id: "part3-unit5", title: "यादों की रात", poem: "" }
    ]
  },

  {
    id: 4,
    title: "विरह",
    icon: "💔",
    units: [
      { id: "part4-unit1", title: "दूरी", poem: "" },
      { id: "part4-unit2", title: "तेरे बिना", poem: "" },
      { id: "part4-unit3", title: "तन्हाई", poem: "" },
      { id: "part4-unit4", title: "इंतज़ार", poem: "" },
      { id: "part4-unit5", title: "विरह की रात", poem: "" }
    ]
  },

  {
    id: 5,
    title: "टूटता हुआ दिल",
    icon: "🥀",
    units: [
      { id: "part5-unit1", title: "टूटता भरोसा", poem: "" },
      { id: "part5-unit2", title: "बिखरा हुआ दिल", poem: "" },
      { id: "part5-unit3", title: "आँखों का दर्द", poem: "" },
      { id: "part5-unit4", title: "खामोश आँसू", poem: "" },
      { id: "part5-unit5", title: "अधूरी मोहब्बत", poem: "" }
    ]
  },

  {
    id: 6,
    title: "तन्हाई",
    icon: "🌑",
    units: [
      { id: "part6-unit1", title: "अकेली रात", poem: "" },
      { id: "part6-unit2", title: "खामोशी", poem: "" },
      { id: "part6-unit3", title: "खुद से बातें", poem: "" },
      { id: "part6-unit4", title: "सूना दिल", poem: "" },
      { id: "part6-unit5", title: "तन्हाई का सफ़र", poem: "" }
    ]
  },

  {
    id: 7,
    title: "शिकायतें",
    icon: "🖤",
    units: [
      { id: "part7-unit1", title: "एक शिकायत", poem: "" },
      { id: "part7-unit2", title: "तुम बदल गए", poem: "" },
      { id: "part7-unit3", title: "क्यों छोड़ा मुझे", poem: "" },
      { id: "part7-unit4", title: "कुछ सवाल", poem: "" },
      { id: "part7-unit5", title: "बिना जवाब", poem: "" }
    ]
  },

  {
    id: 8,
    title: "याद से मुक्ति",
    icon: "🍂",
    units: [
      { id: "part8-unit1", title: "भूलने की कोशिश", poem: "" },
      { id: "part8-unit2", title: "खुद को संभालना", poem: "" },
      { id: "part8-unit3", title: "पुरानी तस्वीरें", poem: "" },
      { id: "part8-unit4", title: "आखिरी याद", poem: "" },
      { id: "part8-unit5", title: "छोड़ देना", poem: "" }
    ]
  },

  {
    id: 9,
    title: "नई शुरुआत",
    icon: "🌅",
    units: [
      { id: "part9-unit1", title: "नई सुबह", poem: "" },
      { id: "part9-unit2", title: "खुद से मुलाकात", poem: "" },
      { id: "part9-unit3", title: "फिर से मुस्कुराना", poem: "" },
      { id: "part9-unit4", title: "नई राह", poem: "" },
      { id: "part9-unit5", title: "नई उम्मीद", poem: "" }
    ]
  },

  {
    id: 10,
    title: "मन के अनकहे स्वर",
    icon: "✨",
    units: [
      { id: "part10-unit1", title: "अनकही बात", poem: "" },
      { id: "part10-unit2", title: "दिल की आवाज़", poem: "" },
      { id: "part10-unit3", title: "आखिरी ख़त", poem: "" },
      { id: "part10-unit4", title: "अधूरा सफ़र", poem: "" },
      { id: "part10-unit5", title: "मन के अनकहे स्वर", poem: "" }
    ]
  }
];
  const allPoems = poemParts.flatMap((part) => part.units);
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
  <div className="poemsSection">

    {!poemsUnlocked ? (
      <div className="poemLock">

        <div className="poemLockIcon">
          🔒
        </div>

        <h2>Private Poetry Collection</h2>

        <p>
          Enter the code to unlock
          <br />
          “मन के अनकहे स्वर”
        </p>

        <input
          type="password"
          value={poemCode}
          onChange={(e) => setPoemCode(e.target.value)}
          placeholder="Enter 4-digit code"
          maxLength={4}
          inputMode="numeric"
        />

        <button
          type="button"
          onClick={() => {
            if (poemCode === "8083") {
              setPoemsUnlocked(true);
              setPoemCode("");
            } else {
              alert("Incorrect code");
            }
          }}
        >
          🔓 Unlock Poems
        </button>

      </div>
    ) : (

      <>
        {!selectedPoem && (
          <>
            <div className="poemsIntro">

              <span className="poemsLabel">
                ✍️ ORIGINAL POETRY COLLECTION
              </span>

              <h2>
                📖 मन के अनकहे स्वर
              </h2>

              <p>
                प्रेम, विरह, तन्हाई, दर्द, यादों और जीवन
                के अनकहे एहसासों की यात्रा।
              </p>

            </div>

            <div className="poemParts">

              {poemParts.map((part) => (
                <details
                  className="poemPart"
                  key={part.id}
                >

                  <summary className="partButton">

                    <span>
                      {part.icon} Part {part.id} — {part.title}
                    </span>

                    <span>
                      ＋
                    </span>

                  </summary>

                  <div className="unitList">

                    {part.units.map((unit, index) => (
                      <button
                        type="button"
                        className="unitItem"
                        key={unit.id}
                        onClick={(event) => {

                          event.preventDefault();
                          event.stopPropagation();

                          setCurrentPoemIndex(
                            allPoems.findIndex(
                              (poem) => poem.id === unit.id
                            )
                          );

                          setSelectedPoem(unit);

                        }}
                      >

                        <span>
                          📄
                        </span>

                        <span>
                          Unit {index + 1} — {unit.title}
                        </span>

                        <span>
                          →
                        </span>

                      </button>
                    ))}

                  </div>

                </details>
              ))}

            </div>
          </>
        )}

        {selectedPoem && (
          <div className="poemDisplay">

            <button
              type="button"
              className="poemClose"
              onClick={() => setSelectedPoem(null)}
            >
              ← Back to Units
            </button>

            <span className="poemsLabel">
              📖 मन के अनकहे स्वर
            </span>

            <h2>
              {selectedPoem.title}
            </h2>

            <div className="poemText">

              {selectedPoem.poem ? (

                selectedPoem.poem
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))

              ) : (

                <p>
                  ✍️ इस Unit की कविता जल्द ही यहाँ जोड़ी जाएगी।
                </p>

              )}

            </div>

            <button
              type="button"
              className="poemNext"
              disabled={
                currentPoemIndex >= allPoems.length - 1
              }
              onClick={() => {

                const nextIndex =
                  currentPoemIndex + 1;

                if (nextIndex < allPoems.length) {

                  setCurrentPoemIndex(nextIndex);

                  setSelectedPoem(
                    allPoems[nextIndex]
                  );

                }

              }}
            >
              {currentPoemIndex >= allPoems.length - 1
                ? "End"
                : "Next →"}
            </button>

          </div>
        )}

      </>

    )}

  </div>
)}
        {active === "research" && (
  <ResearchPage />
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
  <LibraryPage />
)}

      </main>

    </div>
  );
}

export default ExplorePage;;
