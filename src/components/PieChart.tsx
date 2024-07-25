import React from "react";
import data from '../data/chartsData.json';
import { PieChart } from '@mui/x-charts';

export default function PieChartExample() {
    return (
        <PieChart 
        series={[{
            data: data.pieChart.Injuries
        }]}
          width={500}
          height={320}
          slotProps={{
            legend: {
                direction: 'column',
                position: { vertical: 'middle', horizontal: 'left' },
                padding: 0,
            },
        }}
        margin={{ left: 100 }} // Adjust this value as needed
        />
    );
}