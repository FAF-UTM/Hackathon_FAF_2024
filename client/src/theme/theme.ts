// src/theme/theme.ts

import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// Example color palette
const primaryColor = '#1D4783';  // Deep official-like blue
const secondaryColor = '#FFD200'; // Vibrant gold/yellow
const backgroundColor = '#F7F9FC'; // Light neutral background
const errorColor = '#D32F2F';

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        background: {
            default: backgroundColor,
        },
        error: {
            main: errorColor,
        },
        text: {
            primary: '#1A1A1A',
            secondary: grey[700],
        },
    },
    typography: {
        fontFamily: 'Montserrat, Arial, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.2rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '1.8rem',
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.6rem',
        },
        body1: {
            fontSize: '1rem',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 6, // Slightly rounded corners
    },
    components: {
        // Example: override MUI Button
        MuiButton: {
            styleOverrides: {
                root: {
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: primaryColor,
                    ':hover': {
                        borderColor: secondaryColor,
                    },
                },
            },
        },
        // Example: add a subtle border or pattern in the container
        MuiContainer: {
            styleOverrides: {
                root: {
                    border: `1px solid ${primaryColor}22`,
                    borderRadius: '6px',
                    padding: '1.5rem',
                    backgroundColor: '#ffffff',
                },
            },
        },
    },
});

export default theme;
