'use client';

import { useRef, useState } from "react";
import styles from "@/app/styles/home.module.scss";
import { useResultsStore } from "@/app/lib/resultsStore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Typography, Button, Slider, Select, MenuItem } from "@mui/material";

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { resultsAmountToGenerate, setResultsAmountToGenerate } = useResultsStore();
  const [ selectedAction, setSelectedAction] = useState<string>("");

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

  const handlyApplyAction = () => {
    if (selectedAction === "copy") {
      copyToClipboard();
    } else if (selectedAction === "clear") {
      setResults([]);
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
      onChange={(_e, val) => {
        if (typeof val === "number") {
          setResultsAmountToGenerate(val);
        }
      }}
      valueLabelDisplay="auto"
     />
    <Button 
      className={styles.buttonGenerate} 
      onClick={generateResults}
      sx={{ 
        fontSize: {xs: "0.8rem,", sm: "1rem"}, 
        minWidth: { xs: '100px', sm: '120px' }
      }}
       >
       Generate
    </Button>
    <Box className={styles.settingsBlock}>
      <Typography variant="h6">Setting</Typography>
      <Typography variant="body2">Customizations are still in development...</Typography>
    </Box>
    <Select 
     value={selectedAction} 
     onChange={(e) => setSelectedAction(e.target.value)} 
     displayEmpty sx={{mb: 2}}
    >
     <MenuItem value="" disabled>Select an action</MenuItem>
     <MenuItem value="copy">opyToClipboard</MenuItem>
     <MenuItem value="clear">Clear Results</MenuItem>
    </Select>
    <Button 
     variant="outlined"  
     onClick={handlyApplyAction} 
     sx={{mt: 1}} 
    >
      Apply action
    </Button>
    <Box ref={resultsRef}>
      {results.map((text, i) => (
      <Typography key={i}>{text}</Typography>
      ))}
    </Box>
   </Box>
 )
};

