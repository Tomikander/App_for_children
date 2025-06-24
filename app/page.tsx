"use client";

import { useState } from "react";
import styles from "@/app/styles/home.module.css";
import { useResultsStore } from "@/app/lib/resultsStore";

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const {resultsAmountToGenerate, setResultsAmountToGenerate } = useResultsStore();

const generateResults = () => {
  const generated = [];
  for (let i = 1; i <= resultsAmountToGenerate; i++) {
    generated.push(`Results ${i}`)
  }
  setResults(generated);
};

const copyToClipboard = () => {
  const allResults = results.join("\n")
    navigator.clipboard.writeText(allResults)
    .then(() => console.log("HTML copied!"))
    .catch((err) => console.log("Copy failed:", err));
    alert("copy");
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
        min={1} 
        max={500} 
        value={resultsAmountToGenerate} 
        onChange={handleResultsAmountChange}
      />
      <button className={styles.buttonGenerate} onClick={generateResults}>
        Generate
      </button>
      {results.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
        {results.map((text, index) => (
          <div key={index} className={styles.resultsRow}>
            <p>{text}</p>
            <button 
              className={styles.buttonCopy}
              onClick={() => copyToClipboard()}
            >
              Copy
            </button>
          </div>
        ))}
    </div>
 )
};