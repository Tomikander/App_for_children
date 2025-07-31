import { SxProps, Theme } from '@mui/material';

export const clearButtonStyles: SxProps<Theme> = {
  fontSize: { xs: '0.8rem', sm: '0.7rem' },
  minWidth: { xs: '100px', sm: '120px' },
  color: 'red',
  borderColor: 'red',
  '&:hover': {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderColor: 'darkred',
  },
  marginLeft: 'auto',
  ml: 1,
  whiteSpace: 'nowrap',
};

export const generateButtonStyles: SxProps<Theme> = {
  fontSize: { xs: '0.8rem', sm: '1rem' },
  minWidth: { xs: '100px', sm: '120px' },
  color: 'yellow',
  borderColor: 'green',
};

export const copyButtonStyles: SxProps<Theme> = {
  fontSize: { xs: '0.8rem', sm: '1rem' },
  minWidth: { xs: '100px', sm: '120px' },
  color: 'green',
  borderColor: 'black',
  '&:hover': {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderColor: 'darkred',
  },
};

export const buttonContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
  flexWrap: 'wrap',
  mt: 2,
};

export const settingsBlockStyles: SxProps<Theme> = {
  mt: 2,
};

export const bodyTextStyles: SxProps<Theme> = {
  mt: 2,
};
