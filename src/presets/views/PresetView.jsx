import { ArrowBack, DeleteOutline, Edit, PlayArrow, Thermostat, Stop, South } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { useControlStore, useCustomTimer, usePresetsStore, useUiStore, useCustomTimerTakeOut } from '../../hooks';

export const PresetView = ({ activePreset }) => {

    const { setNullEvent, startDeletingEvent } = usePresetsStore();
    const { openPresetModal } = useUiStore();
    const { startHeat, stopOperation, startTakeOut, machineIsWorking, machineIsHeating, machineIsTakingOut } = useControlStore();
    const { minutesLeft, secondsLeft, startTimer } = useCustomTimer();
    const { minutesLeftTakeOut, secondsLeftTakeOut, startTimerTakeOut } = useCustomTimerTakeOut();


    return (
        <> 

            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} >
                <Grid item >
                    <Typography fontSize={39} fontWeight='light'>{`Preset para tostado de ${activePreset.title}`}</Typography>
                </Grid>


                <Grid item>

                    <IconButton onClick={setNullEvent} disabled={machineIsWorking || machineIsHeating || machineIsTakingOut} >
                        <ArrowBack fontSize="large" color={(machineIsWorking || machineIsHeating || machineIsTakingOut) ? 'disabled' : 'matchone'} />
                    </IconButton>

                    <IconButton onClick={startDeletingEvent} disabled={machineIsWorking || machineIsHeating || machineIsTakingOut} >
                        <DeleteOutline fontSize="large" color={(machineIsWorking || machineIsHeating || machineIsTakingOut) ? 'disabled' : 'error'} />
                    </IconButton>

                    <IconButton onClick={openPresetModal} disabled={machineIsWorking || machineIsHeating || machineIsTakingOut} >
                        <Edit fontSize="large" color={(machineIsWorking || machineIsHeating || machineIsTakingOut) ? 'disabled' : 'success'} />
                    </IconButton>

                    <Button variant='contained' color='primary' onClick={startHeat} disabled={machineIsWorking || machineIsHeating || machineIsTakingOut} sx={{ padding: 1, pl: 2, ml: 1 }} >
                        <Typography>Heat</Typography>
                        <Thermostat sx={{ fontSize: 30, ml: 0.1 }} />
                    </Button>

                    <Button variant='contained' color='success' onClick={() => { startTimer(activePreset.time) }} disabled={machineIsWorking || machineIsTakingOut} sx={{ padding: 1, pl: 2, ml: 1 }} >
                        <Typography color={machineIsWorking ? 'error.main' : ''} >{machineIsWorking ? `${(minutesLeft <= 9) ? '0' + minutesLeft : minutesLeft} : ${(secondsLeft <= 9) ? '0' + secondsLeft : secondsLeft} ` : 'Start'}</Typography>
                        <PlayArrow sx={{ fontSize: 30, ml: 0.1 }} />
                    </Button>

                    <Button variant='contained' color='matchone' onClick={startTakeOut} disabled={machineIsHeating || machineIsWorking || machineIsTakingOut} sx={{ padding: 1, ml: 1 }} >
                        <South sx={{ fontSize: 30, color: 'white' }} />
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
