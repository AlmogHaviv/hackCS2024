import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/joy';

// Dummy functions for actions
const handleCreateMission = () => {
  console.log('Create Mission clicked');
  // Add logic for creating a new mission here
};

const handleInviteVolunteer = () => {
  console.log('Invite Volunteer clicked');
  // Add logic for inviting a new volunteer here
};

const handleAddStaff = () => {
  console.log('Add Staff clicked');
  // Add logic for adding a new staff member here
};

const handleRequestDataMigration = () => {
  console.log('Request Data Migration clicked');
  // Add logic for requesting data migration here
};

const handleManageMissions = () => {
  console.log('Manage Missions clicked');
  // Add logic for managing existing missions here
};

const handleViewReports = () => {
  console.log('View Reports clicked');
  // Add logic for viewing reports here
};

export default function DashboardPage() {
  return (
    <Box
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        backgroundColor: '#f4f4f4', // Light background color for the entire page
      }}
    >
      {/* Title */}
      <Typography
        level="h1"
        sx={{ marginBottom: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}
      >
        Actions
      </Typography>

      {/* Widget Container */}
      <Box
        sx={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          padding: '1rem',
        }}
      >
        {/* Create a New Mission Widget */}
        <Card
          variant="outlined"
          sx={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            backgroundColor: '#fff', // White background for each card
          }}
        >
          <CardContent>
            <Typography level="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
              Create a New Mission
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={handleCreateMission}
            >
              Create Mission
            </Button>
          </CardContent>
        </Card>

        {/* Invite New Volunteer Widget */}
        <Card
          variant="outlined"
          sx={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            backgroundColor: '#fff',
          }}
        >
          <CardContent>
            <Typography level="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
              Invite New Volunteer
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={handleInviteVolunteer}
            >
              Invite Volunteer
            </Button>
          </CardContent>
        </Card>

        {/* Add New Staff Member Widget */}
        <Card
          variant="outlined"
          sx={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            backgroundColor: '#fff',
          }}
        >
          <CardContent>
            <Typography level="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
              Add New Staff Member
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={handleAddStaff}
            >
              Add Staff
            </Button>
          </CardContent>
        </Card>

        {/* Request Data Migration Widget */}
        <Card
          variant="outlined"
          sx={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            backgroundColor: '#fff',
          }}
        >
          <CardContent>
            <Typography level="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
              Data Migration
            </Typography>
            <Typography sx={{ marginBottom: '1rem', color: 'text.secondary', textAlign: 'center' }}>
              Already have a volunteer list? Our team will take care of transferring your existing data for free.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={handleRequestDataMigration}
            >
              Request Data Migration
            </Button>
          </CardContent>
        </Card>

        {/* Manage Existing Missions Widget */}
        <Card
          variant="outlined"
          sx={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            backgroundColor: '#fff',
          }}
        >
          <CardContent>
            <Typography level="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
              Manage Existing Missions
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={handleManageMissions}
            >
              Manage Missions
            </Button>
          </CardContent>
        </Card>

        {/* View Reports Widget */}
        <Card
          variant="outlined"
          sx={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            backgroundColor: '#fff',
          }}
        >
          <CardContent>
            <Typography level="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
              View Reports
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={handleViewReports}
            >
              View Reports
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
