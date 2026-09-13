import React, { useState } from "react";
import "../research.css";

const researchData = {
  laser: {
    label: "🚀 SPACE TECHNOLOGY",
    title: "Laser Propulsion",
    intro:
      "A future propulsion concept where external laser energy could provide momentum to a spacecraft, reducing the need to carry large amounts of onboard propellant.",
    image: "/assets/research-laser.jpg",
    alt: "Laser Propulsion Research",

    sections: [
      {
        number: "01",
        title: "🔎 Problem",
        text:
          "Conventional spacecraft must carry their own propellant. Fuel adds mass and limits how much useful payload a spacecraft can carry."
      },
      {
        number: "02",
        title: "💡 Basic Idea",
        text:
          "A powerful laser system located away from the spacecraft could transfer energy and momentum to a lightweight spacecraft."
      },
      {
        number: "03",
        title: "⚙️ How It Works",
        text:
          "Laser light can be directed toward a reflective sail. Radiation pressure from the light can produce a small pushing force."
      },
      {
        number: "04",
        title: "🧪 Scientific Principle",
        text:
          "Electromagnetic radiation carries momentum. When light interacts with a reflective surface, part of that momentum can produce thrust."
      },
      {
        number: "05",
        title: "✅ Advantages",
        text:
          "The spacecraft may need less onboard propellant, potentially reducing launch mass and allowing long-duration acceleration."
      },
      {
        number: "06",
        title: "⚠️ Challenges",
        text:
          "Powerful laser systems, beam control, thermal management and maintaining the beam over large distances are major engineering challenges."
      }
    ],

    future:
      "Advanced laser propulsion concepts could contribute to future high-speed space missions. Significant research is still required to solve the engineering and energy challenges."
  },

  energy: {
    label: "⚡ ENERGY SYSTEMS",
    title: "Space Energy Transfer",
    intro:
      "A concept exploring whether energy could be transferred across very large distances using electromagnetic systems.",
    image: "/assets/research-energy.jpg",
    alt: "Space Energy Transfer Research",

    sections: [
      {
        number: "01",
        title: "🔎 Problem",
        text:
          "Future spacecraft and remote systems may need reliable energy far away from conventional power infrastructure."
      },
      {
        number: "02",
        title: "💡 Basic Idea",
        text:
          "Energy could potentially be generated at one location and transferred through directed electromagnetic radiation to another location."
      },
      {
        number: "03",
        title: "⚙️ How It Works",
        text:
          "A transmitter converts electrical energy into electromagnetic radiation. A receiving system captures part of the radiation and converts it back into usable electrical energy."
      },
      {
        number: "04",
        title: "🧪 Scientific Principle",
        text:
          "Electromagnetic waves can transport energy through space without requiring a physical cable between the source and receiver."
      },
      {
        number: "05",
        title: "✅ Advantages",
        text:
          "Wireless energy transfer could provide new possibilities for remote systems, spacecraft and future space infrastructure."
      },
      {
        number: "06",
        title: "⚠️ Challenges",
        text:
          "Transmission efficiency, beam spreading, accurate pointing, atmospheric effects and safety are important engineering challenges."
      }
    ],

    future:
      "Long-distance wireless energy systems could become useful for future space infrastructure if efficiency, safety and beam-control problems can be solved."
  },

  ai: {
    label: "🤖 SMART ENGINEERING",
    title: "AI + Mechanical Engineering",
    intro:
      "Exploring how artificial intelligence could support mechanical engineering design, manufacturing, maintenance and engineering decisions.",
    image: "/assets/research-ai.jpg",
    alt: "AI Mechanical Engineering Research",

    sections: [
      {
        number: "01",
        title: "🔎 Problem",
        text:
          "Modern engineering produces large amounts of design, manufacturing and machine data that can be difficult to analyse manually."
      },
      {
        number: "02",
        title: "💡 Basic Idea",
        text:
          "AI systems can analyse engineering data and assist engineers with prediction, optimisation and decision-making."
      },
      {
        number: "03",
        title: "⚙️ Applications",
        text:
          "AI can support predictive maintenance, defect detection, design optimisation, process monitoring and manufacturing automation."
      },
      {
        number: "04",
        title: "🧪 Scientific Principle",
        text:
          "Machine-learning models identify patterns in data and use those patterns to make predictions or classifications."
      },
      {
        number: "05",
        title: "✅ Advantages",
        text:
          "AI may reduce repetitive analysis, identify hidden patterns and help engineers make faster data-informed decisions."
      },
      {
        number: "06",
        title: "⚠️ Challenges",
        text:
          "Data quality, model reliability, explainability, cybersecurity and human verification remain important challenges."
      }
    ],

    future:
      "The combination of AI and mechanical engineering could lead to smarter manufacturing systems, intelligent machines and more efficient engineering workflows."
  },

  interstellar: {
    label: "🌌 FUTURE SPACE",
    title: "Interstellar Propulsion",
    intro:
      "A long-term research concept focused on propulsion systems that could potentially enable spacecraft to travel toward other star systems.",
    image: "/assets/research-interstellar.jpg",
    alt: "Interstellar Propulsion Research",

    sections: [
      {
        number: "01",
        title: "🔎 Problem",
        text:
          "Interstellar distances are extremely large, making conventional chemical propulsion unsuitable for practical travel between stars."
      },
      {
        number: "02",
        title: "💡 Basic Idea",
        text:
          "Future propulsion systems could attempt to achieve much higher spacecraft velocities than conventional rockets."
      },
      {
        number: "03",
        title: "⚙️ Possible Methods",
        text:
          "Concepts include laser sails, nuclear propulsion and other advanced propulsion technologies that are still under research."
      },
      {
        number: "04",
        title: "🧪 Scientific Principle",
        text:
          "Higher spacecraft velocity reduces travel time. Relativistic physics becomes increasingly important as velocity approaches the speed of light."
      },
      {
        number: "05",
        title: "✅ Possibilities",
        text:
          "Advanced propulsion could expand the range of robotic exploration and eventually provide new approaches to interstellar missions."
      },
      {
        number: "06",
        title: "⚠️ Challenges",
        text:
          "Energy requirements, spacecraft shielding, communication, navigation and extremely long mission durations are major challenges."
      }
    ],

    future:
      "Interstellar travel remains a major long-term scientific challenge. Continued research in propulsion, materials, energy and autonomous systems may gradually expand what is possible."
  }
};

