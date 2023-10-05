import { FormEvent, FC } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Paper
} from '@mui/material';
import { useTheme } from '@emotion/react';

export const TextComponent: FC = () => {
    const theme = useTheme()
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
  
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
      try {
  
        if(nombre && mensaje){
          const response = await axios.post('https://api-102.vercel.app/comments', {
            nombre: nombre,
            msg: mensaje,
            createdAt: new Date(),
            mg: 0
          });
        }
  
        setNombre('');
        setMensaje('');
      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
      }
    };

    return(
    //   <Paper variant='outlined'
    //   sx={{
    //     mt: 2,
    //     p: 3,
    //     boxShadow: '0 0 3px white'
    //   }}
    // >
      <Box 
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          mt: 2
        }}
      >
        <TextField color='primary' type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} sx={{mb: 2}} label="Nombre" variant="standard" />
        <TextField  value={mensaje} onChange={(e) => setMensaje(e.target.value)}
          id="outlined-multiline-static"
          label="Escribe algo"
          multiline
          minRows={2}
          maxRows={4}
        />
        <Button type='submit' sx={{mt:2}}>postear</Button>
      </Box>
    // </Paper>
    )
}