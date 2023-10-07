import {
    Button,
    Box,
    Typography,
    Drawer,
    AppBar,
    Toolbar,
    IconButton,
    SvgIcon,
    CardMedia
  } from '@mui/material';
  import { FC, useState } from 'react';
  import { NavListDrawer } from './NavListDrawer';
  import polarBear from '../../assets/polarBear.svg'
  
  export const Navbar: FC = (props) => {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={() => {
                setOpen(!open)
              }}>
              <CardMedia component="img" sx={{ width: '80px', position: 'absolute'}} image={polarBear} />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 , ml: '20px'}}>

            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Button >menu</Button>
              <Button >login</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          open={open}
          anchor="left"
        
          >
          <NavListDrawer />
          <Button
            onClick={() => {
              setOpen(!open);
            }}
          >
            close
          </Button>
        </Drawer>
      </>
    );
  };
  
export default Navbar