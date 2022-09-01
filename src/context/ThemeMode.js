import React, { useContext, useState, useMemo, createContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const ColorModeContext = createContext({ toggleColorMode: () => { } });

// const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//     },
//   });
export function useColorMode() {
    const colorMode = useContext(ColorModeContext);
    return colorMode
}
export function ThemeMode({ children }) {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                console.log("Theme Mode change")
                // console.log()
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const customPalLight =
    {
        palette: {
            type: 'light',
            primary: {
                main: '#002147',
            },
            secondary: {
                main: '#4b40ff',
            },
            background: {
                default: '#E0DED9',
                paper: '#fff',
            },
            customWhite: {
                light: '#ffcdd2',
                main: '#ffcdd2',
                dark: '#ffcdd2',
                contrastText: '#ffcdd2',
            },
        },
    }
    const customPalDark =
    {
        palette: {
            type: 'dark',
            primary: {
                main: '#002147',
                dark: '#002147'
            },
            secondary: {
                main: '#4b40ff',
            },
            background: {
                default: '#303030',
                paper: '#424242',
            },
            customWhite: {
                light: '#ffcdd2',
                main: '#ffcdd2',
                dark: '#ffcdd2',
                contrastText: '#ffcdd2',
            },
            text: {
                primary:'#D7D9DD'
            }
        },
    }
    const customModeObj = mode === 'light' ? customPalLight : customPalDark;
    // console.log('Theme TEST')
    const theme = useMemo(
        () =>
            createTheme(customModeObj),
        [customModeObj],
    );
    // console.log("THEME LOG: ", theme);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}