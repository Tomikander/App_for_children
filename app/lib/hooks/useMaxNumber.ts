import { useSettingsStore } from "../settingsStore/settingsStore";

export const useMaxNumber = () => {
  const { maxAdditionSum, setMaxAdditionSum } = useSettingsStore();

	return { maxAdditionSum, setMaxAdditionSum };
}