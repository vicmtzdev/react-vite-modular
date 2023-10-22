import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        },
        shadow: {
            main: '#F1F1F1'
        },
        matchone: {
            main: '#004083'
        },
        matchtwo: {
            main: '#0D5298'
        },
        selected: {
            main: '#0D983D'
        },
        disabled: {
            main: '#E0E0E0'
        },
    }
})