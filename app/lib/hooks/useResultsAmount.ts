import { useResultsStore } from "../resultsStore";

export const useResultsAmount = () => {
  const { resultsAmountToGenerate, setResultsAmountToGenerate } = useResultsStore();

  return { resultsAmountToGenerate, setResultsAmountToGenerate };
};