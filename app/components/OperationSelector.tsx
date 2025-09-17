import { Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { OPERATION_OPTIONS, OperationType } from '@/constants/operationOptions';

type Props = {
  selected: OperationType;
  onChange: (value: OperationType) => void;
};

export const OperationSelector = ({ selected, onChange }: Props) => {
  return (
    <>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="operation-select-label">Operation</InputLabel>
        <Select
          labelId="operation-select-label"
          value={selected}
          label="Operation"
          onChange={(e) => onChange(e.target.value as OperationType)}
        >
          {OPERATION_OPTIONS.map((op) => (
            <MenuItem
              key={op.value}
              value={op.value}
              disabled={op.disabled}
              sx={op.disabled ? { color: 'gray' } : {}}
            >
              {op.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selected !== 'addition' && (
        <Box sx={{ mt: 4, p: 2, border: '1px dashed gray', borderRadius: 2 }}>
          <strong style={{ fontSize: '1.2rem' }}>
            🚧 This operation is not implemented yet.
          </strong>
          <p style={{ marginTop: '0.5rem' }}>
            Please select <em>Addition</em> to use the generator. Other
            operations will be available soon.
          </p>
        </Box>
      )}
    </>
  );
};
