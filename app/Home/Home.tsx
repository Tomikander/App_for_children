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
import { OperationSelector } from '@/components/OperationSelector';
import { OperationType } from '@/constants/operationOptions';

export default function Home() {
  const [results, setResults] = useState<string[]>([]);
  const [selectedOperation, setSelectedOperation] =
    useState<OperationType>('addition');
  const resultsRef = useRef<HTMLDivElement>(null);

  const { resultsAmountToGenerate, setResultsAmountToGenerate } =
    useResultsStore();
  const {
    maxAdditionSum,
    setMaxAdditionSum,
    minAdditionOperand,
    setMinAdditionOperand,
  } = useSettingsStore();

  const generateResults = () => {
    const generated = generateAdditionExpressions(
      maxAdditionSum,
      resultsAmountToGenerate,
      minAdditionOperand
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
      <OperationSelector
        selected={selectedOperation}
        onChange={setSelectedOperation}
      />

      {selectedOperation === 'addition' && (
        <>
          <SliderControl
            value={resultsAmountToGenerate}
            onChange={handleSliderChange}
          />
          <ActionButtons
            onGenerate={generateResults}
            onCopy={copyToClipboard}
            onClear={clearResults}
          />
          <Box display="flex" gap={2} mb={2}>
            <NumberInput
              label="Maximum Sum"
              value={maxAdditionSum}
              onChange={setMaxAdditionSum}
              max={MAX_ALLOWED_AMOUNT}
            />
            <NumberInput
              label="Minimum Operand"
              value={minAdditionOperand}
              onChange={setMinAdditionOperand}
              max={Math.floor(maxAdditionSum / 2)}
            />
          </Box>
          <SettingsBlock />
          <ResultsList results={results} resultsRef={resultsRef} />
        </>
      )}
    </Box>
  );
}
