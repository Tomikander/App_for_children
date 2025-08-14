import { Box, Typography } from '@mui/material';

interface ResultsListProps {
  results: string[];
  resultsRef: React.RefObject<HTMLDivElement | null>;
}

export const ResultsList: React.FC<ResultsListProps> = ({
  results,
  resultsRef,
}) => (
  <Box ref={resultsRef}>
    {results.map((text, i) => (
      <Typography key={i}>{text}</Typography>
    ))}
  </Box>
);
