'use client';

import { useRef, useState } from 'react';
import styles from '@/app/styles/home.module.scss';
import { useResultsStore } from '@/app/lib/resultsStore';
import { useSettingsStore } from './lib/settingsStore/settingsStore';
import { generateAdditionExpressions } from './lib/helpers/generateExpressions';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Typography, Button, Slider, IconButton } from '@mui/material';
import NumberInput from './components/NumberInput';
import {
  MAX_ALLOWED_AMOUNT,
  SLIDER_MAX,
  SLIDER_MIN,
} from './constants/sliderlimits';

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { resultsAmountToGenerate, setResultsAmountToGenerate } =
    useResultsStore();
  const { maxAdditionSum, setMaxAdditionSum } = useSettingsStore();

  const generateResults = () => {
    const generated = generateAdditionExpressions(
      maxAdditionSum,
      resultsAmountToGenerate
    );
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
      </Box>

      <Typography variant="body1" sx={{ mt: 2 }}>
        How many results to generate: {resultsAmountToGenerate}
      </Typography>

      <Slider
        min={SLIDER_MIN}
        max={SLIDER_MAX}
        value={resultsAmountToGenerate}
        onChange={(_, val) => {
          if (typeof val === 'number') setResultsAmountToGenerate(val);
        }}
        valueLabelDisplay="auto"
      />

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button
          className={styles.buttonGenerate}
          onClick={generateResults}
          sx={{
            fontSize: { xs: '0.8rem', sm: '1rem' },
            minWidth: { xs: '100px', sm: '120px' },
          }}
        >
          Generate
        </Button>

        <Button onClick={copyToClipboard}>
          <ContentCopyIcon />
        </Button>

        <IconButton onClick={() => setResults([])} sx={{ color: 'red' }}>
          <ClearIcon />
        </IconButton>
      </Box>

      <NumberInput
        label="Maximum Sum"
        value={maxAdditionSum}
        onChange={setMaxAdditionSum}
        max={MAX_ALLOWED_AMOUNT}
      />

      <Box className={styles.settingsBlock}>
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
