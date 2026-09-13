import React, { useState } from "react";

function ExplorePage({ onBack }) {
  const [active, setActive] = useState("home");

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
          <>
            <h2>📖 Poems</h2>

            <p>
              मन के अनकहे स्वर — प्रेम, विरह,
              तन्हाई और जीवन के एहसासों की यात्रा।
            </p>
          </>
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
