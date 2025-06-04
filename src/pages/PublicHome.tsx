import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PublicHome = () => {
    const navigate = useNavigate();
    return (
        <div className="public-home-container">
        <Typography variant="h4">Welcome to Relay Consulting Services.</Typography>
        <Typography variant="h6" style={{ margin: '20px 0' }}>
            Please sign in to access more features.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/signin')}>
            Sign In
        </Button>
        </div>
    );
};

export default PublicHome;