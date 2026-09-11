import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award, ChevronRight, Code2, Download, ExternalLink, FileText, FolderKanban, GraduationCap,
  Github, Globe, Instagram, Languages, Linkedin, Mail, Menu, MessageCircle, Mic, Moon,
  Pause, Play, Search, Send, Square, Sun, Volume2, X, Youtube
} from 'lucide-react';
import { portfolio, copy } from './data/portfolio';
import './styles.css';

const sectionIds = ['about', 'education', 'skills', 'projects', 'certificates', 'achievements', 'resume', 'contact'];

function useSpeech(lang, setSpeaking, setPaused) {
  const [supported, setSupported] = useState(false);
  useEffect(() => setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window), []);
  const speak = (text) => {
    if (!supported) return false;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'Hindi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95;
    utterance.onend = () => { setSpeaking(false); setPaused(false); };
    utterance.onerror = () => { setSpeaking(false); setPaused(false); };
    window.speechSynthesis.speak(utterance);
    setSpeaking(true); setPaused(false);
    return true;
  };
  const pause = () => { window.speechSynthesis.pause(); setPaused(true); };
  const resume = () => { window.speechSynthesis.resume(); setPaused(false); };
  const stop = () => { window.speechSynthesis.cancel(); setSpeaking(false); setPaused(false); };
  return { supported, speak, pause, resume, stop };
}

function Header({ t, dark, setDark, lang, setLang, setMenu, searchOpen, setSearchOpen }) {
  return <header className="header">
    <button className="iconBtn mobileOnly" onClick={() => setMenu(true)} aria-label="Open menu"><Menu /></button>
    <a className="topBrand" href="#about"><span>AK</span> · ANSHU</a>
    <nav className="desktopNav">{sectionIds.slice(0, 7).map((id, i) => <a href={`#${id}`} key={id}>{t.nav[i]}</a>)}</nav>
    <div className="headerActions">
      <button className="iconBtn" onClick={() => setLang(lang === 'English' ? 'Hindi' : 'English')} title="Translate"><Languages /></button>
      <button className="iconBtn" onClick={() => setDark(!dark)} title="Theme">{dark ? <Sun /> : <Moon />}</button>
      <button className="iconBtn" onClick={() => setSearchOpen(!searchOpen)} title="Search"><Search /></button>
    </div>
  </header>;
}

function Sidebar({ t, menu, setMenu }) {
  return <aside className={`sidebar ${menu ? 'show' : ''}`}>
    <div className="brandRow"><div className="logo"><button
  type="button"
  className="profile-image-button"
  onClick={() => window.open("/assets/profile.jpg", "_blank")}
  aria-label="Open profile photo"
>
  <img
    src="/assets/profile.jpg"
    alt="Anshu Kumar Sharma"
    className="profile-image"
  />
</button></div><div><strong>Anshu Kumar Sharma</strong><small>Mechanical Engineering Student</small></div><button className="iconBtn closeSide" onClick={() => setMenu(false)}><X /></button></div>
    <nav>{sectionIds.map((id, i) => <a href={`#${id}`} onClick={() => setMenu(false)} key={id}>{t.nav[i]}</a>)}</nav>
    <div className="sideNote"><Code2 /><span>React Portfolio<small>Vercel-ready foundation</small></span></div>
  </aside>;
}

