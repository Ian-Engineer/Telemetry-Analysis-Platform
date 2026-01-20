import { createTheme, type ThemeOptions } from '@mui/material/styles'
import baseThemeOptions from './baseTheme'
import { grey, red } from '@mui/material/colors'

const tenPercent: string = "#3FF3E6";
const thirtyPercent: string = "#2E4057";
const sixtyPercent: string = "#0B132B";
const pageBackground: string = sixtyPercent;
const textColor: string = "#FFF"
const contrastTextColor: string = "#000"

const darkThemeOptions: ThemeOptions = {
    ...baseThemeOptions,
    palette: {
        primary: {
            main: sixtyPercent,
        },
        secondary: {
            main: thirtyPercent,
        },
        background: {
            default: pageBackground,
            paper: sixtyPercent,
        },
        text: {
            primary: textColor
        },
        error: {
            main: red[600],
        },
    },
    components: {
        ...baseThemeOptions.components,
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: textColor,
                    fontWeight: 600,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
            root: {
                color: sixtyPercent, // default label color
                '&.Mui-focused': {
                color: sixtyPercent, // label color when focused
                },
            },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: sixtyPercent,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: sixtyPercent,
                    },
                },
                notchedOutline: {
                    borderColor: sixtyPercent,
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: textColor,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: tenPercent,
                    '&:hover': {
                        filter: "brightness(90%)",
                        backgroundColor: tenPercent,
                    },
                    color: contrastTextColor,
                    borderRadius: "50px",
                    textTransform: 'none',
                    "& .MuiSvgIcon-root": {
                        color: contrastTextColor,
                    },
                },
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: thirtyPercent,
                    borderWidth: '2px',
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: thirtyPercent,
                    borderRadius: '0px'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: thirtyPercent,
                    borderRadius: "5px"
                }
            }
        }
    }
}

export const darkTheme = createTheme(darkThemeOptions)