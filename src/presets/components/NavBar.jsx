import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useAuthStore } from '../../hooks';

export const NavBar = ({ drawerWidth = 240 }) => {

    const { startLogOut } = useAuthStore();

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>

                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 1, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>PresetsApp</Typography>
                    <IconButton color='error' onClick={startLogOut} >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
