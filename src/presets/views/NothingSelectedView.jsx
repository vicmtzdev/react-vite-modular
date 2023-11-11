import { AddOutlined } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, IconButton } from '@mui/material';
import { useEffect } from 'react';
import { usePresetsStore, useUiStore, useControlStore } from '../../hooks';

// const dataFicticia = [
//     {
//         id: '123',
//         title: 'Almendra',
//         description: 'Las almendras son buenas para la salud y muy ricas en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado.',
//         imageUrl: 'https://p4.wallpaperbetter.com/wallpaper/5/371/706/nature-food-wallpaper-preview.jpg'
//     },
//     {
//         id: '456',
//         title: 'Cebada',
//         description: 'La cebada es buenas para la salud y muy rica en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado del elemento.',
//         imageUrl: 'https://img.freepik.com/fotos-premium/semillas-cebada-fondo-cascara-exterior-superficie-granos-cebada_191623-67.jpg?w=2000'
//     },
//     {
//         id: '789',
//         title: 'Cacahuate',
//         description: 'Los cacahuates son buenos para la salud y muy ricos en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado.',
//         imageUrl: 'https://img.freepik.com/premium-photo/salted-peanuts_38663-373.jpg?w=996'
//     },
//     {
//         id: '987',
//         title: 'Cacao',
//         description: 'El cacao es buenos para la salud y muy rico en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado del elemento.',
//         imageUrl: 'https://img.freepik.com/premium-photo/aromatic-brown-cocoa-beans-cocoa-seed-with-cacao-yellow-ripe-raw-materials-chocolat_51137-6350.jpg?w=1380'
//     },
//     {
//         id: '654',
//         title: 'Chile',
//         description: 'El chile es buenos para la salud y muy rico en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado del elemento.',
//         imageUrl: 'https://img.freepik.com/free-photo/dried-chili-pepper-pouring-out-from-sac-floor_1150-35720.jpg?w=996&t=st=1693464367~exp=1693464967~hmac=ec7bad7f1e450181896ae852d7544b0ed02a0f6e4e83a1420e6273c450ace58a'
//     },
//     {
//         id: '321',
//         title: 'Maiz',
//         description: 'El maiz es buenos para la salud y muy rico en nutrimentos, este preset de tostado es de 10 minutos lo cual logra una buena consistencia en el tostado del elemento.',
//         imageUrl: 'https://img.freepik.com/free-photo/yellow-corns-background_1150-9488.jpg?w=996&t=st=1693464412~exp=1693465012~hmac=9bd5ee115d5805b4033b0f700456dd0d3d7ff903f92efa61c81eb0aeb77b950f'
//     },
// ];


export const NothingSelectedView = () => {

    const { presets, setActiveEvent, setNullEvent, startLoadingPresets } = usePresetsStore();
    const { openPresetModal } = useUiStore();
    const { setTemperature } = useControlStore();

    const handleClickNew = () => {
        setNullEvent();
        openPresetModal();
    }

    useEffect(() => {

        startLoadingPresets();

    }, [])


    return (
        <>

            <Grid container gap={4} direction='row' justifyContent='space-around' alignItems='flex-start' >

                {
                    presets.map(card => (
                        <Grid item xs={3} key={card.id} onClick={({ event }) => { setActiveEvent(card), setTemperature(card.temperature) }}>
                            <Card sx={{ maxWidth: 345, maxHeight: 300 }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={card.photo}
                                        alt="kind of grain"
                                    />
                                    <CardContent> 
                                        <Typography gutterBottom variant="h5" component="div">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }

            </Grid>

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'matchone.main',
                    ':hover': { backgroundColor: 'matchtwo.main' },
                    position: 'fixed',
                    right: 70,
                    bottom: 40
                }}
                onClick={handleClickNew}
            >

                <AddOutlined sx={{ fontSize: 30 }} />

            </IconButton>

        </>



    )
}
