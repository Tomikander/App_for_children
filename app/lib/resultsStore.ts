import { create } from 'zustand';

interface ResultsState {
  resultsAmountToGenerate: number; // number of results
  setResultsAmountToGenerate: (amount: number) => void; // refresh function
}

export const useResultsStore = create<ResultsState>((set) => ({
  resultsAmountToGenerate: 0, 

  setResultsAmountToGenerate: (amount: number) =>
    set({ resultsAmountToGenerate: amount }),
}));

