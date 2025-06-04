import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import LocationSearchingRoundedIcon from '@mui/icons-material/LocationSearchingRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Link } from 'react-router-dom';


const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, link: '/home' },
  { text: 'Projects', icon: <AnalyticsRoundedIcon />, link: '/projects' },
  { text: 'Locations', icon: <LocationSearchingRoundedIcon />, link: '/locations' },
  { text: 'Reports', icon: <AssignmentRoundedIcon />, link: '/reports' },
  { text: 'Risk Assessment', icon: <WarningRoundedIcon />, link: '/risk-assessment' },
  { text: 'Activities', icon: <ChatRoundedIcon />, link: '/activities' },
  { text: 'Meetings', icon: <AccessTimeFilledRoundedIcon />, link: '/meetings' },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton component={Link} selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
