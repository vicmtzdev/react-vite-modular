import { ArrowBack, DeleteOutline, Edit, PlayArrow, Thermostat, Stop } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { useControlStore, useCustomTimer, usePresetsStore, useUiStore } from '../../hooks';

export const PresetView = ({ activePreset }) => {

    const { setNullEvent, startDeletingEvent } = usePresetsStore();
    const { openPresetModal } = useUiStore();
    const { startHeat, startWork, stopOperation, machineIsWorking, machineIsHeating } = useControlStore();
    const { secondsLeft, startTimer } = useCustomTimer();


    return (
        <> 

            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} >
                <Grid item >
                    <Typography fontSize={39} fontWeight='light'>{`Preset para tostado de ${activePreset.title}`}</Typography>
                </Grid>


                <Grid item>

                    <IconButton onClick={setNullEvent} disabled={machineIsWorking || machineIsHeating} >
                        <ArrowBack fontSize="large" color={(machineIsWorking || machineIsHeating) ? 'disabled' : 'matchone'} />
                    </IconButton>

                    <IconButton onClick={startDeletingEvent} disabled={machineIsWorking || machineIsHeating} >
                        <DeleteOutline fontSize="large" color={(machineIsWorking || machineIsHeating) ? 'disabled' : 'error'} />
                    </IconButton>

                    <IconButton onClick={openPresetModal} disabled={machineIsWorking || machineIsHeating} >
                        <Edit fontSize="large" color={(machineIsWorking || machineIsHeating) ? 'disabled' : 'success'} />
                    </IconButton>

                    <Button variant='contained' color='primary' onClick={startHeat} disabled={machineIsWorking || machineIsHeating} sx={{ padding: 1, pl: 2, ml: 1 }} >
                        <Typography>Heat</Typography>
                        <Thermostat sx={{ fontSize: 30, ml: 0.1 }} />
                    </Button>

                    <Button variant='contained' color='success' onClick={() => { startTimer(15) }} disabled={machineIsWorking} sx={{ padding: 1, pl: 2, ml: 1 }} >
                        <Typography color={machineIsWorking ? 'error.main' : ''} >{machineIsWorking ? secondsLeft : 'Start'}</Typography>
                        <PlayArrow sx={{ fontSize: 30, ml: 0.1 }} />
                    </Button>

                    <Button variant='contained' color='error' onClick={stopOperation} sx={{ padding: 1, pl: 2, ml: 1 }} >
                        <Typography>Stop</Typography>
                        <Stop sx={{ fontSize: 30, ml: 0.1 }} />
                    </Button>

                </Grid>
            </Grid>

            <Card sx={{ mt: 2 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image={activePreset.photo}
                        alt={activePreset.title}
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div" sx={{}} >
                            {activePreset.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{}}>
                            {activePreset.description}
                        </Typography>

                        <TableContainer component={Paper} sx={{ mt: 2, backgroundColor: 'shadow.main' }}>
                            <Table size='small' aria-label='a dense table' >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center' >Cantidad (kg)</TableCell>
                                        <TableCell align='center' >Temperatura de referencia (C°)</TableCell>
                                        <TableCell align='center' >Tiempo de tostado (min)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align='center' >{activePreset.amount}</TableCell>
                                        <TableCell align='center' >{activePreset.temperature}</TableCell>
                                        <TableCell align='center' >{activePreset.time}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </CardContent>
                </CardActionArea>
            </Card>

        </>

    )
}
