import { create } from 'zustand';
import {
  DEFAULT_MAX_ADDITION_SUM,
  MIN_ADDITION_OPERAND,
} from '@/constants/sliderlimits';

type SettingsState = {
  maxAdditionSum: number;
  setMaxAdditionSum: (value: number) => void;
  minAdditionOperand: number;
  setMinAdditionOperand: (value: number) => void;
};

export const useSettingsStore = create<SettingsState>((set) => ({
  maxAdditionSum: DEFAULT_MAX_ADDITION_SUM,
  setMaxAdditionSum: (value) => set({ maxAdditionSum: value }),

  minAdditionOperand: MIN_ADDITION_OPERAND,
  setMinAdditionOperand: (value) => set({ minAdditionOperand: value }),
}));
