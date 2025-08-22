import { create } from 'zustand';
import { ResultsState } from '@/app/types/results';
import { RESULTS_AMOUNT_TO_GENERATE } from '../constants/sliderlimits';

export const useResultsStore = create<ResultsState>((set) => ({
  resultsAmountToGenerate: RESULTS_AMOUNT_TO_GENERATE,
  setResultsAmountToGenerate: (value) =>
    set({ resultsAmountToGenerate: value }),
}));
