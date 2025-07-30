import { create } from 'zustand';
import { SettingsState } from '@/app/types/settings';
import { DEFAULT_MAX_ADDITION_SUM } from '@/app/constants/sliderlimits';

export const useSettingsStore = create<SettingsState>((set) => ({
  maxAdditionSum: DEFAULT_MAX_ADDITION_SUM,
  setMaxAdditionSum: (value) => set({ maxAdditionSum: value }),
}));
