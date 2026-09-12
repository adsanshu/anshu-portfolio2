import React, { useState } from "react";

export default function ExplorePage({ onBack }) {
  const [active, setActive] = useState("home");

  return (
    <div className="explorePage">

      <button className="exploreBack" onClick={onBack}>
        ← Back
      </button>

      <header className="exploreHeader">
        <span className="eyebrow">ANSHU'S WORLD</span>
        <h1>Explore</h1>
        <p>My poems, research, ideas and library.</p>
      </header>

      <nav className="exploreMenu">
        <button onClick={() => setActive("home")}>🏠 Home</button>
        <button onClick={() => setActive("poems")}>📖 Poems</button>
        <button onClick={() => setActive("research")}>🔬 Research</button>
        <button onClick={() => setActive("ideas")}>💡 Ideas</button>
        <button onClick={() => setActive("library")}>📚 Library</button>
      </nav>

      <main className="exploreContent">

        {active === "home" && (
          <section>
            <h2>🏠 Home</h2>
            <p>
              Welcome to my personal creative and research space.
            </p>
          </section>
        )}

        {active === "poems" && (
          <section>
            <h2>📖 Poems</h2>
            <p>
              My original poetry collection will be available here.
            </p>
          </section>
        )}

        {active === "research" && (
          <section>
            <h2>🔬 Research</h2>
            <p>
              Research work, scientific thoughts and technology concepts.
            </p>
          </section>
        )}

        {active === "ideas" && (
          <section>
            <h2>💡 Ideas</h2>
            <p>
              New ideas, inventions, projects and startup concepts.
            </p>
          </section>
        )}

        {active === "library" && (
          <section>
            <h2>📚 Library</h2>
            <p>
              A collection of my poems, research and ideas.
            </p>
          </section>
        )}

      </main>
    </div>
  );
}
