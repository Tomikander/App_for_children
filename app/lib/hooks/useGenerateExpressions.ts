import { generateAdditionExpressions } from '../helpers/generateExpressions';
import { useMaxNumber } from './useMaxNumber';
import { useResultsStore } from '../resultsStore';
import { useSettingsStore } from '../settingsStore/settingsStore';

export const useGenerateExpressions = () => {
  const { maxAdditionSum } = useMaxNumber();
  const { resultsAmountToGenerate } = useResultsStore();
  const { minAdditionOperand } = useSettingsStore();

  const createMathTasks = () => {
    return generateAdditionExpressions(
      maxAdditionSum,
      resultsAmountToGenerate,
      minAdditionOperand
    );
  };

  return { createMathTasks };
};
