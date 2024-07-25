import React, { useState, useEffect } from 'react';
import ChartContainer from '../components/ChartContainer';
import BarChartGroups from '../components/BarChartGroups';
import PieChartExample from '../components/PieChart';
import Table from '../components/Table'; // Assuming you have a Table component
import { Box, Typography } from '@mui/joy';
import missionData from '../data/missionData.json'; // Import your JSON data

export default function Dashboard() {
  const [cols, setCols] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Process the data from the JSON file
    const { fields, records } = missionData;
    setCols(fields.map((col, i) => ({
      field: col.id,
      filter: true, // Enable filtering for all columns
      floatingFilter: true // Enable floating filter for all columns
    })));
    setRecords(records);
  }, []);

  return (
    <div>
      <Typography level="h1" sx={{ marginBottom: '1rem' }}>
        Overview
      </Typography>

      <ChartContainer title="Mission Data">
        <Table cols={cols} rows={records} size='large'/>
      </ChartContainer>
      <Box sx={{display: 'flex'}}>
        <ChartContainer title="Mission Status">
          <BarChartGroups size='small' />
        </ChartContainer>
        
        <ChartContainer title="Mission Status">
          <PieChartExample />
        </ChartContainer>
      </Box>
      
    </div>
  );
}