import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// Import your logo
import Logo from '../assets/meshek77.jpg'; // Adjust the path as needed

import TeamNav from './Navigation';
import { navigationData } from '../data/navigationData';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  
  return (
    <Tooltip title="Change theme" variant="outlined">
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="plain"
        color="neutral"
        sx={{ alignSelf: 'center', color: 'black' }}
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        color: 'black',
        padding: '10px'
      }}
    >
      {/* Logo section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <IconButton
          size="md"
          sx={{
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            }
          }}
        >
          <img src={Logo} alt="Logo" style={{ height: '40px' }} />
        </IconButton>
      </Box>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        <IconButton
          size="md"
          variant="outlined"
          color="neutral"
          sx={{
            display: { xs: 'none', sm: 'inline-flex' },
            borderRadius: '50%',
            color: 'black'
          }}
        >
          <LanguageRoundedIcon />
        </IconButton>

        {navigationData.map(nav => (
          <Button
            key={nav.path}
            variant="plain"
            color="neutral"
            component="a"
            href={nav.path}
            size="sm"
            sx={{ alignSelf: 'center', color: 'black' }}
          >
            {nav.displayName}
          </Button>
        ))}

      </Stack>

      <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
          <MenuRoundedIcon />
        </IconButton>
        <Drawer
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />
          <DialogTitle sx={{ color: 'black' }}>Acme Co.</DialogTitle>
          <Box sx={{ px: 1 }}>
            <TeamNav />
          </Box>
        </Drawer>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}
      >

        <ColorSchemeToggle />
        
        <Dropdown>
          <MenuButton
            variant="plain"
            size="sm"
            sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}
          >
            <Avatar
              variant='soft'
              sx={{ maxWidth: '32px', maxHeight: '32px' }}
            />
          </MenuButton>

          <Menu
            placement="bottom-end"
            size="sm"
            sx={{
              zIndex: '99999',
              p: 1,
              gap: 1,
              '--ListItem-radius': 'var(--joy-radius-sm)',
              backgroundColor: 'grey',
              color: 'black'
            }}
          >
            <MenuItem>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Avatar />
                <Box sx={{ ml: 1.5 }}>
                  <Typography level="title-sm" textColor="black">
                    haim.dan@gmail.com
                  </Typography>
                  <Typography level="body-xs" textColor="black">
                    Haim Dan
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
         
            <ListDivider sx={{ backgroundColor: 'black' }} />
         
            <MenuItem>
              <HelpRoundedIcon sx={{ color: 'black' }} />
              <Typography textColor="black">Help</Typography>
            </MenuItem>
            <MenuItem>
              <SettingsRoundedIcon sx={{ color: 'black' }} />
              <Typography textColor="black">Settings</Typography>
            </MenuItem>

            <ListDivider sx={{ backgroundColor: 'black' }} />

            <MenuItem>
              <LogoutRoundedIcon sx={{ color: 'black' }} />
              <Typography textColor="black">Log out</Typography>
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
    </Box>
  );
}
