import React from 'react';
import "./button.css";

// Using React's built-in type for children support
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={`transparent-button ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;