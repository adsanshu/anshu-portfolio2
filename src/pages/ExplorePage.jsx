import React, { useState } from "react";

export default function ExplorePage({ onBack }) {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "poems", icon: "📖", label: "Poems" },
    { id: "research", icon: "🔬", label: "Research" },
    { id: "ideas", icon: "💡", label: "Ideas" },
    { id: "library", icon: "📚", label: "Library" }
  ];

  return (
    <div className="explorePage">

      {/* Back to Portfolio */}
      <button className="exploreBack" onClick={onBack}>
        ← Back
      </button>

      {/* Header */}
      <header className="exploreHeader">
        <span className="eyebrow">ANSHU'S WORLD</span>

        <h1>Explore</h1>

        <p>
          My poems, research, ideas and personal library.
        </p>
      </header>

      {/* Explore Navigation */}
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

      {/* HOME */}
      {active === "home" && (
        <main className="exploreContent">

          <h2>🏠 Welcome to Anshu's World</h2>

          <p>
            A personal space where creativity, engineering,
            research and new ideas come together.
          </p>

          <div className="exploreCards">

            <div className="exploreCard">
              <span>📖</span>
              <h3>Poems</h3>
              <p>
                Original poetry, emotions and thoughts.
              </p>
            </div>

            <div className="exploreCard">
              <span>🔬</span>
              <h3>Research</h3>
              <p>
                Scientific thoughts and technology concepts.
              </p>
            </div>

            <div className="exploreCard">
              <span>💡</span>
              <h3>Ideas</h3>
              <p>
                New inventions, projects and startup concepts.
              </p>
            </div>

            <div className="exploreCard">
              <span>📚</span>
              <h3>Library</h3>
              <p>
                A collection of creative and technical work.
              </p>
            </div>

          </div>

        </main>
      )}

      {/* POEMS */}
      {active === "poems" && (
        <main className="exploreContent">

          <h2>📖 Poems</h2>

          <p>
            My original poetry collection.
          </p>

          <div className="exploreCards">

            <div className="exploreCard">
              <span>✍️</span>
              <h3>Man Ke Ankahae Swar</h3>
              <p>
                An original collection of emotions,
                love, pain and untold feelings.
              </p>
            </div>

            <div className="exploreCard">
              <span>🪶</span>
              <h3>Original Writings</h3>
              <p>
                Poems and lyrical thoughts written
                from personal imagination.
              </p>
            </div>

          </div>

        </main>
      )}

      {/* RESEARCH */}
      {active === "research" && (
        <main className="exploreContent">

          <h2>🔬 Research</h2>

          <p>
            Scientific thoughts, engineering concepts
            and future technology.
          </p>

          <div className="exploreCards">

            <div className="exploreCard">
              <span>🚀</span>
              <h3>Laser Propulsion</h3>
              <p>
                Exploring the concept of radiation pressure
                and laser-based spacecraft propulsion.
              </p>
            </div>

            <div className="exploreCard">
              <span>⚙️</span>
              <h3>Mechanical Engineering</h3>
              <p>
                Engineering concepts, design,
                manufacturing and technology.
              </p>
            </div>

          </div>

        </main>
      )}

      {/* IDEAS */}
      {active === "ideas" && (
        <main className="exploreContent">

          <h2>💡 Ideas</h2>

          <p>
            Concepts, inventions, projects and
            future possibilities.
          </p>

          <div className="exploreCards">

            <div className="exploreCard">
              <span>🌱</span>
              <h3>Agro-Nexa</h3>
              <p>
                A technology-based agriculture concept
                for crop, soil and plant disease assistance.
              </p>
            </div>

            <div className="exploreCard">
              <span>🎓</span>
              <h3>Education Technology</h3>
              <p>
                Ideas for making learning more accessible
                through technology.
              </p>
            </div>

          </div>

        </main>
      )}

      {/* LIBRARY */}
      {active === "library" && (
        <main className="exploreContent">

          <h2>📚 Library</h2>

          <p>
            A growing collection of my creative,
            technical and research work.
          </p>

          <div className="exploreCards">

            <div className="exploreCard">
              <span>📖</span>
              <h3>Poetry</h3>
              <p>
                Original poems and lyrical writings.
              </p>
            </div>

            <div className="exploreCard">
              <span>🔬</span>
              <h3>Research</h3>
              <p>
                Scientific concepts and research ideas.
              </p>
            </div>

            <div className="exploreCard">
              <span>💻</span>
              <h3>Projects</h3>
              <p>
                Technology and engineering projects.
              </p>
            </div>

          </div>

        </main>
      )}

    </div>
  );
}
