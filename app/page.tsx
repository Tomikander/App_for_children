'use client';

import { useRef, useState } from 'react';
import styles from '@/app/styles/home.module.scss';
import { useStore } from '@/app/lib/resultsStore';
import { Box, Typography, Button, Slider } from '@mui/material';
import { ActionType } from '@/app/enums/actionType';
import { SLIDER_MAX, SLIDER_MIN } from '@/app/constants/sliderlimits';
import { actionLabels } from './constants/actionLabels';

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { resultsAmountToGenerate, setResultsAmountToGenerate } = useStore();

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

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="h1" className={styles.title}>
          Home page
        </Typography>
        <Button
          variant="outlined"
          onClick={() => setResults([])}
          sx={{
            fontSize: { xs: '0.8rem,', sm: '0.7rem' },
            minWidth: { xs: '100px', sm: '120px' },
            color: 'red',
            borderColor: 'red',
            '&:hover': {
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              borderColor: 'darkred',
            },
            marginLeft: 'auto',
            ml: 1,
            whiteSpace: 'nowrap',
          }}
        >
          {actionLabels[ActionType.CLEAR]}
        </Button>
      </Box>
      <Typography variant="body1" sx={{ mt: 2 }}>
        How many results to generate: {resultsAmountToGenerate}
      </Typography>
      <Slider
        id="range"
        min={SLIDER_MIN}
        max={SLIDER_MAX}
        value={resultsAmountToGenerate}
        onChange={(_e, val) => {
          if (typeof val === 'number') {
            setResultsAmountToGenerate(val);
          }
        }}
        valueLabelDisplay="auto"
      />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          mt: 2,
        }}
      >
        <Button
          className={styles.buttonGenerate}
          variant="outlined"
          onClick={generateResults}
          sx={{
            fontSize: { xs: '0.8rem,', sm: '1rem' },
            minWidth: { xs: '100px', sm: '120px' },
            color: 'yellow',
            borderColor: 'green',
          }}
        >
          {actionLabels[ActionType.GENERATE]}
        </Button>
        <Button
          variant="outlined"
          onClick={() => copyToClipboard()}
          sx={{
            fontSize: { xs: '0.8rem,', sm: '1rem' },
            minWidth: { xs: '100px', sm: '120px' },
            color: 'green',
            borderColor: 'black',
            '&:hover': {
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              borderColor: 'darkred',
            },
          }}
        >
          {actionLabels[ActionType.COPY]}
        </Button>
      </Box>
      <Box className={styles.settingsBlock} sx={{ mt: 2 }}>
        <Typography variant="h6">Settings</Typography>
        <Typography variant="body2">
          Customizations are still in development...
        </Typography>
      </Box>
      <Box ref={resultsRef}>
        {results.map((text, i) => (
          <Typography key={i}>{text}</Typography>
        ))}
      </Box>
    </Box>
  );
}
