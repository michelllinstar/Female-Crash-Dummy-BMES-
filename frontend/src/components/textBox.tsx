import React, { useRef } from "react";
import "./TextBox.css";

export type TextProps = {
    title?: string;
    text?: string;
    style?: React.CSSProperties;
    className?: string;
    isFollower?: boolean; // Toggle for cursor following
};

const TextBox: React.FC<TextProps> = ({ title, text, style, className, isFollower }) => {
    // Merge styles: If it's a follower, we force fixed positioning and disable clicks
    const combinedStyle: React.CSSProperties = isFollower
        ? {
            ...style,
            position: "fixed",
            pointerEvents: "none", // Allows clicking things behind the box
            zIndex: 9999,
            transition: "transform 0.1s ease-out", // Smooths the movement
          }
        : { ...style };

    const idleTimer = useRef<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isFollower) return;
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

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isFollower) return;
        if (idleTimer.current) window.clearTimeout(idleTimer.current);
        e.currentTarget.classList.remove("is-moving");
    };

    return (
        <div
            className={`product-statement ${className || ""} ${isFollower ? "follower" : ""}`}
            style={combinedStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {title && <h1 className="statement-title">{title}</h1>}
            {text && <p className="statement-description">{text}</p>}
        </div>
    );
};

export default TextBox;