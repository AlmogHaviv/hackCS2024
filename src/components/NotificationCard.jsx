import React from "react";
import { Card, Typography, Button } from "@mui/joy";

export default function NotificationCard({ notification, onToggleRead }) {
  return (
    <Card 
      sx={{ 
        padding: '1rem', 
        backgroundColor: notification.read ? 'lightgray' : 'white',
        border: '1px solid',
        borderColor: notification.read ? 'gray' : 'black',
        width: '100%',  // Take full width of the container
        maxWidth: '700px',  // Set a max-width to control card width
        margin: '0 auto',  // Center the card horizontally
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',  // Align items to the start instead of center
        textAlign: 'left',   // Align text to the left within the card
      }}
    >
      <Typography 
        level="body1" 
        sx={{ fontWeight: 'bold' }} // Make the text bold
      >
        {notification.message}
      </Typography>
      <Typography 
        level="body2" 
        sx={{ marginTop: '0.5rem' }}
      >
        {notification.content}
      </Typography>
      <Typography 
        level="body2" 
        sx={{ marginTop: '0.5rem' }}
      >
        {new Date(notification.timestamp).toLocaleString()}
      </Typography>
      <Button 
        onClick={onToggleRead}
        sx={{ 
          marginTop: '1rem',
          backgroundColor: notification.read ? 'lightblue' : 'lightcoral', // Change button color based on read status
          color: notification.read ? 'darkblue' : 'white', // Text color for readability
          '&:hover': {
            backgroundColor: notification.read ? 'blue' : 'red', // Darken color on hover
          }
        }}
      >
        {notification.read ? "Mark as Unread" : "Mark as Read"}
      </Button>
    </Card>
  );
}
