import { create } from 'zustand';
import { DEFAULT_RESULTS_AMOUNT } from '@/app/constants/sliderlimits';

interface ResultsSlice {
  resultsAmountToGenerate: number;
  setResultsAmountToGenerate: (amount: number) => void;
}

interface ActionSlice {
  selectedAction: string;
  setSelectedAction: (action: string) => void;
}

type StoreState = ResultsSlice & ActionSlice;

export const useStore = create<StoreState>((set) => ({
  resultsAmountToGenerate: DEFAULT_RESULTS_AMOUNT,
  setResultsAmountToGenerate: (amount) =>
    set({ resultsAmountToGenerate: amount }),

  selectedAction: '',
  setSelectedAction: (action) => set({ selectedAction: action }),
}));
