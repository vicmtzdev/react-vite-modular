import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { usePresetsStore, useUiStore, useControlStore, useAuthStore } from '../../hooks';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { presets, setActiveEvent } = usePresetsStore();
    const { isPresetModalOpen } = useUiStore();
    const { setTemperature, machineIsWorking, machineIsHeating, machineIsTakingOut } = useControlStore();

    const { user } = useAuthStore(); 

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >

            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >

                <Toolbar>
                    <Typography variant='h6' noWrap component='div' >{`Presets de ${user.name}`}</Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        presets.map(text => (
                            <ListItem key={text._id} disablePadding>
                                <ListItemButton onClick={({ event }) => { setActiveEvent(text), setTemperature(text.temperature) }} disabled={isPresetModalOpen || machineIsWorking || machineIsHeating || machineIsTakingOut} >
                                    <ListItemIcon>
                                        <ChevronRight sx={{ fontSize: 35 }} color="primary" />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text.title} />
                                        <ListItemText secondary={`Nota: ${(text.description.length > 14) ? text.description.substring(0, 14) + '...' : text.description}`} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
