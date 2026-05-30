import React from "react";
import "./RealData.css";
import crashVideo from "./assets/videos/official_crash_vid.mov";

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
};

const testRows: TestRow[] = [
  { name: "Test 1", speed: "1 mph", angle: "0", type: "Forward", hic: "0.01", ais: "0", accelImg: accel1, gyroImg: gyro1 },
  { name: "Test 2", speed: "2 mph", angle: "0", type: "Forward", hic: "0.02", ais: "0", accelImg: accel2, gyroImg: gyro2 },
  { name: "Test 3", speed: "3 mph", angle: "0", type: "Forward", hic: "0.09", ais: "0", accelImg: accel3, gyroImg: gyro3 },
  { name: "Test 4", speed: "5 mph", angle: "0", type: "Forward", hic: "1.00", ais: "0", accelImg: accel5, gyroImg: gyro5 },
  { name: "Test 5", speed: "8 mph", angle: "0", type: "Forward", hic: "7.86", ais: "0", accelImg: accel8, gyroImg: gyro8 },
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

const RealData: React.FC = () => {
  return (
    <div className="rd-page">
      <div className="rd-content">

        {/* ── Crash Video ── */}
        <div className="rd-video-wrapper" onMouseMove={trackGlow} onMouseLeave={clearGlow}>
          <video
            className="rd-crash-video"
            src={crashVideo}
            controls
            playsInline
          />
          <div className="rd-video-meta">
            <span className="rd-crash-label">Crash Test Footage</span>
            <span className="rd-timestamp">5 mph · forward · 0°</span>
          </div>
        </div>

        {/* ── Per-test cards with graphs ── */}
        <div className="rd-tests">
          {testRows.map((row) => (
            <div className="rd-panel rd-test-card" key={row.name} onMouseMove={trackGlow} onMouseLeave={clearGlow}>
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
          ))}
        </div>

      </div>
    </div>
  );
};

export default RealData;
