import { Typography, Slider } from '@mui/material';
import { SLIDER_MIN, SLIDER_MAX } from '@/app/constants/sliderlimits';
import { bodyTextStyles } from '@/app/styles/home.styles';

interface SliderControlProps {
  value: number;
  onChange: (event: Event, value: number | number[]) => void;
}

export const SliderControl: React.FC<SliderControlProps> = ({
  value,
  onChange,
}) => (
  <>
    <Typography variant="body1" sx={bodyTextStyles}>
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
