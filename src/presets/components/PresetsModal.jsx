import { useEffect, useMemo, useRef, useState } from 'react';

import Modal from 'react-modal';
import { AddPhotoAlternate } from '@mui/icons-material';
import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';

import { usePresetsStore, useUiStore } from '../../hooks';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const PresetsModal = () => {

    const { isPresetModalOpen, closePresetModal } = useUiStore();
    const { activePreset, startSavingEvent } = usePresetsStore();

    const [formSubmitted, setFormSubmitted] = useState(false)

    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        amount: 0,
        temperature: 0,
        time: 0,
        photo: '',
    });

    //* Inician Validaciones

    const titleError = useMemo(() => {
        if (!formSubmitted) return false;
        return (formValues.title.length <= 0)
            ? true
            : false;
    }, [formValues.title, formSubmitted])

    const descriptionError = useMemo(() => {
        if (!formSubmitted) return false;
        return (formValues.description.length <= 0)
            ? true
            : false;
    }, [formValues.description, formSubmitted])

    const amountError = useMemo(() => {
        if (!formSubmitted) return false;
        return (formValues.amount.length <= 0 || formValues.amount <= 0)
            ? true
            : false;
    }, [formValues.amount, formSubmitted])

    const temperatureError = useMemo(() => {
        if (!formSubmitted) return false;
        return (formValues.temperature.length <= 0 || formValues.temperature < 30)
            ? true
            : false;
    }, [formValues.temperature, formSubmitted])

    const timeError = useMemo(() => {
        if (!formSubmitted) return false;
        return (formValues.time.length <= 0 || formValues.time <= 0)
            ? true
            : false;
    }, [formValues.time, formSubmitted])

    const photoError = useMemo(() => {
        if (!formSubmitted) return false;
        return (formValues.photo.length <= 0)
            ? true
            : false;
    }, [formValues.photo, formSubmitted])

    //* Terminan validaciones

    //* Inicio de carga de valores del activePreset al form de edicion

    useEffect(() => {
        if (activePreset !== null) {
            setFormValues({ ...activePreset });
        } else {
            setFormValues({
                title: '',
                description: '',
                amount: 0,
                temperature: 0,
                time: 0,
                photo: '',
                user: {
                    _id: '123',
                    name: 'Victor'
                }
            })
        }

    }, [activePreset])


    //* Fin de carga de valores del activePreset al form de edicion


    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        })
    }

    const fileInputRef = useRef();

    const onCloseModal = () => {
        closePresetModal();
    }


    const onFileInputChange = async ({ target }) => {

        if (target.files === 0) return;


        //* Inicio de subida de archivos

        const file = target.files[0];
        const cloudUrl = 'https://api.cloudinary.com/v1_1/dtcdotyjq/upload';

        const formData = new FormData();
        formData.append('upload_preset', 'react-modular');
        formData.append('file', file);

        try {

            const resp = await fetch(cloudUrl, {
                method: 'POST',
                body: formData,
            });

            if (!resp.ok) throw new Error('Aqui esta el peo');

            const cloudResp = await resp.json();

            setFormValues({
                ...formValues,
                photo: cloudResp.secure_url,
            })

        } catch (error) {
            throw new Error(error.message);
        }

        //* Fin de subida de archivos

    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (formValues.title.length <= 0) return;
        if (formValues.description.length <= 0) return;
        if (formValues.amount.length <= 0 || formValues.amount <= 0) return;
        if (formValues.temperature.length <= 0 || formValues.temperature < 30) return;
        if (formValues.time.length <= 0 || formValues.time <= 0) return;
        if (formValues.photo.length <= 0) return;

        // console.log(formValues);

        //TODO: 
        await startSavingEvent(formValues);
        closePresetModal();
        setFormSubmitted(false);
    }

    return (
        <Modal
            isOpen={isPresetModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
        >


            <Typography variant='h5' sx={{ ml: 0.5, color: 'secondary.main' }}>Nuevo Preset</Typography>
            {/* <Divider /> */}

            <form className='container' onSubmit={onSubmit} >
                <Grid container direction='row' justifyContent='space-between' alignItems='center' spacing={1.5}>

                    <Grid item xs={12} >
                        <Typography variant='subtitle1' sx={{ mt: 1.5, mb: 1, ml: 0.5 }} >Nombre del preset</Typography>
                        <TextField
                            error={titleError}
                            type='text'
                            variant='outlined'
                            fullWidth
                            placeholder='Ingrese nombre del preset'
                            label='Nombre'
                            name='title'
                            value={formValues.title}
                            onChange={onInputChanged}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='subtitle1' sx={{ mb: 1, ml: 0.5 }} >Descripción del preset</Typography>
                        <TextField
                            error={descriptionError}
                            type='text'
                            variant='outlined'
                            fullWidth
                            placeholder='Ingrese una descripcion corta del preset'
                            label='Descripción'
                            name='description'
                            value={formValues.description}
                            onChange={onInputChanged}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            error={amountError}
                            type="number"
                            label="Cantidad"
                            sx={{ mt: 2 }}
                            name='amount'
                            value={formValues.amount}
                            onChange={onInputChanged}
                            InputProps={{
                                // startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            error={temperatureError}
                            type="number"
                            label="Referencia"
                            sx={{ mt: 2 }}
                            name='temperature'
                            value={formValues.temperature}
                            onChange={onInputChanged}
                            InputProps={{
                                // startAdornment: <InputAdornment position="start">C°</InputAdornment>,
                                endAdornment: <InputAdornment position="end">C°</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            error={timeError}
                            fullWidth
                            type="number"
                            label="Tiempo de tostado"
                            sx={{ mt: 2 }}
                            name='time'
                            value={formValues.time}
                            onChange={onInputChanged}
                            InputProps={{
                                // startAdornment: <InputAdornment position="start">Min</InputAdornment>,
                                endAdornment: <InputAdornment position="end">Min</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 0.5, mb: 0.5 }} >
                        <input
                            type='file'
                            name='photo'
                            onChange={onFileInputChange}
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                        />

                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 1 }}
                            color='secondary'
                            endIcon={<AddPhotoAlternate />}
                            onClick={() => fileInputRef.current.click()}
                        >
                        </Button>
                    </Grid>

                    <Grid container>

                        <Typography
                            variant='subtitle2'
                            sx={{ ml: 1.8, display: `${(!formValues.photo) ? 'none' : ''}` }}
                        >
                            Archivo seleccionado:
                        </Typography>

                        <Typography
                            variant='subtitle2'
                            color='selected.main'
                            sx={{ ml: 0.5, display: `${(!formValues.photo) ? 'none' : ''}` }}
                        >
                            {(formValues.photo.length > 45) ? formValues.photo.substring(0, 45) + '...' : formValues.photo}
                        </Typography>

                        <Typography
                            variant='subtitle2'
                            color='error'
                            sx={{ ml: 1.8, display: `${(!photoError) ? 'none' : ''}` }}
                        >
                            No se ha seleccionado ningun archivo
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" fullWidth type='submit' sx={{ mt: 1 }}>Guardar</Button>
                    </Grid>


                </Grid>
            </form>

        </Modal>
    )
}
