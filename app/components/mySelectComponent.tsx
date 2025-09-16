'use client';

import { useState } from 'react';
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import style from '@/styles/MySelect.module.scss';

const OPTIONS = [
  { label: 'option 1', value: 'option1' },
  { label: 'option 2', value: 'option2' },
  { label: 'option 3', value: 'option3' },
];

export default function MySelect() {
  const [selectOption, setSelectOption] = useState<string>('');

  const handleSelectOption = (event: SelectChangeEvent) => {
    setSelectOption(event.target.value);
  };

  return (
    <Box className={style.wrapper}>
      <Box className={style.inner}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="select-label">Select options</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={selectOption}
            label="Select options"
            onChange={handleSelectOption}
          >
            {OPTIONS.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
