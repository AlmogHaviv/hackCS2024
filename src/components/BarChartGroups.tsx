import React from "react";
import data from '../data/chartsData.json';
import { BarChart } from '@mui/x-charts';

// Define the getColor function
const getColor = (value: number) => {
  if (value > 15) {
      return '#FF0000'; // Red for high values
  } else if (value > 5) {
      return '#FFFF00'; // Yellow for medium values
  } else {
      return '#00FF00'; // Green for low values
  }
};

export default function BarChartGroups() {
    return (
        <BarChart 
          xAxis={[{scaleType: 'band', data: data.BarChartGroups.VolntueerType}]}
          series={[
            {data: data.BarChartGroups.TotalNeeded, label: 'TotalNeeded'},
            {data: data.BarChartGroups.AmountRegistered, label: 'AmountRegistered'},
            {data: data.BarChartGroups.AmountMissing, label: 'AmountMissing'}
          ]}
          width={500}
          height={350}
          barLabel="value"
        />
    );
}