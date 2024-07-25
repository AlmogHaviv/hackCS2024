import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Grid, Typography } from "@mui/joy";
import NotificationCard from "../components/NotificationCard";

// Fake data for notifications
const initialNotificationsData = [
  {
    id: "001",
    message: "You have a new message from John",
    category: "messages",
    timestamp: "2024-07-25T12:00:00Z",
    read: false,
  },
  {
    id: "002",
    message: "Your order has been shipped",
    category: "orders",
    timestamp: "2024-07-24T08:30:00Z",
    read: false,
  },
  {
    id: "003",
    message: "New comment on your post",
    category: "comments",
    timestamp: "2024-07-23T14:45:00Z",
    read: false,
  },
  {
    id: "004",
    message: "System update available",
    category: "system",
    timestamp: "2024-07-22T18:15:00Z",
    read: false,
  },
];

export default function NotificationPage() {
  const [notifications, setNotifications] = useState(initialNotificationsData);

  const handleToggleRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id
        ? { ...notification, read: !notification.read }
        : notification
    ));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Typography level="h1" sx={{ marginBottom: '1rem' }}>
        Notifications
      </Typography>
      <Grid container spacing={2} justifyContent="flex-start"> {/* Align items to the left */}
        <Grid item xs={12} md={8} lg={6}> {/* Adjust the Grid item sizes */}
          <Stack direction="column" spacing="1rem">
            {notifications.map(notification => 
              <NotificationCard 
                key={notification.id} 
                notification={notification}
                onToggleRead={() => handleToggleRead(notification.id)}
              />
            )}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
