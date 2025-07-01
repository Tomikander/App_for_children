"use client";

import { useRef, useState } from "react";
import styles from "@/app/styles/home.module.scss";
import { useResultsStore } from "@/app/lib/resultsStore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import { InputLabel } from "@mui/material";


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

const handleSliderChange = (_event: Event, value: number | number[]) => {
  if (typeof value === "number") {
    setResultsAmountToGenerate(value);
  }
};

  return (
    <Box className={styles.container}>
      <Typography variant="h1" className={styles.title}>Home page</Typography>
      <InputLabel shrink htmlFor="range">
        How many results to generate: {resultsAmountToGenerate}
      </InputLabel>
      <Slider 
        id="range"
        min={1} 
        max={500} 
        value={resultsAmountToGenerate} 
        onChange={handleSliderChange}
          valueLabelDisplay="auto"
      />
      <Button className={styles.buttonGenerate} onClick={generateResults}>
        Generate
      </Button>
      <Box ref={resultsRef}>
        {results.map((text, i) => (
          <Typography key={i}>{text}</Typography>
        ))}
      </Box>
        <Button 
          className={styles.buttonCopy}
          onClick={() => copyToClipboard()}
        >
          Copy
        </Button>
    </Box>
 )
};