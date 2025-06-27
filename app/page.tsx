"use client";

import { useRef, useState } from "react";
import styles from "@/app/styles/home.module.scss";
import { useResultsStore } from "@/app/lib/resultsStore";

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const {resultsAmountToGenerate, setResultsAmountToGenerate } = useResultsStore();

const generateResults = () => {
  const generated = [];
  for (let i = 1; i <= resultsAmountToGenerate; i++) {
    generated.push(`Results ${i}`)
  }
  setResults(generated);
};

const copyToClipboard = () => {
  if (resultsRef.current) {
    const html = resultsRef.current.innerHTML;
    navigator.clipboard.writeText(html)
    .then(() => console.log("HTML copied!"))
    .catch((err) => console.log("Copy failed:", err));
  }
};

  const handleResultsAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setResultsAmountToGenerate(Number(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home page</h1>
      <label htmlFor="range">
        How many results to generate: {resultsAmountToGenerate}
      </label>
      <input 
        type="range" 
        id="range"
        min={0} 
        max={100} 
        value={resultsAmountToGenerate} 
        onChange={handleResultsAmountChange}
      />
      <button className={styles.buttonGenerate} onClick={generateResults}>
        Generate
      </button>
      <div ref={resultsRef}>
        {results.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
        <button 
          className={styles.buttonCopy}
          onClick={() => copyToClipboard()}
        >
          Copy
        </button>
    </div>
 )
};