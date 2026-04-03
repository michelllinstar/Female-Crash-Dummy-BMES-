import React from "react";
import "./TextBox.css"; // import the CSS

export type TextProps = {
    title?: string;
    text?: string;
    style?: React.CSSProperties;  // <-- add this
    className?: string;           // <-- optional class for CSS
};

const TextBox: React.FC<TextProps> = ({ title, text, style, className }) => {
   return (
       <div className={`product-statement ${className || ""}`} style={style}>
           {title && <h1 className="statement-title">{title}</h1>}
           {text && <p className="statement-description">{text}</p>}
       </div>
   );
};

export default TextBox;