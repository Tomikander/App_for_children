'use client';

import { useRef, useState } from "react";
import styles from "@/app/styles/home.module.scss";
import { useResultsStore } from "@/app/lib/resultsStore";
import { InputLabel, Box, Typography, Button, Slider } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { resultsAmountToGenerate, setResultsAmountToGenerate } = useResultsStore();

  const generateResults = () => {
    const generated = [];
    for (let i = 1; i <= resultsAmountToGenerate; i++) {
      generated.push(`Results ${i}`);
    }
    setResults(generated);
  };

  const copyToClipboard = () => {
    if (resultsRef.current) {
      const html = resultsRef.current.innerHTML;
      navigator.clipboard
        .writeText(html)
        .then(() => console.log('HTML copied!'))
        .catch((err) => console.log('Copy failed:', err));
    }
  };

const handleSliderChange = (_event: Event, value: number | number[]) => {
  if (typeof value === "number") {
    setResultsAmountToGenerate(value);
  }
};

 return (
  <Box className={styles.container}>
    <Box className={styles.header}>
    <Typography variant="h4" className={styles.title}>Home page</Typography>
     <Button 
       className={styles.buttonCopy}
       onClick={() => copyToClipboard()}
      > <ContentCopyIcon /> </Button>
     </Box>
    <InputLabel shrink htmlFor="range" sx={{fontSize: "1.5rem", fontWeight: "bold" }}>
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
  </Box>
 )
};

