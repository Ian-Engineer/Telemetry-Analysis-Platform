import { ThemeProvider } from "@mui/material";
import React, { createContext, useMemo, useState, useContext, useEffect } from 'react';
import { CssBaseline } from "@mui/material";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

type ColorMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ColorMode;
    toggleColorMode: () => void;
}

const localStorageColorModeKey = 'prefered-color-mode'

const ThemeModeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}

export const ThemeModeProvider = ({ children }:{ children: React.ReactNode }) => {
    const getInitialMode = (): ColorMode => {
        return 'light'

        const saved = localStorage.getItem(localStorageColorModeKey) as ColorMode | null;
        if (saved === 'light' || saved === 'dark') return saved;
        
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return systemPrefersDark ? 'dark' : 'light';
    };
    
    const [mode, setMode] = useState<ColorMode>(getInitialMode);

    const toggleColorMode = () => {
        setMode((prev) => {
        const next = prev === 'light' ? 'dark' : 'light';
        localStorage.setItem(localStorageColorModeKey, next);
        return next;
        });
    };

    useEffect(() => {
        localStorage.setItem(localStorageColorModeKey, mode);
    }, [mode]);

    const theme = useMemo(()=> (mode === 'light' ? lightTheme : darkTheme), [mode])

    return (
        <ThemeModeContext.Provider value={{mode, toggleColorMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )
}