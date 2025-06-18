"use client"

import { useState } from "react";
import styles from "@/app/styles/home.module.css";
import { useResultsStore } from "@/app/lib/resultsStore";

export default function Home() {
  const [ resutsHtml, setResultsHtml ] = useState('');
  const {resultsAmountToGenerate, setResultsAmountToGenerate } = useResultsStore();

const generateResults = () => {
  let html = '';
  for (let i = 1; i <= resultsAmountToGenerate; i++) {
    html += `<p>Result ${i}</p>`;
  }
  setResultsHtml(html);
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(resutsHtml).then(() => {
    alert("Copy");
  });
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
        onChange={(e) => setResultsAmountToGenerate(Number(e.target.value))}
      />

      <button className={styles.generateButton} onClick={generateResults}>
        Generate
      </button>

      <div className={styles.resultsContainer}>
        <button className={styles.copyButton} onClick={copyToClipboard}>
          Copy
        </button>
       <div 
        className={styles.resultBox}
        dangerouslySetInnerHTML={{__html: resutsHtml}}
       >

       </div> 
      </div>
    </div>
 )
};