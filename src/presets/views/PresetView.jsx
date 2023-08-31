import { DeleteOutline, Edit, PlayArrow } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export const PresetView = () => {
    return (
        <>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} >
                <Grid item >
                    <Typography fontSize={39} fontWeight='light'>Preset para tostado de Almendra</Typography>
                </Grid>



                <Grid item>
                    <IconButton>
                        <DeleteOutline fontSize="large" color="error" />
                    </IconButton>

                    <IconButton>
                        <Edit fontSize="large" color="success" />
                    </IconButton>

                    <Button variant='contained' color='primary' sx={{ padding: 1, pl: 2, ml: 1 }} >
                        <Typography>Start</Typography>
                        <PlayArrow sx={{ fontSize: 30, ml: 0.1 }} />
                    </Button>
                </Grid>
            </Grid>

            <Card sx={{ mt: 2 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://images.unsplash.com/photo-1583126379180-ec70bb3178b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxtb25kfGVufDB8fDB8fHww&w=1000&q=80"
                        alt="almendra"
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div" sx={{}} >
                            Almendra
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{}}>
                            Las almendras son buenas para la salud y muy ricas en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado.
                        </Typography>

                        <TableContainer component={Paper} sx={{ mt: 2, backgroundColor: 'shadow.main' }}>
                            <Table size='small' aria-label='a dense table' >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center' >Cantidad (kg)</TableCell>
                                        <TableCell align='center' >Tiempo de tostado (min)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align='center' >10</TableCell>
                                        <TableCell align='center' >15</TableCell>
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
