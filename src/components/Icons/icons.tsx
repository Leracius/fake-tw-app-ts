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
    const logos = [vite, reactLogo, typeLogo, reduxLogo, material, mongo, expressLogo];
  
    return (
      <Card sx={{ p: 1, m: 1 }}>
        <Grid container spacing={1} justifyContent="center" sx={{mb: '4'}}>
          {logos.map((logo, index) => (
            <Grid item key={index } sx={{ justifyContent: 'center' }}>
              <CardMedia component="img" sx={{ width: '30px'}} image={logo} />
            </Grid>
          ))}
        </Grid>
      </Card>
    );
  };
  
  export default IconsComp;