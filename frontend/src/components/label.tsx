import React from 'react';

interface LabelProps {
    className: string;
    info: string;
}

const Label: React.FC<LabelProps> = ({info, className}) => {
  
  return (
    <button className={`${className}`}>
        {info}
    </button>
  );
};

export default Label;