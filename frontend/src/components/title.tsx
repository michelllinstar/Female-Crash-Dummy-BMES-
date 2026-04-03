interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
      <h1 className="text-4xl font-48 text-gray-900 mb-2 leading-tight text-left">
        {text}
        </h1>
  );
}