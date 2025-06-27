import { create } from 'zustand';

interface ResultsState {
  resultsAmountToGenerate: number;
  setResultsAmountToGenerate: (amount: number) => void;
}

export const useResultsStore = create<ResultsState>((set) => ({
  resultsAmountToGenerate: 0,

  setResultsAmountToGenerate: (amount: number) =>
    set({ resultsAmountToGenerate: amount }),
}));
