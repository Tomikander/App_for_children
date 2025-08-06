import { Typography, Slider } from '@mui/material';
import { SLIDER_MIN, SLIDER_MAX } from '@/constants/sliderlimits';
import styles from '@/styles/blocks.module.scss';

interface SliderControlProps {
  value: number;
  onChange: (event: Event, value: number | number[]) => void;
}

export const SliderControl: React.FC<SliderControlProps> = ({
  value,
  onChange,
}) => (
  <>
    <Typography variant="body1" className={styles.bodyText}>
      How many results to generate: {value}
    </Typography>
    <Slider
      id="range"
      min={SLIDER_MIN}
      max={SLIDER_MAX}
      value={value}
      onChange={onChange}
      valueLabelDisplay="auto"
    />
  </>
);
