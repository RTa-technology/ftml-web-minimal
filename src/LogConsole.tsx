// LogConsole.tsx
import React, { useEffect, useState } from 'react';
import { Console, Hook, Decode } from 'console-feed'
import { Typography, Paper } from '@mui/material';

function LogConsole() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        Hook(window.console, log => {
            setLogs(prevLogs => [...prevLogs, Decode(log)])
        });
    }, []);

    return (
        <>
            <Typography variant="h6" component="h6">
                logs
            </Typography>
            <Paper elevation={3} style={{ height: '400px', overflowY: "scroll" }}>
                <Console logs={logs} variant="dark" />
            </Paper>
        </>
    );
}

const MemoizedLogConsole = React.memo(LogConsole);
export default MemoizedLogConsole;