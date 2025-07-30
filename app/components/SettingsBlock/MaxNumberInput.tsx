import NumberInput from './NumberInput';
import { useSettingsStore } from '@/app/lib/settingsStore/settingsStore';
import { MAX_ALLOWED_AMOUNT } from '@/app/constants/sliderlimits';

const MaxNumberInput = () => {
  const { maxAdditionSum, setMaxAdditionSum } = useSettingsStore();

  return (
    <NumberInput
      label="Maximum Sum"
      value={maxAdditionSum}
      onChange={setMaxAdditionSum}
      max={MAX_ALLOWED_AMOUNT}
    />
  );
};

export default MaxNumberInput;