function ResearchPage() {
  const [selectedResearch, setSelectedResearch] = useState(null);

  const currentResearch = selectedResearch
    ? researchData[selectedResearch]
    : null;

  return (
    <div className="researchPage">

      {!currentResearch ? (
        <>
          {/* HERO */}
          <header className="researchHero">
            <span className="researchLabel">
              🔬 RESEARCH
            </span>

            <h1>Research & Discoveries</h1>

            <p>
              Exploring engineering, science, space technology,
              artificial intelligence and future research concepts.
            </p>
          </header>

          {/* RESEARCH CARDS */}
          <main className="researchGrid">

            {Object.entries(researchData).map(([id, research]) => (
              <article
                className="researchCard"
                key={id}
                onClick={() => setSelectedResearch(id)}
              >

                <div className="researchImageWrapper">
                  <img
                    src={research.image}
                    alt={research.alt}
                    className="researchImage"
                  />

                  <span className="researchCardLabel">
                    {research.label}
                  </span>
                </div>

                <div className="researchCardBody">

                  <h2>{research.title}</h2>

                  <p>
                    {research.intro}
                  </p>

                  <button
                    type="button"
                    className="researchReadButton"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedResearch(id);
                    }}
                  >
                    Explore Research →
                  </button>

                </div>

              </article>
            ))}

          </main>
        </>
      ) : (
        <>
          {/* DETAIL PAGE */}

          <main className="researchDetail">

            <button
              type="button"
              className="researchBackButton"
              onClick={() => setSelectedResearch(null)}
            >
              ← Back to Research
            </button>

            {/* DETAIL HERO */}

            <section className="researchDetailHero">

              <div className="researchDetailImageBox">
                <img
                  src={currentResearch.image}
                  alt={currentResearch.alt}
                  className="researchDetailImage"
                />
              </div>

              <div className="researchDetailIntro">

                <span className="researchLabel">
                  {currentResearch.label}
                </span>

                <h1>
                  {currentResearch.title}
                </h1>

                <p>
                  {currentResearch.intro}
                </p>

              </div>

            </section>

            {/* RESEARCH SECTIONS */}

            <section className="researchSections">

              {currentResearch.sections.map((section) => (
                <article
                  className="researchSectionCard"
                  key={section.number}
                >

                  <div className="researchSectionNumber">
                    {section.number}
                  </div>

                  <div className="researchSectionContent">

                    <h2>
                      {section.title}
                    </h2>

                    <p>
                      {section.text}
                    </p>

                  </div>

                </article>
              ))}

            </section>

            {/* FUTURE */}

            <section className="researchFuture">

              <span>
                🔮 FUTURE DIRECTION
              </span>

              <h2>
                Future Possibilities
              </h2>

              <p>
                {currentResearch.future}
              </p>

            </section>

            {/* BACK BUTTON */}

            <button
              type="button"
              className="researchBackBottom"
              onClick={() => setSelectedResearch(null)}
            >
              ← Back to Research
            </button>

          </main>
        </>
      )}

    </div>
  );
}

export default ResearchPage;
