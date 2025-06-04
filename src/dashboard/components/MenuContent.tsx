import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import LocationSearchingRoundedIcon from '@mui/icons-material/LocationSearchingRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import { useNavigate } from 'react-router-dom';
import type { To } from 'react-router-dom';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import useUserStore from '../../services/userStore';

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user); // Get user from Zustand store

  const handleListItemClick = (index: number, link: To) => {
    setSelectedIndex(index);
    if (user) {
      navigate(link);
    } else {
      navigate('/signin');
    }
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index, item.link)}
              sx={{
                backgroundColor: selectedIndex === index ? 'rgba(0, 0, 0, 0.08)' : 'inherit',
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
