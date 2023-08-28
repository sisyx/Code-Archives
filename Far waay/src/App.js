import { useState } from "react";
import "./index.css";
const data = [
  {
    sum: "what does it mean to smile",
    text: "smile means nothing to me. I mostly dont smile",
  },
  {
    sum: "what does it mean to cry",
    text: "crying is nothing to me. I mostly dont cry",
  },
  {
    sum: "how do you live",
    text: "I live by breathing. I mostly dontlive",
  },
];

export default function App() {
  return (
    <div className="container">
      <Text>
        <p>hello world</p>
        <small>Im god</small>
      </Text>
      {data.map((acc) => (
        <Accordion
          info={acc}
          index={data.indexOf(acc) + 1}
          key={data.indexOf(acc)}
        />
      ))}
    </div>
  );
}

function Accordion({ info, index }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenDatail() {
    setIsOpen(!isOpen);
  }

  return (
    <details className={isOpen ? "open" : "close"}>
      <summary onClick={handleOpenDatail}>
        {index < 10 ? `0${index}` : index} {info.sum}
      </summary>
      <p>{info.text}</p>
    </details>
  );
}

function Text({ children }) {
  children.forEach((child) => console.log(child));
  return <div>{children}</div>;
}
