import { useRef } from "react";
import ucla from "../assets/ucla.png";
import bmes from "../assets/ucla_bmes.png";
import "./footer.css";

const Footer = () => {
    const idleTimer = useRef<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        target.style.setProperty("--my", `${e.clientY - rect.top}px`);

        target.classList.add("is-moving");
        if (idleTimer.current) window.clearTimeout(idleTimer.current);
        idleTimer.current = window.setTimeout(() => {
            target.classList.remove("is-moving");
        }, 120);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        if (idleTimer.current) window.clearTimeout(idleTimer.current);
        e.currentTarget.classList.remove("is-moving");
    };

    return (
        <footer className="website-footer" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="footer-hstack">
                <div className="footer-brand">
                    <img src={ucla} alt="UCLA" className="footer-img1" />
                    <p className="footer-text">Made with ♡ by UCLA BMES Design Team!</p>
                </div>

                <div className="footer-links">
                    <a href="/about_us">About Us</a>
                    <a href="/simulator">Simulator</a>
                    <a href="/real_data">Real Data</a>
                    <a href="/info">Info</a>
                </div>

                <img src={bmes} alt="UCLA BMES" className="footer-img2" />
            </div>
        </footer>
    );
};

export default Footer;
