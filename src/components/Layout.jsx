import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import PropTypes from 'prop-types';

function Root(props) {
  return (
    <Box
      {...props}
      sx={[
        {
          bgcolor: 'background.appBody',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'auto 1fr', // Changed from fixed width to auto
            md: 'auto 1fr', // Changed from fixed width to auto
          },
          gridTemplateRows: '64px 1fr',
          minHeight: '100vh',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Header(props) {
  return (
    <Box
      component="header"
      className="Header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: 'background.surface',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gridColumn: '1 / -1',
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'sticky',
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SideNav(props) {
  return (
    <Box
      component="nav"
      className="Navigation"
      {...props}
      sx={[
        {
          p: 2,
          bgcolor: 'background.surface',
          borderRight: '1px solid',
          borderColor: 'divider',
          display: {
            xs: 'none',
            sm: 'initial',
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SidePane(props) {
  return (
    <Box
      className="Inbox"
      {...props}
      sx={[
        {
          bgcolor: 'background.surface',
          borderRight: '1px solid',
          borderColor: 'divider',
          display: {
            xs: 'none',
            md: 'initial',
          },
          width: { md: '200px' }, // Set a fixed width for medium screens and up
          maxWidth: '250px', // Maximum width
          flexShrink: 0, // Prevent the sidebar from shrinking
          transition: 'width 0.3s', // Smooth transition for width changes
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Main(props) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[
        { 
        p: 2 ,
        display: 'grid',

      },
       ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  );
}

SideDrawer.propTypes = {
  onClose: PropTypes.func
};

function SideDrawer(props) {
  const { onClose, ...other } = props;
  return (
    <Box
      {...other}
      sx={[
        { position: 'fixed', zIndex: 1200, width: '100%', height: '100%' },
        ...(Array.isArray(other.sx) ? other.sx : [other.sx]),
      ]}
    >
      <Box
        role="button"
        onClick={onClose}
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: (theme) =>
            `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
        }}
      />
      <Sheet
        sx={{
          minWidth: 256,
          width: 'max-content',
          height: '100%',
          p: 2,
          boxShadow: 'lg',
          bgcolor: 'background.surface',
        }}
      >
        {other.children}
      </Sheet>
    </Box>
  );
}

export default {
  Root,
  Header,
  SideNav,
  SidePane,
  SideDrawer,
  Main,
};
