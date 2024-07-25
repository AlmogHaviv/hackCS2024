import React from "react";
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function ChartContainer({ children, title }) {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                minHeight: 300,
                maxHeight: 500,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                p: 2,
            }}
        >
            <Typography level="h2" sx={{ mb: 2 }}>{title}</Typography>
            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                {children}
            </Box>
        </Box>
    );
}