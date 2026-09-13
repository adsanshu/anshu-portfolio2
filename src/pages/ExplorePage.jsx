import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExplorePage({ onBack }) {
  const [active, setActive] = useState("home");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [partOpen, setPartOpen] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);
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

const currentResearch = selectedResearch
  ? researchData[selectedResearch]
  : null;
const speakPoem = (text) => {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "hi-IN";
  utterance.rate = 0.85;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
};

const stopPoem = () => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
};
  const menuItems = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "poems", icon: "📖", label: "Poems" },
    { id: "research", icon: "🔬", label: "Research" },
    { id: "ideas", icon: "💡", label: "Ideas" },
    { id: "library", icon: "📚", label: "Library" }
  ];

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
        { id: "love-2", title: "Unit 2 — पहली मुलाक़ात" },
        { id: "love-3", title: "Unit 3 — मोहब्बत का एहसास" },
        { id: "love-4", title: "Unit 4 — किसी के लिए ख़ुद को खो देना" },
        { id: "love-5", title: "Unit 5 — बेपनाह मोहब्बत" }
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

      {!selectedUnit && (
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

      {active === "poems" && (
        <main className="exploreContent poemsSection">

          <div className="poemsIntro">
            <span className="poemsLabel">
              ✍️ ORIGINAL POETRY COLLECTION
            </span>

            <h2>📖 मन के अनकहे स्वर</h2>

            <p>
              प्रेम, विरह, तन्हाई, दर्द, यादों और जीवन के
              अनकहे एहसासों की यात्रा।
            </p>
          </div>

          {selectedUnit ? (
  <motion.article
    className="poemReader"
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >

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

<div className="poemControls">
  <button
    className="poemSpeak"
    onClick={() => speakPoem(selectedUnit.poem || "")}
  >
    🔊 कविता सुनें
  </button>

  <button
    className="poemStop"
    onClick={stopPoem}
  >
    ⏹ रोकें
  </button>
</div>

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
            </motion.article>
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

                  <AnimatePresence>
  {partOpen === part.id && (
    <motion.div
      className="unitList"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {part.units.map((unit, index) => (
        <motion.button
          className="unitButton"
          key={unit.id}
          onClick={() => setSelectedUnit(unit)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.06
          }}
        >
          <span>📄</span>
          <span>{unit.title}</span>
          <span>→</span>
        </motion.button>
      ))}
    </motion.div>
  )}
</AnimatePresence>

                </div>
              ))}

            </div>
          )}

        </main>
      )}

      {active === "research" && (
  <main className="exploreContent researchSection">

    {!selectedResearch ? (
      <>
        <div className="researchIntro">
          <span className="researchLabel">
            🔬 ENGINEERING & FUTURE TECHNOLOGY
          </span>

          <h2>Research & Discoveries</h2>

          <p>
            Simple explanations of engineering concepts, scientific ideas
            and technologies that may shape the future.
          </p>
        </div>

        <div className="researchGrid">

          {/* LASER PROPULSION */}

          <article className="researchCard">

            <div className="researchImage">
              <img
                src="/assets/research-laser.jpg"
                alt="Laser Propulsion"
              />
              <span>SPACE TECHNOLOGY</span>
            </div>

            <div className="researchBody">

              <h3>🚀 Laser Propulsion</h3>

              <p>
                Exploring how powerful laser beams could push spacecraft
                without carrying traditional fuel.
              </p>

              <div className="researchFacts">

                <div>
                  <small>FIELD</small>
                  <strong>Space Engineering</strong>
                </div>

                <div>
                  <small>STATUS</small>
                  <strong>Research Idea</strong>
                </div>

              </div>

              <button
                className="researchButton"
                onClick={() => setSelectedResearch("laser")}
              >
                Explore Research →
              </button>

            </div>
          </article>


          {/* SPACE ENERGY */}

          <article className="researchCard">

            <div className="researchImage">
              <img
                src="/assets/research-energy.jpg"
                alt="Space Energy Transfer"
              />
              <span>ENERGY SYSTEMS</span>
            </div>

            <div className="researchBody">

              <h3>⚡ Space Energy Transfer</h3>

              <p>
                Studying how energy might be transferred across very large
                distances using electromagnetic systems.
              </p>

              <div className="researchFacts">

                <div>
                  <small>FIELD</small>
                  <strong>Energy Engineering</strong>
                </div>

                <div>
                  <small>STATUS</small>
                  <strong>Concept Study</strong>
                </div>

              </div>

              <button
  className="researchButton"
  onClick={() => setSelectedResearch("energy")}
>
  Explore Research →
</button>

            </div>
          </article>


          {/* AI + MECHANICAL */}

          <article className="researchCard">

            <div className="researchImage">
              <img
                src="/assets/research-ai.jpg"
                alt="AI Mechanical Engineering"
              />
              <span>SMART ENGINEERING</span>
            </div>

            <div className="researchBody">

              <h3>🤖 AI + Mechanical Engineering</h3>

              <p>
                Exploring how artificial intelligence can improve design,
                manufacturing, automation and engineering decisions.
              </p>

              <div className="researchFacts">

                <div>
                  <small>FIELD</small>
                  <strong>Mechanical + AI</strong>
                </div>

                <div>
                  <small>STATUS</small>
                  <strong>Exploration</strong>
                </div>

              </div>

              <button
  className="researchButton"
  onClick={() => setSelectedResearch("ai")}
>
  Explore Research →
</button>

            </div>
          </article>


          {/* INTERSTELLAR */}

          <article className="researchCard">

            <div className="researchImage">
              <img
                src="/assets/research-interstellar.jpg"
                alt="Interstellar Propulsion"
              />
              <span>FUTURE SPACE</span>
            </div>

            <div className="researchBody">

              <h3>🌌 Interstellar Propulsion</h3>

              <p>
                Thinking about future propulsion systems that could make
                deep-space and interstellar missions possible.
              </p>

              <div className="researchFacts">

                <div>
                  <small>FIELD</small>
                  <strong>Space Propulsion</strong>
                </div>

                <div>
                  <small>STATUS</small>
                  <strong>Future Concept</strong>
                </div>

              </div>

              <button
  className="researchButton"
  onClick={() => setSelectedResearch("interstellar")}
>
  Explore Research →
</button>

            </div>
          </article>

        </div>
      </>
    ) : (

      /* RESEARCH DETAIL */

      <motion.article
        className="researchDetail"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <button
          className="researchBack"
          onClick={() => setSelectedResearch(null)}
        >
          ← Back to Research
        </button>

        <span className="researchDetailLabel">
          🚀 SPACE TECHNOLOGY
        </span>

        <h2>Laser Propulsion</h2>

        <p className="researchDetailIntro">
          A future propulsion concept where external laser energy
          provides momentum to a spacecraft, reducing the need to
          carry large amounts of onboard propellant.
        </p>


        <div className="researchDetailImage">
          <img
            src="/assets/research-laser.jpg"
            alt="Laser Propulsion Research"
          />
        </div>


        <div className="researchInfoGrid">

          <section>
            <span>01</span>
            <h3>🔎 Problem</h3>
            <p>
              Conventional spacecraft must carry their own propellant.
              Fuel adds mass and limits how much useful payload a
              spacecraft can carry.
            </p>
          </section>


          <section>
            <span>02</span>
            <h3>💡 Basic Idea</h3>
            <p>
              A powerful laser system located away from the spacecraft
              could transfer energy and momentum to a lightweight
              spacecraft.
            </p>
          </section>


          <section>
            <span>03</span>
            <h3>⚙️ How It Works</h3>
            <p>
              Laser light is directed toward a reflective sail.
              The interaction between light and the sail produces
              radiation pressure that can accelerate the spacecraft.
            </p>
          </section>


          <section>
            <span>04</span>
            <h3>🧪 Scientific Principle</h3>
            <p>
              Electromagnetic radiation carries momentum. When light
              interacts with a reflective surface, some of that momentum
              can produce a small pushing force.
            </p>
          </section>


          <section>
            <span>05</span>
            <h3>✅ Advantages</h3>
            <p>
              The spacecraft may need less onboard propellant,
              potentially reducing launch mass and enabling very high
              speeds over long acceleration periods.
            </p>
          </section>


          <section>
            <span>06</span>
            <h3>⚠️ Challenges</h3>
            <p>
              Extremely powerful laser systems, precise beam control,
              thermal management and maintaining acceleration over
              large distances are major engineering challenges.
            </p>
          </section>

        </div>


        <div className="researchFuture">

          <span>🚀 FUTURE POSSIBILITY</span>

          <h3>Where could this lead?</h3>

          <p>
            Advanced laser propulsion concepts could contribute to
            future high-speed space missions. Research is still required
            to solve the major engineering and energy challenges.
          </p>

        </div>

      </motion.article>

    )}

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
