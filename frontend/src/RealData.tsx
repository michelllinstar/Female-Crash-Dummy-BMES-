import React from "react";
import "./RealData.css";
import test1Video from "./assets/videos/Test 1_C1H1S001.mp4";
import test2Video from "./assets/videos/Test 2_C1H1S001.mp4";
import test3Video from "./assets/videos/Test 3_C1H1S001.mp4";
import test4Video from "./assets/videos/Test 4_C1H1S001.mp4";
import test5Video from "./assets/videos/Test 5_C1H1S001.mp4";

import accel1 from "./assets/realdata/accel_1.png";
import accel2 from "./assets/realdata/accel_2.png";
import accel3 from "./assets/realdata/accel_3.png";
import accel5 from "./assets/realdata/accel_5.png";
import accel8 from "./assets/realdata/accel_8.png";
import gyro1 from "./assets/realdata/gyro_1.png";
import gyro2 from "./assets/realdata/gyro_2.png";
import gyro3 from "./assets/realdata/gyro_3.png";
import gyro5 from "./assets/realdata/gyro_5.png";
import gyro8 from "./assets/realdata/gyro_8.png";

type TestRow = {
  name: string;
  speed: string;
  angle: string;
  type: string;
  hic: string;
  ais: string;
  accelImg: string;
  gyroImg: string;
  video: string;
};

const testRows: TestRow[] = [
  { name: "Test 1", speed: "1 mph", angle: "0", type: "Forward", hic: "0.01", ais: "0", accelImg: accel1, gyroImg: gyro1, video: test1Video },
  { name: "Test 2", speed: "2 mph", angle: "0", type: "Forward", hic: "0.02", ais: "0", accelImg: accel2, gyroImg: gyro2, video: test2Video },
  { name: "Test 3", speed: "3 mph", angle: "0", type: "Forward", hic: "0.09", ais: "0", accelImg: accel3, gyroImg: gyro3, video: test3Video },
  { name: "Test 4", speed: "5 mph", angle: "0", type: "Forward", hic: "1.00", ais: "0", accelImg: accel5, gyroImg: gyro5, video: test4Video },
  { name: "Test 5", speed: "8 mph", angle: "0", type: "Forward", hic: "7.86", ais: "0", accelImg: accel8, gyroImg: gyro8, video: test5Video },
];

const idleTimers = new WeakMap<HTMLElement, number>();

const trackGlow = (e: React.MouseEvent<HTMLElement>) => {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  target.style.setProperty("--my", `${e.clientY - rect.top}px`);
  target.classList.add("is-moving");
  const prev = idleTimers.get(target);
  if (prev) window.clearTimeout(prev);
  idleTimers.set(
    target,
    window.setTimeout(() => target.classList.remove("is-moving"), 120),
  );
};

const clearGlow = (e: React.MouseEvent<HTMLElement>) => {
  const target = e.currentTarget;
  const prev = idleTimers.get(target);
  if (prev) window.clearTimeout(prev);
  target.classList.remove("is-moving");
};

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

const RealData: React.FC = () => {
  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="rd-page">
      <div className="rd-content">

        {/* ── Roadmap nav ── */}
        <div className="rd-roadmap" role="navigation" aria-label="Test roadmap">
          <div className="rd-roadmap-track" />
          {testRows.map((row, i) => (
            <button
              key={row.name}
              className="rd-roadmap-node"
              onClick={() => jumpTo(slugify(row.name))}
              aria-label={`Jump to ${row.name}`}
            >
              <span className="rd-roadmap-dot">{i + 1}</span>
              <span className="rd-roadmap-label">{row.name}</span>
              <span className="rd-roadmap-sub">{row.speed}</span>
            </button>
          ))}
        </div>

        {/* ── Per-test cards: video + graphs ── */}
        <div className="rd-tests">
          {testRows.map((row) => (
            <div className="rd-panel rd-test-card" key={row.name} id={slugify(row.name)} onMouseMove={trackGlow} onMouseLeave={clearGlow}>
              <div className="rd-test-header">
                <span className="rd-test-name">{row.name}</span>
                <div className="rd-test-meta">
                  <span className="rd-meta-chip">{row.speed}</span>
                  <span className="rd-meta-chip">{row.type}</span>
                  <span className="rd-meta-chip">angle {row.angle}°</span>
                  <span className="rd-meta-chip">HIC {row.hic}</span>
                  <span className="rd-meta-chip">AIS {row.ais}</span>
                </div>
              </div>
              <div className="rd-test-body">
                <div className="rd-test-video" onMouseMove={trackGlow} onMouseLeave={clearGlow}>
                  <div className="rd-chart-header">
                    <span className="rd-chart-label">Crash Footage</span>
                    <span className="rd-chart-peak">{row.speed} · {row.type.toLowerCase()} · {row.angle}°</span>
                  </div>
                  <video
                    className="rd-test-video-player"
                    src={row.video}
                    controls
                    playsInline
                  />
                </div>
                <div className="rd-test-charts">
                  <div className="rd-chart" onMouseMove={trackGlow} onMouseLeave={clearGlow}>
                    <div className="rd-chart-header">
                      <span className="rd-chart-label">Accelerometer</span>
                    </div>
                    <img src={row.accelImg} alt={`${row.name} accelerometer`} className="rd-chart-img" />
                  </div>
                  <div className="rd-chart" onMouseMove={trackGlow} onMouseLeave={clearGlow}>
                    <div className="rd-chart-header">
                      <span className="rd-chart-label">Gyroscope</span>
                    </div>
                    <img src={row.gyroImg} alt={`${row.name} gyroscope`} className="rd-chart-img" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RealData;
