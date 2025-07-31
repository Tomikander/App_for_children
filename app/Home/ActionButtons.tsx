import { Button, Box } from '@mui/material';
import {
  generateButtonStyles,
  copyButtonStyles,
  buttonContainerStyles,
} from '@/app/styles/home.styles';
import { ActionType } from '@/app/enums/actionType';
import styles from '@/app/styles/home.module.scss';

interface ActionButtonsProps {
  onGenerate: () => void;
  onCopy: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onGenerate,
  onCopy,
}) => (
  <Box sx={buttonContainerStyles}>
    <Button
      className={styles.buttonGenerate}
      variant="outlined"
      onClick={onGenerate}
      sx={generateButtonStyles}
    >
      {ActionType.GENERATE}
    </Button>
    <Button variant="outlined" onClick={onCopy} sx={copyButtonStyles}>
      {ActionType.COPY}
    </Button>
  </Box>
);
