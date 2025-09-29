export type OperationType =
  | 'addition'
  | 'subtraction'
  | 'multiplication'
  | 'division';

export const OPERATION_OPTIONS: {
  value: OperationType;
  label: string;
  disabled?: boolean;
}[] = [
  { value: 'addition', label: 'Addition' },
  {
    value: 'subtraction',
    label: 'Subtraction 🚧 (Coming Soon)',
    disabled: true,
  },
  {
    value: 'multiplication',
    label: 'Multiplying 🚧 (Coming Soon)',
    disabled: true,
  },
  { value: 'division', label: 'Division 🚧 (Coming Soon)', disabled: true },
];
