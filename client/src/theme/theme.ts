import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// Example color palette
const primaryColor = '#1D4783'; // Deep official-like blue
const secondaryColor = '#FFD200'; // Vibrant gold/yellow
const backgroundColor = '#001321'; // Dark background
const errorColor = '#D32F2F';
const white = '#fff';

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
        borderRadius: 6, // Default border radius for components
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    color: white, // Ensures input text is white
                    '& .MuiInputBase-input': {
                        color: white, // Input text color
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: white, // Focused border color
                    },
                },
                notchedOutline: {
                    borderColor: white, // Default border color
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: white, // Default label color
                    '&.Mui-focused': {
                        color: white, // Focused label color
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: white,
                    borderRadius: 10,
                    height: 54,
                    marginTop: 10,
                    ':hover': {
                        borderColor: secondaryColor,
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    border: `1px solid ${white}`,
                    borderRadius: '6px',
                    padding: '1.5rem',
                    backgroundColor: '#ffffff',
                },
            },
        },
    },
});

export default theme;