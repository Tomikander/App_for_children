'use client';

import { useRef, useState } from 'react';
import { useStore } from '@/lib/resultsStore';
import layout from '@/styles/layout.module.scss';
import { Box } from '@mui/material';
import { Header } from './Header';
import { SliderControl } from './SliderControl';
import { ActionButtons } from './ActionButtons';
import { SettingsBlock } from './SettingsBlock';
import { ResultsList } from './ResultsList';

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { resultsAmountToGenerate, setResultsAmountToGenerate } = useStore();

  const generateResults = () => {
    const generated = Array.from(
      { length: resultsAmountToGenerate },
      (_, i) => `Results ${i + 1}`
    );
    setResults(generated);
  };

  const clearResults = () => {
    setResults([]);
  };

  const handleSliderChange = (_event: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setResultsAmountToGenerate(value);
    }
  };

  const copyToClipboard = () => {
    if (resultsRef.current) {
      const html = resultsRef.current.innerHTML;
      navigator.clipboard
        .writeText(html)
        .then(() => {
          console.log('HTML copied!');
        })
        .catch((err) => {
          console.log('Copy failed:', err);
        });
    }
  };

  return (
    <Box className={layout.container}>
      <Header onClear={clearResults} />
      <SliderControl
        value={resultsAmountToGenerate}
        onChange={handleSliderChange}
      />
      <ActionButtons
        onGenerate={generateResults}
        onCopy={copyToClipboard}
        onClear={clearResults}
      />
      <SettingsBlock />
      <ResultsList results={results} resultsRef={resultsRef} />
    </Box>
  );
}
