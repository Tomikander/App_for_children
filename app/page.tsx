'use client';

import { useRef, useState } from "react";
import styles from "@/app/styles/home.module.scss";
import { useResultsStore } from "@/app/lib/resultsStore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Typography, Button, Slider } from "@mui/material";
import MaxNumberInput from "./components/SettingsBlock/MaxNumberInput";
import { useGenerateExpressions } from "./lib/hooks/useGenerateExpressions";
import SettingsBlock from "./components/SettingsBlock/SettingsBlock";

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { resultsAmountToGenerate, setResultsAmountToGenerate } = useResultsStore();
  const { generate } = useGenerateExpressions();

  const generateResults = () => {
   const generated = generate();
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
    <Typography variant="h1" className={styles.title}>Home page</Typography>
     <Button 
       className={styles.buttonCopy}
       onClick={() => copyToClipboard()}
      > <ContentCopyIcon /> </Button>
     </Box>
    <Typography variant="body1" sx={{ mt: 2 }}>
      How many results to generate: {resultsAmountToGenerate}
    </Typography>
    <Slider 
      id="range"
      min={1} 
      max={500} 
      value={resultsAmountToGenerate} 
      onChange={handleSliderChange}
        valueLabelDisplay="auto"
     />
    <MaxNumberInput />
    <SettingsBlock />
    <Button 
      className={styles.buttonGenerate} 
      onClick={generateResults}
      sx={{ 
        fontSize: {xs: "0.8rem", sm: "1rem"}, 
        minWidth: { xs: '100px', sm: '120px' }
      }}
       >
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

