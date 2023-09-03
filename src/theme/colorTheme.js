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
            main: '#0D5298'
        },
    }
})