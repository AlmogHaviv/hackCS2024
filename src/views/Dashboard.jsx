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
    const { fields, records } = missionData;
    setCols(fields.map((col) => {
      if (col.id === 'amountLeftToAssigened') {
        return {
          field: col.id,
          filter: true,
          floatingFilter: true,
          cellStyle: (params) => {
            if (params.value === "0") {
              return { backgroundColor: '#d4edda', color: '#333' }; // Light green with dark text
            }
            if (params.value === "3") {
              return { backgroundColor: '#ffe5b4', color: '#333' }; // Light orange with dark text
            }
            return { backgroundColor: '#ffcccc', color: '#333' }; // Light red with dark text
          }
        };
      }
      return {
        field: col.id,
        filter: true,
        floatingFilter: true,
      };
    }));
    setRecords(records);
  }, []);

  return (
    <div>

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