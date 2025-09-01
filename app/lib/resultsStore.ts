import { create } from 'zustand';
import { DEFAULT_RESULTS_AMOUNT } from '@/constants/sliderlimits';

interface ResultsSlice {
  resultsAmountToGenerate: number;
  setResultsAmountToGenerate: (amount: number) => void;
}

interface ActionSlice {
  selectedAction: string;
  setSelectedAction: (action: string) => void;
}

interface ExamplesSlice {
  examples: string[];
  generateExamples: () => void;
}

type StoreState = ResultsSlice & ActionSlice & ExamplesSlice;
export const useStore = create<StoreState>((set, get) => ({
  resultsAmountToGenerate: DEFAULT_RESULTS_AMOUNT,
  setResultsAmountToGenerate: (amount) =>
    set({ resultsAmountToGenerate: amount }),

  selectedAction: '',
  setSelectedAction: (action) => set({ selectedAction: action }),

  examples: [],
  generateExamples: () => {
    const amount = get().resultsAmountToGenerate;
    const newExamples = Array.from(
      { length: amount },
      (_, i) => `Example ${i + 1}`
    );
    set({ examples: newExamples });
  },
}));
