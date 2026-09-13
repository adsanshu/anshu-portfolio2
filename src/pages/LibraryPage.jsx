
import React, { useState } from "react";
import "../library.css";

const libraryData = {
  mechanical: {
    icon: "⚙️",
    title: "Mechanical Engineering",
    description:
      "Core mechanical engineering subjects, notes, concepts and learning resources.",
    subjects: [
      {
        icon: "📐",
        title: "Strength of Materials",
        text: "Theory, formulas, solved examples and important questions.",
      },
      {
        icon: "🏭",
        title: "Manufacturing",
        text: "Processes, machines, diagrams and manufacturing concepts.",
      },
      {
        icon: "🔥",
        title: "Thermodynamics",
        text: "Concepts, laws, cycles and numerical problems.",
      },
      {
        icon: "💧",
        title: "Fluid Mechanics",
        text: "Fluid properties, flow concepts, formulas and problems.",
      },
      {
        icon: "⚙️",
        title: "Machine Design",
        text: "Design concepts, components, standards and examples.",
      },
    ],
  },

  drawing: {
    icon: "📐",
    title: "Engineering Drawing",
    description:
      "Engineering graphics, projections, CAD concepts and design fundamentals.",
    subjects: [
      {
        icon: "📏",
        title: "Engineering Graphics",
        text: "Basic drawing concepts, lines, scales and geometrical construction.",
      },
      {
        icon: "📊",
        title: "Projection",
        text: "Orthographic, isometric and other projection methods.",
      },
      {
        icon: "💻",
        title: "CAD & Design",
        text: "Computer-aided design concepts and drafting fundamentals.",
      },
    ],
  },

  coding: {
    icon: "💻",
    title: "Coding & Technology",
    description:
      "Programming, web development and technology learning resources.",
    subjects: [
      {
        icon: "🌐",
        title: "HTML & CSS",
        text: "Web structure, styling and responsive design fundamentals.",
      },
      {
        icon: "⚡",
        title: "JavaScript",
        text: "Programming logic, DOM, events and interactive websites.",
      },
      {
        icon: "🐍",
        title: "Python",
        text: "Programming fundamentals, logic and practical examples.",
      },
    ],
  },

  science: {
    icon: "🔬",
    title: "Science & Research",
    description:
      "Science, space technology, AI and future engineering concepts.",
    subjects: [
      {
        icon: "🚀",
        title: "Space Technology",
        text: "Space propulsion, energy systems and future technologies.",
      },
      {
        icon: "🤖",
        title: "AI & Engineering",
        text: "Artificial intelligence applications in engineering.",
      },
      {
        icon: "⚡",
        title: "Energy Systems",
        text: "Energy generation, transfer and future energy concepts.",
      },
    ],
  },
};

function LibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const currentCategory = selectedCategory
    ? libraryData[selectedCategory]
    : null;

  return (
    <div className="libraryPage">

      {!currentCategory ? (
        <>
          {/* HERO */}

          <section className="libraryHero">

            <span className="libraryLabel">
              📚 KNOWLEDGE LIBRARY
            </span>

            <h1>
              Learn. Explore. Grow.
            </h1>

            <p>
              Books, engineering notes, study resources,
              research material and useful references —
              all in one place.
            </p>

          </section>


          {/* CATEGORY CARDS */}

          <section className="libraryGrid">

            {Object.entries(libraryData).map(
              ([id, category]) => (

                <article
                  className="libraryCard"
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                >

                  <div className="libraryCardIcon">
                    {category.icon}
                  </div>

                  <div className="libraryCardContent">

                    <h2>
                      {category.title}
                    </h2>

                    <p>
                      {category.description}
                    </p>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedCategory(id);
                      }}
                    >
                      Explore →
                    </button>

                  </div>

                </article>

              )
            )}

          </section>


          {/* COMING SOON */}

          <section className="libraryComingSoon">

            <div className="libraryComingIcon">
              📖
            </div>

            <div>
              <h3>
                More Resources Coming Soon
              </h3>

              <p>
                Notes • PDFs • Books • PYQs •
                Learning Resources
              </p>
            </div>

          </section>

        </>

      ) : (

        /* CATEGORY DETAIL */

        <section className="libraryDetail">

          <button
            type="button"
            className="libraryBack"
            onClick={() => setSelectedCategory(null)}
          >
            ← Back to Library
          </button>


          <div className="libraryDetailHero">

            <div className="libraryDetailIcon">
              {currentCategory.icon}
            </div>

            <div>

              <span className="libraryLabel">
                KNOWLEDGE CATEGORY
              </span>

              <h1>
                {currentCategory.title}
              </h1>

              <p>
                {currentCategory.description}
              </p>

            </div>

          </div>


          {/* RESOURCE TABS */}

          <div className="libraryTabs">

            <button className="active">
              Subjects
            </button>

            <button>
              Notes
            </button>

            <button>
              PYQs
            </button>

            <button>
              Books / References
            </button>

          </div>


          {/* SUBJECT LIST */}

          <div className="librarySubjects">

            <h2>
              📚 Subjects
            </h2>

            {currentCategory.subjects.map(
              (subject, index) => (

                <article
                  className="librarySubject"
                  key={index}
                >

                  <div className="librarySubjectIcon">
                    {subject.icon}
                  </div>

                  <div className="librarySubjectContent">

                    <h3>
                      {subject.title}
                    </h3>

                    <p>
                      {subject.text}
                    </p>

                  </div>

                  <span className="libraryArrow">
                    →
                  </span>

                </article>

              )
            )}

          </div>


          {/* FUTURE RESOURCES */}

          <div className="libraryFuture">

            <span>
              🚧
            </span>

            <div>

              <h3>
                Resources Coming Soon
              </h3>

              <p>
                Notes, PDFs, previous-year questions
                and recommended books will be added here.
              </p>

            </div>

          </div>

        </section>
      )}

    </div>
  );
}

export default LibraryPage;
