import React, { useContext, useState } from 'react';

import UserConnected from '../../context/UserConnected';
import Auth from '../authentication/auth/Auth';
import {AppBar, Box, Toolbar, Typography, IconButton, ListItemIcon, MenuItem, Menu, Avatar, Tooltip,Button, AvatarGroup}
 from '@mui/material'

import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useColorScheme,styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
//

import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate} from 'react-router-dom';
import { blue, deepPurple } from '@mui/material/colors';
export default function Home() {

    /////
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));
      
      function BootstrapDialogTitle(props) {
        const { children, onClose, ...other } = props;
      
        return (
          <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        );
      }
      
      BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
      };

    /////
    const { mode, setMode } = useColorScheme();
    const { userConnected, setUserConnected } = useContext(UserConnected);
    const [anchorUserMenu, setAnchorUserMenu] = useState(null);
    const [openLogIn, setOpenLogIn] = useState(false);
    const navigat = useNavigate()
    


    const handleOpenLogIn = () => {
        setOpenLogIn(true);
    };
    const handleCloseLogIn = () => {
        setOpenLogIn(false);
    };

    
const modeToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
}

const handleAuth = () => {
    setUserConnected(!userConnected)
}
const handleOpenUserMenu = (event) => {
    setAnchorUserMenu(event.currentTarget);
};

const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
};

const handleLogOut = () => {
    setUserConnected(false);
}



   
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
            <Button
                type='link'
                onClick={()=> navigat('/')}
            >
                <Avatar sx={{width: 60, height: 50 }} alt="LOGO" src="SP.png" />
            </Button>
            
               {/* Here you need to add a logo with a permanent link to the home page */}


                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Study Partner
                    </Typography>
                    <IconButton sx={{ ml: 1 }} onClick={modeToggle} color="inherit">
                        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    {/* {!userConnected? <Dialogs title="login">
                         <Login/>
                    </Dialogs>:null}
                    */}
            
                    {/* popup */}
      
                    {!userConnected ? <Box> <Button color="inherit" onClick={handleOpenLogIn}>Login</Button> </Box> : null}

                    <div>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="open user options">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {!userConnected ? <Avatar /> : <Avatar>{userConnected.name ? userConnected.name.slice(0, 1) : " "}</Avatar>}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorUserMenu}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorUserMenu)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                {!userConnected ?
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <ListItemIcon>
                                            <AccountCircle fontSize="small" />
                                        </ListItemIcon>
                                        add account
                                    </MenuItem>
                                    :
                                    <MenuItem onClick={handleLogOut}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>}
                            </Menu>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
             
                
            <Box>
                {userConnected ?
                        <Typography variant='h3'>user  Connected</Typography>
                        :
                        <Typography variant='h3'>user not Connected</Typography>
                }
            </Box>           
            <></>
            

            

                

            <BootstrapDialog
        onClose={handleCloseLogIn}
        aria-labelledby="customized-dialog-title"
        open={openLogIn}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseLogIn}>
          log in
        </BootstrapDialogTitle>
        <DialogContent dividers>
            <Auth/>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </BootstrapDialog>
        </Box>
        

    
                


    );
}


