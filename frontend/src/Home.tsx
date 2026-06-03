import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import TextBox from './components/textBox.js';
import dummy from "./assets/home/dummy.jpg";
import dummy1 from "./assets/home/dummy1.jpg";
import dummy2 from "./assets/home/dummy2.jpg";
import dummy3 from "./assets/home/dummy3.jpg";
import electrical1 from "./assets/home/electrical_!.jpg";
import mechanical1 from "./assets/home/mechanical_1.jpg";


const Home: React.FC = () => {
  const navigate = useNavigate();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = [dummy, dummy2, dummy3, electrical1, mechanical1, dummy1];

  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex]);
  const limit = 6; // max px the follower drifts from its anchor

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const anchorX = window.innerWidth / 2;
      const anchorY = window.innerHeight / 2;
      const diffX = e.clientX - anchorX;
      const diffY = e.clientY - anchorY;
      const norm = Math.sqrt(diffX * diffX + diffY * diffY) || 1;
      setMouseOffset({
        x: (diffX / norm) * limit,
        y: (diffY / norm) * limit,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
    
  const impact_text = "Our crash test dummy addresses this gap by accurately representing female body geometry \
and biomechanics using low-cost, accessible materials. This makes inclusive testing more affordable and scalable, \
allowing vehicle safety designs to better account for women’s injury risk without the high cost of traditional crash test models.";
  const ps_text = "According to a University of Virginia study, seatbelt-wearing female drivers are 47% more likely to \
  sustain severe injuries than belt-restrained males in comparable crashes. Current crash tests rely primarily on \
  50th-percentile male and 5th-percentile female dummies. As a result, vehicles remain largely untested for the average \
  woman’s body geometry, biomechanics, and injury risk. ";

//   const pd_text = "Our platform leverages cutting-edge bioengineering tools to develop wearable sensors \
// that monitor physiological signals in real time, ensuring accurate and personalized health insights across diverse users.";


  return (
    <div className="main-layout"> 
<div className="vstack">
  <div className="hero-content">
            <div className="vstack">
                  <div className="hero-text">
                    FEMALE CRASH DUMMY SIMULATOR
                  </div>
                  <div className="hero-textboxes">  
                    <TextBox
                        text={`Building a low-cost, inclusive crash test dummy to close the gender gap in vehicle safety. The Female Crash Dummy Simulator lets you explore impact data and safety insights modeled after a 50th percentile woman — making bioengineering research more representative of the people it's meant to protect.`}
                        className="hero-intro"
                        style={{ width: '598px', height: '370px' }}
                    />
                    <TextBox
                        title="Our Mission"
                        text={`We aim to develop a low-cost female crash test dummy modeled after a 50th percentile woman to address the gender gaps in vehicle safety testing.`}
                        className="mission-follower"
                        style={{
                          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
                        }}
                    />
                  </div>
              </div>
            </div>
          <div className="buttons-container">
      <button className="Simulate" onClick={() => navigate("/simulator")}>Simulate</button>
        <div className="hStack">
          <button className="AboutUs" onClick={() => navigate("/about_us")}>About Us</button>
          <button className="RealData" onClick={() => navigate("/real_data")}>Real Data</button>
          <button className="Information" onClick={() => navigate("/info")}>Information</button>
        </div>
        </div>
        <div className="descriptions">
          <div className="description-block">
            <h1>Problem Statement</h1>
            <TextBox
              text={ps_text}
              className="bottom-textboxes"
            />
          </div>

          <div className="description-block">
            <h1>Impact</h1>
            <div style={{display:"flex", flexDirection:"row", gap:"4%", alignItems:"flex-start"}}>
              <TextBox
                text={impact_text}
                className="bottom-textboxes"
                style={{width:"50%"}}
              />
              <img src={dummy1} style={{width:"55%", aspectRatio:"16 / 9", height:"auto", objectFit:"cover", borderRadius:"12px"}}/>
            </div>
          </div>
          
          <div className="description-block">
            <h1>Teams</h1>

            <div className="hStack">
              <div className="team-stack">
                <TextBox
                  title="Electrical"
                  className="team-names"
                />
                <button className="buttons-container LearnMore" onClick={() => navigate("/team/electrical")}>LEARN MORE</button>
              </div>

              <div className="team-stack">
                <TextBox
                  title="Mechanical"
                  className="team-names"
                />
                <button className="buttons-container LearnMore" onClick={() => navigate("/team/mechanical")}>LEARN MORE</button>
              </div>

              <div className="team-stack">
                <TextBox
                  title="Software"
                  className="team-names"
                />
                <button className="buttons-container LearnMore" onClick={() => navigate("/team/software")}>LEARN MORE</button>
              </div>
            </div>
          </div>

          <div className="description-block">
            <div className="images">
              {galleryImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  onClick={() => setLightboxIndex(i)}
                  style={{ cursor: "zoom-in" }}
                />
              ))}
            </div>
          </div>

          <div className="resources">  
            <button className="resource-buttons" onClick={() => {}}>slides</button>
            <button className="resource-buttons" onClick={() => window.open("https://discord.com/channels/@me/1458676107925520405/1511541793055834183", "_blank", "noopener,noreferrer")}>resources</button>
            <button className="resource-buttons" onClick={() => window.open("https://www.figma.com/design/pYCHiJ3niK84WnfMWRkh01/BMES-FCD?node-id=0-1&t=TlzwBYwCP5b6WsX7-1", "_blank", "noopener,noreferrer")}>figma</button>
          </div>

        </div>
</div>

      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={galleryImages[lightboxIndex]}
            alt=""
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
