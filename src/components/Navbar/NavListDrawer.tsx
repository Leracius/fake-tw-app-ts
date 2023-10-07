import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DraftsIcon from '@mui/icons-material/Drafts';
import { FC } from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import polarBear from '../../assets/polarBear.svg'
import IconsComp from '../Icons/icons';

export const NavListDrawer: FC = () => {
  return (
    <Box maxWidth="sm" sx={{ width: { xs: '100vw', sm: '350px' } }}>
        <CardMedia  component="img"  image={polarBear} sx={{borderBottom: '3px solid gray', bgcolor: '#232323'}}/>
        <IconsComp/>
      {/* <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#inbox">
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{flexDirection: 'column'}}>
            <ListItemText primary="Nombre" />

            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Nombre" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav> */}
      <Divider />
    </Box>
  )
}
