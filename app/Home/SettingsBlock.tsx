import { Box, Typography } from '@mui/material';
import { ActionType } from '@/enums/actionType';
import styles from '@/styles/blocks.module.scss';

export const SettingsBlock = () => (
  <Box className={styles.settingsBlock}>
    <Typography variant="h6">{ActionType.SETTINGS}</Typography>
    <Typography variant="body2">
      Customizations are still in development...
    </Typography>
  </Box>
);
