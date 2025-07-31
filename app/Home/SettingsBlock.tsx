import { Box, Typography } from '@mui/material';
import { settingsBlockStyles } from '@/app/styles/home.styles';
import { ActionType } from '@/app/enums/actionType';
import styles from '@/app/styles/home.module.scss';

export const SettingsBlock = () => (
  <Box className={styles.settingsBlock} sx={settingsBlockStyles}>
    <Typography variant="h6">{ActionType.SETTINGS}</Typography>
    <Typography variant="body2">
      Customizations are still in development...
    </Typography>
  </Box>
);
