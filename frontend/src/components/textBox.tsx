export type TextProps = {
    title: string;
    text: string;
};

const TextBox: React.FC<TextProps> = ({ title, text }) => {
   return (
       <div className="product-statement">
           <h1 className="statement-title"> {title} </h1>
           <p className="statement-description"> {text} </p>
       </div>
   );
};


export default TextBox;