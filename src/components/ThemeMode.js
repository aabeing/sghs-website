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
    const [mode, setMode] = useState('dark');
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

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {
                        main: '#2f4a1c',
                    },
                    secondary: {
                        main: '#688158',
                    },
                    customWhite: {
                        light: '#ffcdd2',
                        main: '#ffcdd2',
                        dark: '#ffcdd2',
                        contrastText: '#ffcdd2',
                    },
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}