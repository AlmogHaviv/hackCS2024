import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Grid, Typography } from "@mui/joy";
import NotificationCard from "../components/NotificationCard";

// Fake data for notifications
const initialNotificationsData = [
  {
    id: "001",
    message: "You have an option to collab with Tom!",
    category: "messages",
    timestamp: "2024-12-25T16:00:00Z",
    content: "Food leftover from the volunteer event. Would you like to share it with your volunteers?",
    read: false,
  },
  {
    id: "002",
    message: "You have an option to collab with Tom!",
    category: "orders",
    timestamp: "2024-12-24T18:00:00Z",
    content: "You have the option to assist Tom by using your cars, which can help save costs.",
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
