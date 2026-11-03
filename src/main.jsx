import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { content as c } from './content';
import './style.css';

function Heading({ data }) { return <header className="section-heading"><span className="eyebrow">{data[0]}</span><h2>{data[1]}</h2><p>{data[2]}</p></header>; }
function Photo({ photo, large = false }) { const [failed, setFailed] = useState(false); return photo.src && !failed ? <img src={photo.src} alt={photo.alt} onError={() => setFailed(true)} loading={large ? 'eager' : 'lazy'}/> : <div className="photo-placeholder"><span className="sun"/><span className="hills"/><span className="placeholder-label">{c.placeholder}</span></div>; }
function App() {
  const [selected, setSelected] = useState(null), [opened, setOpened] = useState(false), [surprise, setSurprise] = useState(false), [burst, setBurst] = useState(0), [playing, setPlaying] = useState(false), [musicError, setMusicError] = useState(false);
  const audio = useRef(null), close = useRef(null), photoTrigger = useRef(null);
  useEffect(() => { document.title = c.title; }, []);
  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; close.current?.focus();
    const key = e => { if (e.key === 'Escape') setSelected(null); if (e.key === 'Tab') { e.preventDefault(); close.current?.focus(); } };
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', key); photoTrigger.current?.focus(); };
  }, [selected]);
  async function toggleMusic() { if (!audio.current) return; if (playing) { audio.current.pause(); setPlaying(false); } else { try { audio.current.volume = c.music.volume; await audio.current.play(); setPlaying(true); setMusicError(false); } catch { setMusicError(true); } } }
  function reveal() { setSurprise(true); setBurst(v => v + 1); }
  return <>
    <nav className="nav"><a href="#top" className="brand"><span className="brand-disc">◉</span>{c.brand}</a><span className="nav-note">{c.edition}</span><a href="#letter" className="nav-link">{c.ui.navLetter}</a></nav>
    <main id="top">
      <section className="hero">
        <div className="hero-copy"><span className="eyebrow"><i className="dot"/> {c.ui.special} · {c.birthday.replaceAll('-', '.')}</span><h1>{c.headline[0]}<br/><em>{c.headline[1]}</em></h1><p>{c.intro}</p><a className="button dark" href="#memories"><span>▶</span>{c.play}</a><div className="hero-foot"><span className="tiny-stars">✦ ✧</span><span>从 {c.startDate.replaceAll('-', '.')} {c.ui.since}</span></div></div>
        <div className="record-scene"><div className={`vinyl ${playing ? 'spinning' : ''}`}><div className="record-label"><span>{c.ui.side}</span><strong>{c.ui.recordTitle[0]}<br/>{c.ui.recordTitle[1]}</strong><small>{c.ui.rpm}</small><i/></div></div><div className="album-cover"><div className="cover-top"><span>{c.ui.coverTop}</span><span>{c.ui.coverNumber}</span></div><div className="cover-art"><span className="art-sun"/><span className="art-hill one"/><span className="art-hill two"/><span className="art-path"/><span className="art-star">✦</span></div><div className="cover-title">{c.ui.coverTitle[0]}<br/>{c.ui.coverTitle[1]}<span>{c.ui.coverSubtitle}</span></div><div className="cover-bottom">{c.recipient} <span>♡</span></div></div><span className="record-caption">{c.ui.recordCaption}</span></div>
        <div className="hero-bottom"><span>{c.album} <span className="muted"> / {c.artist}</span></span><a href="#memories">{c.scroll} ↓</a></div>
      </section>
      <div className="marquee" aria-hidden="true">{c.ui.marquee}</div>
      <section id="memories" className="section memories"><Heading data={c.sections.photos}/><div className="photo-grid">{c.photos.map((p, i) => <button className={`polaroid p${i % 4}`} key={i} onClick={e => { photoTrigger.current = e.currentTarget; setSelected(i); }} aria-label={`${c.ui.photoAction}${p.caption}`}><div className="photo-image"><Photo photo={p}/><span className="photo-number">0{i + 1}</span></div><div className="photo-caption"><h3>{p.caption}</h3><p>{p.date} <span>↗</span></p></div></button>)}</div><p className="handwritten">{c.ui.photoHint}</p></section>
      <section id="story" className="section story"><Heading data={c.sections.timeline}/><div className="timeline">{c.timeline.map((item, i) => <article className="timeline-item" key={i}><span className="timeline-date">{item.date}</span><div className="timeline-point"/><div className="timeline-copy"><span className="tag">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div><span className="story-end">{c.ui.storyEnd}</span></section>
      <section id="letter" className="section letter-section"><Heading data={c.sections.letter}/><div className={`letter-wrap ${opened ? 'opened' : ''}`}><div className="envelope"><span className="envelope-address">{c.letter.envelope}</span><button className="seal" onClick={() => setOpened(!opened)} aria-expanded={opened} aria-controls="letter-content" aria-label={opened ? c.letter.close : c.letter.open}>♡</button><span className="envelope-hint">{opened ? c.letter.close : c.letter.open} ↗</span></div>{opened && <article className="letter-paper" id="letter-content"><span className="eyebrow">{c.ui.dear}</span><h3>{c.letter.greeting}</h3>{c.letter.paragraphs.map((p,i) => <p key={i}>{p}</p>)}<p className="letter-wish">{c.letter.wish}</p><div className="signature">{c.letter.signature}<small>{c.letter.date}</small></div></article>}</div></section>
      <section className="section surprise"><Heading data={c.sections.surprise}/><span className="sparkle">✧</span>{!surprise ? <button className="button dark" onClick={reveal}>✦ {c.surprise.button}</button> : <div className="surprise-result" aria-live="polite"><h3>{c.surprise.revealed}</h3><div className="ticket"><span>♡</span><div><small>{c.surprise.code}</small><h4>{c.surprise.ticket}</h4><p>{c.surprise.text}</p></div><span className="ticket-edge">∞</span></div><button className="text-button" onClick={reveal}>{c.surprise.again} ↗</button></div>}{burst > 0 && <div className="confetti" key={burst} aria-hidden="true">{Array.from({length:28}, (_,i) => <i key={i} style={{'--x': `${(i * 37) % 100}%`, '--delay': `${(i % 7) * .08}s`, '--color': ['#9d4938','#d5a95f','#64806b'][i % 3], '--rotate': `${i * 31}deg`}}/>)}</div>}</section>
    </main><footer><span>◉ {c.brand}</span><p>{c.footer}</p><a href="#top">{c.ui.back}</a></footer>
    <div className="music-player"><button onClick={toggleMusic} disabled={!c.music.src} aria-label={playing ? c.ui.pause : c.ui.playMusic} aria-pressed={playing}><span className={playing ? 'spinning' : ''}>◉</span></button><div><strong>{c.music.title}</strong><small role="status">{musicError ? c.ui.musicError : !c.music.src ? c.music.empty : playing ? c.ui.playing : c.ui.idle}</small></div><span className={`equalizer ${playing ? 'active' : ''}`}><i/><i/><i/></span></div>
    {c.music.src && <audio ref={audio} src={c.music.src} loop preload="none" onError={() => { setPlaying(false); setMusicError(true); }}/>}
    {selected !== null && <div className="modal" role="dialog" aria-modal="true" aria-label={c.photos[selected].caption} onClick={() => setSelected(null)}><button className="modal-close" ref={close} onClick={() => setSelected(null)} aria-label={c.closePhoto}>×</button><figure onClick={e => e.stopPropagation()}><div className="modal-image"><Photo key={selected} photo={c.photos[selected]} large/></div><figcaption><h3>{c.photos[selected].caption}</h3><p>{c.photos[selected].note}</p></figcaption></figure></div>}
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
