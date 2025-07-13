import { create } from 'zustand';

interface ResultsState {
  resultsAmountToGenerate: number;
  selectedAction: string;
  setResultsAmountToGenerate: (amount: number) => void;
  setSelectedAction: (action: string) => void;
}

export const useResultsStore = create<ResultsState>((set) => ({
  resultsAmountToGenerate: 100,
  selectedAction: "",
  setResultsAmountToGenerate: (amount) => set({resultsAmountToGenerate: amount }),
  setSelectedAction: (action) => set({ selectedAction: action })
}));
