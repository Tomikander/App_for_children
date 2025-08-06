import { Button, Box } from '@mui/material';
import { ActionType } from '@/enums/actionType';
import styles from '@/styles/buttons.module.scss';

interface ActionButtonsProps {
  onGenerate: () => void;
  onCopy: () => void;
  onClear: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onGenerate,
  onCopy,
  onClear,
}) => (
  <Box className={styles.buttonContainer}>
    <Button
      className={`${styles.button} ${styles['button--generate']}`}
      variant="outlined"
      onClick={onGenerate}
    >
      {ActionType.GENERATE}
    </Button>
    <Button
      className={`${styles.button} ${styles['button--copy']}`}
      variant="outlined"
      onClick={onCopy}
    >
      {ActionType.COPY}
    </Button>
    <Button
      className={`${styles.button} ${styles['button--clear']}`}
      variant="outlined"
      onClick={onClear}
    >
      {ActionType.CLEAR}
    </Button>
  </Box>
);
