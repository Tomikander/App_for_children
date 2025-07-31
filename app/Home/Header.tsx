import { Typography, Button } from '@mui/material';
import { ActionType } from '@/app/enums/actionType';
import { clearButtonStyles } from '@/app/styles/home.styles';
import styles from '@/app/styles/home.module.scss';

interface HeaderProps {
  onClear: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onClear }) => (
  <div className={styles.header}>
    <Typography variant="h1" className={styles.title}>
      Home page
    </Typography>
    <Button variant="outlined" onClick={onClear} sx={clearButtonStyles}>
      {ActionType.CLEAR}
    </Button>
  </div>
);
