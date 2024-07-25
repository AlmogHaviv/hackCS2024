import React from "react";
import data from '../data/chartsData.json';
import { PieChart } from '@mui/x-charts';

export default function PieChartExample() {
    return (
        <PieChart 
            series={[{
                data: data.pieChart.works,
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 2,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 270,
            }]}
            width={400}
            height={350}
            slotProps={{
                legend: {
                    direction: 'column',
                    position: { vertical: 'middle', horizontal: 'left' },
                    padding: 0,
                    itemGap: 8,
                },
            }}
            margin={{ top: 20, right: 20, bottom: 20, left: 200 }}
        />
    );
}