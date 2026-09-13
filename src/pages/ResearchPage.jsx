import React from "react";
import "../styles/research.css";

function ResearchPage() {
  return (
    <div className="researchPage">

      <header className="researchHero">
        <span className="researchLabel">
          🔬 RESEARCH
        </span>

        <h1>Research & Discoveries</h1>

        <p>
          Engineering, science, space technology
          and future research concepts.
        </p>
      </header>

      <main className="researchContent">

        <section className="researchCard">
          <h2>🚀 Space Research</h2>
          <p>
            New concepts related to space technology,
            propulsion and future exploration.
          </p>
        </section>

        <section className="researchCard">
          <h2>⚙️ Engineering Research</h2>
          <p>
            Mechanical engineering, manufacturing,
            design and emerging technologies.
          </p>
        </section>

        <section className="researchCard">
          <h2>🧪 Science Research</h2>
          <p>
            Interesting scientific concepts,
            experiments and future possibilities.
          </p>
        </section>

      </main>

    </div>
  );
}

export default ResearchPage;
