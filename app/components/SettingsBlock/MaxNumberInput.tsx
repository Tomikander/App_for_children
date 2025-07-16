import { TextField } from "@mui/material";
import { useSettingsStore } from "@/app/lib/settingsStore/settingsStore";
import { useState } from 'react';

const MaxNumberInput = () => {
  const { maxAdditionSum, setMaxAdditionSum } = useSettingsStore();
  const [error, setError] = useState<string | null>(null);
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim();
		if (!/^\d*$/.test(value)) {
			setError('Only positive integers');
			return;
		}

		const num = Number(value);
		if (num > 1000) {
			setError('Number too high (max. 1000)');
			return;
		}
		setError(null);
		setMaxAdditionSum(num);
	};

	return (
		<TextField 
			label="Maximum Sum"
			type="text"
			value={maxAdditionSum}
			onChange={handleChange}
			error={Boolean(error)}
			helperText={error ?? 'Enter the maximum allowable sum of the expression'}
			inputMode="numeric"
			fullWidth
			sx={{ mt: 2}}
		/>
	);
};

export default MaxNumberInput;