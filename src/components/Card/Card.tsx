import { FC, useState, MouseEvent } from 'react'
import { Button, Card, Typography, Box, CardContent, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Comment } from '../../interfaces/Comment';
import axios from 'axios';



const CardComp: FC<Comment> = (props) => {

    const { nombre, mg, msg, createdAt }: Comment = props

    const timeStamp = new Date(createdAt).toLocaleString('es-ES')

    const [active, setActive] = useState(false);
    const [likeSent, setLikeSent] = useState(false);
  
    const handleLike = async () => {
      if (!likeSent) {
        setActive(!active);
        setLikeSent(true);
        
        
        try {
          const response = await axios.patch('https://api-102.vercel.app/comments', {
            nombre: nombre,
            msg: msg,
            createdAt: createdAt,
          }
          );
        } catch (error) {
          console.error('Error al enviar el PATCH:', error);
        }
      }
    };

    return (
      <Card variant='outlined'>
        <CardContent>
          <Typography color='primary' variant='h6'>{nombre}</Typography>
          <Typography sx={{ fontSize: '13px', mt: 1 }}>{msg}</Typography>
  
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '10px', color: 'gray', mt: 1 }}>{timeStamp}</Typography>
            <Button onClick={handleLike} color={active? "secondary" : "primary"}><Typography variant='h6'>{mg}</Typography><FavoriteIcon fontSize='small'/></Button>
          </Box>
        </CardContent>
      </Card>
      
    );
  };
  
export default CardComp;
  