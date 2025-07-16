import { Card, CardContent, Typography, Box } from '@mui/material';


const SettingsBlock = () => {
  return (
		<Card variant='outlined' sx={{ mb: 4, boxShadow: 1 }}>
			<CardContent>
				<Typography variant='h6' gutterBottom>
				  Generation settings
				</Typography>
				<Box sx={{ mt: 2 }}>
					
				</Box>
			</CardContent>
		</Card>
	);
};

export default SettingsBlock;