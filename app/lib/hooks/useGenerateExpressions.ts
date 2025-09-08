import { generateAdditionExpressions } from '../helpers/generateExpressions';
import { useMaxNumber } from './useMaxNumber';
import { useResultsStore } from '../resultsStore';

export const useGenerateExpressions = () => {
  const { maxAdditionSum } = useMaxNumber();
  const { resultsAmountToGenerate } = useResultsStore();

  const createMathTasks = () => {
    return generateAdditionExpressions(maxAdditionSum, resultsAmountToGenerate);
  };

  return { createMathTasks };
};
