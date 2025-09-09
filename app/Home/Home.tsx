'use client';

import { useRef, useState } from 'react';
import layout from '@/styles/layout.module.scss';
import { Box } from '@mui/material';
import { useResultsStore } from '@/lib/resultsStore';
import { generateAdditionExpressions } from '@/lib/helpers/generateExpressions';
import { Header } from './Header';
import { SliderControl } from './SliderControl';
import { ActionButtons } from './ActionButtons';
import { SettingsBlock } from './SettingsBlock';
import { ResultsList } from './ResultsList';
import { useSettingsStore } from '@/lib/settingsStore/settingsStore';
import NumberInput from '@/components/NumberInput';
import { MAX_ALLOWED_AMOUNT } from '@/constants/sliderlimits';

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { resultsAmountToGenerate, setResultsAmountToGenerate } =
    useResultsStore();
  const { maxAdditionSum, setMaxAdditionSum } = useSettingsStore();

  const generateResults = () => {
const generated = generateAdditionExpressions(
  useSettingsStore.getState().maxAdditionSum,
  resultsAmountToGenerate
);
setResults((prev) => [...prev, ...generated]);

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
        .then(() => console.log('HTML copied!'))
        .catch((err) => console.log('Copy failed:', err));
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
      <NumberInput
        label="Maximum Sum"
        value={maxAdditionSum}
        onChange={setMaxAdditionSum}
        max={MAX_ALLOWED_AMOUNT}
      />
      <SettingsBlock />
      <ResultsList results={results} resultsRef={resultsRef} />
    </Box>
  );
}
