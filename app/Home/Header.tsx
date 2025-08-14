import { Typography } from '@mui/material';
import styles from '@/styles/layout.module.scss';

interface HeaderProps {
  onClear: () => void;
}

export const Header: React.FC<HeaderProps> = () => (
  <div className={styles.header}>
    <Typography variant="h1" className={styles.title}>
      Home page
    </Typography>
  </div>
);
