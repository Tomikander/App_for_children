import { TextField } from '@mui/material';
import { useState } from 'react';
import { validatePositiveInteger } from '../lib/utils/validatePositiveInteger';

interface NumberInputProps {
  value: number;
  onChange: (num: number) => void;
  label: string;
  max?: number;
  validate?: (num: number) => string | null;
}

const NumberInput = ({
  value,
  onChange,
  label,
  max,
  validate,
}: NumberInputProps) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.trim();

    if (!validatePositiveInteger(input)) {
      setError('Only positive integers');
      return;
    }

    const num = Number(input);

    if (max !== undefined && num > max) {
      setError(`Number too high (max. ${max})`);
      return;
    }

    if (validate) {
      const customError = validate(num);
      if (customError) {
        setError(customError);
        return;
      }
    }

    setError(null);
    onChange(num);
  };

  return (
    <TextField
      label={label}
      type="text"
      value={value}
      onChange={handleChange}
      error={Boolean(error)}
      helperText={error ?? 'Enter a valid number'}
      inputMode="numeric"
      fullWidth
      sx={{ mt: 2 }}
    />
  );
};

export default NumberInput;
