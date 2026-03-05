import React from 'react';
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  nameOfButton: string;
}

const Button: React.FC<ButtonProps> = ({className, nameOfButton, ...props}) => {
  
  return (
    <button className={`${className}`} {...props}>
        {nameOfButton}
    </button>
  );
};

export default Button;