function Hero({ t, lang }) {
  const message = encodeURIComponent('Hello Anshu, I visited your portfolio and would like to connect with you.');
  const wa = `https://wa.me/${portfolio.whatsapp}?text=${message}`;
  return <section className="hero section" id="about">
    <div className="heroCopy">
      <span className="eyebrow">{t.hello}</span>
      <h1>Anshu Kumar <span>Sharma</span></h1>
      <h2>{portfolio.role} <i>·</i> {portfolio.headline}</h2>
      <p className="tagline">“{portfolio.tagline}”</p>
      <p className="intro">{lang === 'Hindi' ? 'मैं मैकेनिकल इंजीनियरिंग का छात्र हूँ और इंजीनियरिंग, कोडिंग तथा समस्या समाधान को जोड़कर व्यावहारिक प्रोजेक्ट बनाने में रुचि रखता हूँ।' : 'I am a Mechanical Engineering student interested in combining engineering, coding and problem solving to build practical projects.'}</p>
      <div className="buttonRow">
        <a className="btn primary" href="#projects">{t.viewProjects}<ChevronRight /></a>
        <a className="btn" href="#resume">{t.downloadResume}<Download /></a>
        <a className="btn whatsapp" href={wa} target="_blank" rel="noreferrer"><MessageCircle /> {t.whatsapp}</a>
      </div>
      <div className="socials">
        <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        <a href={portfolio.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
        <a href={portfolio.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube /></a>
        <a href={`mailto:${portfolio.email}`} aria-label="Email"><Mail /></a>
      </div>
    </div>
    <div className="heroVisual" aria-label="Portfolio visual placeholder">
      <div className="orbit orbitA" /><div className="orbit orbitB" /><div className="gear">⚙</div>
      <div className="portraitPlaceholder">
  <img
    src="/assets/profile.jpg"
    alt="Anshu Kumar Sharma"
    className="hero-profile-image"
  />
</div>
      <div className="quoteCard">“Small<br />Steps<br /><b>Big</b><br />Dreams”</div>
      <div className="statusChip"><span /> Available for learning & opportunities</div>
    </div>
  </section>;
}

function Education({ t }) {
  return (
    <section className="section" id="education">
      <SectionHead
        icon={<GraduationCap />}
        title={t.education}
        suffix={t.official}
      />

      <div className="eduGrid">
        {portfolio.education.map((e) => (
          <article className="card eduCard" key={e.title}>

            <div className="eduImage">
              {e.image ? (
                <img src={e.image} alt={e.title} />
              ) : (
                <div className="eduMark">
                  <span>{e.mark}</span>
                  <small>OFFICIAL</small>
                </div>
              )}
            </div>

            <div className="cardKicker">{e.type}</div>

            <h3>{e.title}</h3>

            <p>{e.subtitle}</p>

            <small className="muted">{e.detail}</small>

            <a
              className="outlineBtn"
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.visit} {e.type}
              <ExternalLink />
            </a>

          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ icon, title, suffix }) { return <div className="sectionHead"><h2>{icon}{title}</h2>{suffix && <span>{suffix}</span>}</div>; }

function Skills({ t }) {
  return (
    <section className="section" id="skills">
      <SectionHead
        icon={<Code2 />}
        title={t.skills}
        suffix="Technical & Soft Skills"
      />

      <div className="skillGrid">
        {portfolio.skills.map(([name, value]) => (
          <motion.div
            className="skill card"
            key={name}
            whileHover={{ y: -4 }}
          >
            <div className="skillHeader">
              <span>{name}</span>
              <b>{value}%</b>
            </div>

            <div className="bar">
              <i style={{ width: `${value}%` }} />
            </div>

            <small>
              {value >= 80
                ? "Advanced"
                : value >= 60
                ? "Intermediate"
                : "Learning"}
            </small>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects({ t, query }) {
  const results = portfolio.projects.filter((p) =>
    `${p.name} ${p.desc} ${p.tags.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <section className="section" id="projects">
      <SectionHead
        icon={<FolderKanban />}
        title={t.projects}
        suffix={`${results.length} ${t.projects.toLowerCase()}`}
      />

      <div className="projectGrid">
        {results.map((p) => (
          <motion.article
            layout
            className="card projectCard"
            key={p.name}
          >
            <div className="projectImage">
              {p.image ? (
                <img src={p.image} alt={p.name} />
              ) : (
                <div className="projectIconLarge">{p.icon}</div>
              )}
            </div>

            <div className="projectContent">
              <h3>{p.name}</h3>

              <p>{p.desc}</p>

              <div className="tags">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="projectActions">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn small"
                  >
                    Live Demo
                  </a>
                )}

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn small secondary"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {!results.length && (
        <div className="empty">{t.noResults}</div>
      )}
    </section>
  );
}

function Lists({ t }) {
  return (
    <div className="twoCol">

      { /* CERTIFICATES */}
      <div className="certificateImage">
  {typeof x !== "string" && x.image ? (
    <img src={x.image} alt={x.name} />
  ) : (
    <div className="certificatePlaceholder">
      <Award size={42} />
    </div>
  )}
</div>

<div className="certificateInfo">
  <h3>
    {typeof x === "string" ? x : x.name}
  </h3>

  {typeof x !== "string" && x.organization && (
    <p>{x.organization}</p>
  )}

  {typeof x !== "string" && x.detail && (
    <small>{x.detail}</small>
  )}

  {typeof x !== "string" && x.year && (
    <span className="certificateYear">
      {x.year}
    </span>
  )}

  {typeof x !== "string" && x.url && (
    <a
      href={x.url}
      target="_blank"
      rel="noopener noreferrer"
      className="outlineBtn"
    >
      View Certificate <ExternalLink />
    </a>
  )}
</div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section compact" id="achievements">
function Lists({ t }) {
  return (
    <div className="twoCol">

      {/* CERTIFICATES */}
      <section className="section compact" id="certificates">
        <SectionHead
          icon={<Award />}
          title={t.certificates}
          suffix="Verified Learning"
        />

        <div className="certificateGrid">
          {portfolio.certificates.map((x) => (
            <motion.article
              className="card certificateCard"
              key={typeof x === "string" ? x : x.name}
              whileHover={{ y: -4 }}
            >
              <div className="certificateImage">
                {typeof x !== "string" && x.image ? (
                  <img src={x.image} alt={x.name} />
                ) : (
                  <div className="certificatePlaceholder">
                    <Award size={42} />
                  </div>
                )}
              </div>

              <div className="certificateInfo">
                <h3>
                  {typeof x === "string" ? x : x.name}
                </h3>

                {typeof x !== "string" && x.organization && (
                  <p>{x.organization}</p>
                )}

                {typeof x !== "string" && x.detail && (
                  <small>{x.detail}</small>
                )}

                {typeof x !== "string" && x.year && (
                  <span className="certificateYear">
                    {x.year}
                  </span>
                )}

                {typeof x !== "string" && x.url && (
                  <a
                    href={x.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outlineBtn"
                  >
                    View Certificate <ExternalLink />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section compact" id="achievements">
        <SectionHead
          icon={<Award />}
          title={t.achievements}
          suffix="Highlights"
        />

        <div className="certificateGrid">
          {portfolio.achievements.map((x) => (
            <motion.article
              className="card certificateCard"
              key={x.name}
              whileHover={{ y: -5 }}
            >
              <div className="certificateImage">
                {x.image ? (
                  <img src={x.image} alt={x.name} />
                ) : (
                  <div className="certificatePlaceholder">
                    <Award size={42} />
                  </div>
                )}
              </div>

              <div className="certificateInfo">
                <span className="achievementLabel">
                  ACHIEVEMENT
                </span>

                <h3>{x.name}</h3>

                {x.detail && (
                  <p>{x.detail}</p>
                )}

                {x.year && (
                  <span className="certificateYear">
                    {x.year}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    </div>
  );
}
function Resume({ t }) {
  return (
    <section className="section resume" id="resume">
      <div>
        <span className="eyebrow">CURRICULUM VITAE</span>
        <h2>Ready to build something great together?</h2>
        <p>{t.resumeText}</p>
      </div>

      <a
        className="btn primary"
        href="/assets/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download /> {t.downloadResume}
      </a>
    </section>
  );
}

function Contact({ t }) {
  const wa = `https://wa.me/${portfolio.whatsapp}?text=${encodeURIComponent('Hello Anshu, I visited your portfolio and would like to connect with you.')}`;
  return <section className="section contact" id="contact"><div><SectionHead icon={<Mail />} title={t.contact} /><p>{t.contactText}</p><div className="contactDetails"><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a><a href={`tel:${portfolio.phone.replace(/\s/g, '')}`}>{portfolio.phone}</a><span>{portfolio.location}</span></div></div><a className="btn whatsapp" href={wa} target="_blank" rel="noreferrer"><MessageCircle /> {t.whatsapp}</a></section>;
}

function VoiceBar({ t, lang, speak, pause, resume, stop, speaking, paused, supported, pageText }) {
  const handlePlay = () => {
    if (speaking && !paused) pause(); else if (speaking && paused) resume(); else speak(pageText);
  };
  return <div className="voiceBar"><button className="voiceMain" onClick={handlePlay} title={supported ? t.listen : 'Speech synthesis not supported'}>{speaking && !paused ? <Pause /> : <Play />}</button><div className="voiceInfo"><b>{speaking ? (paused ? t.paused : t.speaking) : t.listen}</b><small>{supported ? `${lang} voice · browser speech` : 'Voice not supported in this browser'}</small></div><button className="iconBtn" onClick={stop} disabled={!speaking}><Square /></button><span className="voiceBadge"><Volume2 /> {lang}</span></div>;
}

function VoiceAssistant({ t, open, setOpen, lang }) {
  const [listening, setListening] = useState(false);
  const [result, setResult] = useState('');
  const recognitionRef = useRef(null);
  const supported = typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  const start = () => {
    if (!supported) { setResult('Speech-to-text is not supported by this browser. Try Chrome/Edge.'); return; }
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new Recognition();
    recognition.lang = lang === 'Hindi' ? 'hi-IN' : 'en-IN'; recognition.interimResults = false; recognition.continuous = false;
    recognition.onstart = () => setListening(true); recognition.onend = () => setListening(false); recognition.onerror = () => { setListening(false); setResult('Microphone access or speech recognition failed.'); };
    recognition.onresult = (event) => setResult(event.results[0][0].transcript);
    recognitionRef.current = recognition; recognition.start();
  };
  const stop = () => recognitionRef.current?.stop();
  return <AnimatePresence>{open && <motion.div className="panel voicePanel" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}><div className="panelTitle"><span><Mic /> {t.voiceTitle}</span><button className="iconBtn" onClick={() => setOpen(false)}><X /></button></div><div className="wave">••• 〰〰〰 •••</div><p>{t.voiceText}</p><button className="btn primary" onClick={listening ? stop : start}><Mic /> {listening ? t.stopListening : t.startListening}</button>{result && <div className="aiResult"><small>Transcript</small><p>{result}</p></div>}</motion.div>}</AnimatePresence>;
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') !== 'light');
  const [lang, setLang] = useState('English');
  const [menu, setMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const t = copy[lang];
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); }, [dark]);
  const { supported, speak, pause, resume, stop } = useSpeech(lang, setSpeaking, setPaused);
  useEffect(() => () => stop(), []);
  const pageText = useMemo(() => lang === 'Hindi'
    ? 'नमस्ते, मैं अंशु कुमार शर्मा हूँ। मैं मैकेनिकल इंजीनियरिंग का छात्र हूँ। यह पोर्टफोलियो मेरी शिक्षा, कौशल, प्रोजेक्ट, प्रमाणपत्र और उपलब्धियों के बारे में है।'
    : 'Hello, I am Anshu Kumar Sharma. I am a Mechanical Engineering student. This portfolio presents my education, skills, projects, certificates and achievements.', [lang]);
  return <div className="app">
    <Sidebar t={t} menu={menu} setMenu={setMenu} />
    <main><Header t={t} dark={dark} setDark={setDark} lang={lang} setLang={setLang} setMenu={setMenu} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <AnimatePresence>{searchOpen && <motion.div className="searchBar" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}><Search /><input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder={t.searchPlaceholder} /><button onClick={() => { setQuery(''); setSearchOpen(false); }}><X /></button></motion.div>}</AnimatePresence>
      <Hero t={t} lang={lang} /><Education t={t} /><Skills t={t} /><Projects t={t} query={query} /><Lists t={t} /><Resume t={t} />
      <section className="section academic" aria-label="Academic snapshot"><SectionHead icon={<GraduationCap />} title={t.academics} /><div className="academicGrid">{portfolio.academics.map(([label, value]) => <div className="stat" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></section>
      <Contact t={t} />
      <footer><span>AK · Anshu Kumar Sharma</span><span>© 2026 · {t.footer}</span></footer>
    </main>
    <div className="floatingTools"><button onClick={() => setVoiceOpen(v => !v)} title={t.voiceTitle}><Mic /></button><a href={`https://wa.me/${portfolio.whatsapp}`} target="_blank" rel="noreferrer" title="WhatsApp"><MessageCircle /></a></div>
    <VoiceAssistant t={t} open={voiceOpen} setOpen={setVoiceOpen} lang={lang} />
    <VoiceBar t={t} lang={lang} speak={speak} pause={pause} resume={resume} stop={stop} speaking={speaking} paused={paused} supported={supported} pageText={pageText} />
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
