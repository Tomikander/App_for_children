'use client';

import { useRef, useState } from 'react';
import styles from '@/app/styles/home.module.scss';
import { useStore } from '@/app/lib/resultsStore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Box,
  Typography,
  Button,
  Slider,
  Select,
  MenuItem,
} from '@mui/material';
import { ActionType } from '@/app/enums/actionType';
import { SLIDER_MAX, SLIDER_MIN } from '@/app/constants/sliderlimits';

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const {
    resultsAmountToGenerate,
    setResultsAmountToGenerate,
    selectedAction,
    setSelectedAction,
  } = useStore();

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

  const handleApplyAction = () => {
    if (selectedAction === ActionType.COPY) {
      copyToClipboard();
    } else if (selectedAction === ActionType.CLEAR) {
      setResults([]);
    }
  };

  const actionLabels: Record<ActionType, string> = {
    [ActionType.COPY]: 'CopyToClipboard',
    [ActionType.CLEAR]: 'Clear Results',
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="h1" className={styles.title}>
          Home page
        </Typography>
        <Button className={styles.buttonCopy} onClick={() => copyToClipboard()}>
          {' '}
          <ContentCopyIcon />{' '}
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
      <Button
        className={styles.buttonGenerate}
        onClick={generateResults}
        sx={{
          fontSize: { xs: '0.8rem,', sm: '1rem' },
          minWidth: { xs: '100px', sm: '120px' },
        }}
      >
        Generate
      </Button>
      <Box className={styles.settingsBlock}>
        <Typography variant="h6">Setting</Typography>
        <Typography variant="body2">
          Customizations are still in development...
        </Typography>
      </Box>
      <Select
        value={selectedAction}
        onChange={(e) => setSelectedAction(e.target.value)}
        displayEmpty
        sx={{ mb: 2 }}
      >
        <MenuItem value="" disabled>
          {' '}
          Select an action{' '}
        </MenuItem>
        <MenuItem value={ActionType.COPY}>
          {actionLabels[ActionType.COPY]}
        </MenuItem>
        <MenuItem value={ActionType.CLEAR}>
          {actionLabels[ActionType.CLEAR]}
        </MenuItem>
      </Select>
      <Button variant="outlined" onClick={handleApplyAction} sx={{ mt: 1 }}>
        Apply action
      </Button>
      <Box ref={resultsRef}>
        {results.map((text, i) => (
          <Typography key={i}>{text}</Typography>
        ))}
      </Box>
    </Box>
  );
}
