import { create } from 'zustand';
import { ResultsState } from '@/app/types/results';

export const useResultsStore = create<ResultsState>((set) => ({
  resultsAmountToGenerate: 100,
  setResultsAmountToGenerate: (value) => set({ resultsAmountToGenerate: value }),
}));