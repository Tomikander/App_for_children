import { create } from 'zustand';
import { SettingsState } from "@/app/types/settings"

export const useSettingsStore = create<SettingsState>((set) => ({
  maxAdditionSum: 0,
  setMaxAdditionSum: (value) => set({ maxAdditionSum: value }),
}));