"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const Hero2 = () => {
  const backgrounds = ["/images/mssn/hero.jpeg"];

  const [currentBg, setCurrentBg] = useState(0);
  const [nextBg, setNextBg] = useState(null);
  const [particles, setParticles] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextBg((currentBg + 1) % backgrounds.length);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        setNextBg(null);
      }, 1200);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentBg, backgrounds.length]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 5}s`,
    }));
    setParticles(generated);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    hero.style.setProperty("--mx", x.toFixed(2));
    hero.style.setProperty("--my", y.toFixed(2));
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-mssn" id="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      {backgrounds.map((bg, idx) => (
        <div key={idx} className={`hero-bg-img ${idx === currentBg ? "active" : ""} ${idx === nextBg ? "next" : ""}`} style={{ backgroundImage: `url('${bg}')` }} />
      ))}
      <div className="hero-overlay" />
      <div className="hero-shapes">
        <div className="shape shape-1" style={{ transform: "translate(calc(var(--mx,0.5)*30px), calc(var(--my,0.5)*-30px))" }} />
        <div className="shape shape-2" style={{ transform: "translate(calc(var(--mx,0.5)*-20px), calc(var(--my,0.5)*20px))" }} />
        <div className="shape shape-3" style={{ transform: "translate(calc(var(--mx,0.5)*15px), calc(var(--my,0.5)*10px))" }} />
      </div>
      <div className="particles">
        {particles.map((style, i) => <span key={i} className="particle" style={style} />)}
      </div>
      <div className="container hero-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-content">
              <span className="badge-founded">✦ Founded 1954</span>
              <h1 className="hero-title">MSSN A-Zone <br /><span className="gradient-text">Uniting Muslim Students</span></h1>
              <div className="hero-subtitle-wrapper">
                <p className="hero-motto">"There is no deity worthy of worship except ALLAH and Muhammad (SAW) is His messenger."</p>
                <p className="hero-subtitle">Building a community rooted in faith, knowledge, and brotherhood across institutions nationwide.</p>
              </div>
              <div className="hero-btns">
                <a href="#aims" className="btn btn-primary">Discover Our Aims</a>
                <a href="#programmes" className="btn btn-outline">Explore Programs</a>
              </div>
              <p className="hero-social-proof"><span className="pulse-dot" />1000+ Institutions Nationwide</p>
              <div className="scroll-indicator" onClick={scrollToNext} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && scrollToNext()}>
                <span className="arrow-down"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-mssn { position: relative; width: 100%; min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
        .hero-bg-img { position: absolute; inset: 0; background-size: cover; background-position: center; background-repeat: no-repeat; filter: blur(3px) brightness(0.7); transform: scale(1.05); opacity: 0; transition: opacity 1.2s ease; z-index: 0; }
        .hero-bg-img.active { opacity: 1; }
        /* --- LIGHTER OVERLAY --- */
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(100deg, rgba(10, 77, 60, 0.5) 0%, rgba(10, 77, 60, 0.3) 60%, rgba(0, 0, 0, 0.3) 100%); z-index: 1; }
        .hero-shapes .shape { position: absolute; border-radius: 50%; z-index: 1; pointer-events: none; }
        .shape-1 { width: 400px; height: 400px; top: -150px; right: -100px; background: radial-gradient(circle, rgba(197,157,95,0.15) 0%, transparent 70%); animation: floatShape1 25s ease-in-out infinite; }
        .shape-2 { width: 300px; height: 300px; bottom: -80px; left: -80px; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%); animation: floatShape2 30s ease-in-out infinite; }
        .shape-3 { width: 200px; height: 200px; top: 50%; left: 40%; background: radial-gradient(circle, rgba(197,157,95,0.1) 0%, transparent 70%); animation: floatShape3 20s ease-in-out infinite; }
        @keyframes floatShape1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(40px, -50px) scale(1.2); } }
        @keyframes floatShape2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-30px, 60px) scale(1.1); } }
        @keyframes floatShape3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(50px, 30px) scale(0.9); } }
        .particles { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .particle { position: absolute; width: 3px; height: 3px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: floatUp linear infinite; }
        @keyframes floatUp { 0% { transform: translateY(0) scale(1); opacity: 0.4; } 100% { transform: translateY(-100vh) scale(0); opacity: 0; } }
        .hero-container { position: relative; z-index: 2; width: 100%; }
        .hero-content { max-width: 750px; padding: 6rem 0 4rem; text-align: left; } /* Removed padding-left: 0 to allow standard flow */
        .badge-founded { display: inline-block; background: rgba(197, 157, 95, 0.2); color: #E8D2A6; font-weight: 600; font-size: 0.85rem; padding: 8px 20px; border-radius: 50px; margin-bottom: 2rem; border: 1px solid rgba(197, 157, 95, 0.4); backdrop-filter: blur(4px); }
        .hero-title { font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; color: #ffffff; margin-bottom: 2rem; letter-spacing: -0.5px; }
        .gradient-text { background: linear-gradient(135deg, #C59D5F, #E8D2A6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-subtitle-wrapper { margin-bottom: 2.5rem; }
        .hero-motto { font-size: 1.3rem; color: rgba(255, 255, 255, 0.95); line-height: 1.6; font-weight: 500; margin-bottom: 1rem; }
        .hero-subtitle { font-size: 1.05rem; color: rgba(255, 255, 255, 0.8); line-height: 1.7; max-width: 600px; }
        .hero-btns { display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 2rem; }
        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 16px 36px; border-radius: 50px; font-weight: 700; font-size: 1rem; text-decoration: none; transition: all 0.3s ease; cursor: pointer; border: none; }
        .btn-primary { background: #C59D5F; color: #0A4D3C; position: relative; overflow: hidden; }
        .btn-primary::after { content: ""; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s; }
        .btn-primary:hover::after { left: 100%; }
        .btn-primary:hover { background: #E8D2A6; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(197, 157, 95, 0.4); }
        .btn-outline { background: transparent; color: #fff; border: 2px solid rgba(255, 255, 255, 0.4); }
        .btn-outline:hover { background: #ffffff; color: #0A4D3C; border-color: #ffffff; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15); }
        .hero-social-proof { font-size: 0.95rem; color: rgba(255, 255, 255, 0.8); display: flex; align-items: center; gap: 10px; margin-bottom: 2.5rem; }
        .pulse-dot { width: 10px; height: 10px; border-radius: 50%; background: #C59D5F; display: inline-block; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(197, 157, 95, 0.6); } 70% { box-shadow: 0 0 0 10px rgba(197, 157, 95, 0); } 100% { box-shadow: 0 0 0 0 rgba(197, 157, 95, 0); } }
        .scroll-indicator { display: flex; flex-direction: column; align-items: flex-start; opacity: 0.6; transition: opacity 0.3s ease; cursor: pointer; }
        .scroll-indicator:hover { opacity: 1; }
        .arrow-down { color: rgba(255, 255, 255, 0.9); transition: color 0.3s ease; margin-top: 10px; }
        .scroll-indicator:hover .arrow-down { color: #C59D5F; transform: translateY(4px); }
        @media (max-width: 991px) { .hero-content { text-align: center; padding: 4rem 0 3rem; margin: 0 auto; max-width: 100%; } .hero-motto { font-size: 1.1rem; } .hero-subtitle { margin: 0 auto; } .hero-btns { justify-content: center; } .hero-social-proof { justify-content: center; } .scroll-indicator { align-items: center; } .hero-title { font-size: 2.8rem; } }
        @media (max-width: 767px) { .hero-content { padding: 3rem 0 2rem; } .hero-title { font-size: 2.2rem; } .btn { padding: 14px 28px; font-size: 0.9rem; } }
      `}</style>
    </section>
  );
};
export default Hero2;