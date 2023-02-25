import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e0e0e0',
            dark: '#333',
            border: '#c0c0c0',
            textDark: '#333',
            textLight: '#f0f0f0'
        }
    }
});

export const MuiSkinThemeProvider  = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
};
