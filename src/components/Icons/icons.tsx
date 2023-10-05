import { Box, Card, CardMedia, Grid, SvgIcon } from '@mui/material'
import { FC } from 'react'
import reactLogo from '../../assets/react.svg'
import typeLogo from '../../assets/ts.svg'
import expressLogo from '../../assets/express.svg'
import reduxLogo from '../../assets/redux.svg'
import material from '../../assets/material.svg'
import vite from '../../assets/vite.svg'
import mongo from '../../assets/mongo.svg'


const IconsComp: FC = () => {
    const logos = [reactLogo, typeLogo, reduxLogo, material, vite, mongo, expressLogo];
  
    return (
      <Card sx={{ p: 1, m: 1 }}>
        <Grid container spacing={1} justifyContent="space-evenly">
          {logos.map((logo, index) => (
            <Grid item key={index } xs={3} sm={1}>
              <CardMedia component="img" sx={{ width: '40px' }} image={logo} />
            </Grid>
          ))}
        </Grid>
      </Card>
    );
  };
  
  export default IconsComp;