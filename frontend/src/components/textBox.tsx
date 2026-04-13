import React from "react";
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

    return (
        <div 
            className={`product-statement ${className || ""} ${isFollower ? "follower" : ""}`} 
            style={combinedStyle}
        >
            {title && <h1 className="statement-title">{title}</h1>}
            {text && <p className="statement-description">{text}</p>}
        </div>
    );
};

export default TextBox;