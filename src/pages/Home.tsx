import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useUser } from './User';

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Box
      component="main"
      sx={(theme) => ({
        flexGrow: 1,
        overflow: 'auto',
        backgroundColor: theme.vars
          ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
          : theme.palette.background.default,
        textAlign: 'center',
        p: 4,
      })}
    >
      <Stack spacing={4} alignItems="center">
        {/* Welcome Message */}
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          Welcome to the Dashboard, {user?.name}!
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          Use the navigation buttons on the side menu or below here to explore the application.
        </Typography>

        {/* Navigation Buttons */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/employees')}
          >
            Go to Employees
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/tasks')}
          >
            Go to Tasks
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}