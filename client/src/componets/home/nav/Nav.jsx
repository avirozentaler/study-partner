import React,{useState,useContext} from 'react'
import UserConnected from '../../../context/UserConnected';
import { AppBar, Box, Toolbar, Typography, IconButton, ListItemIcon, MenuItem, Menu, Avatar, Tooltip, Button, AvatarGroup }
    from '@mui/material'
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useColorScheme, styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { blue, deepPurple } from '@mui/material/colors';



export default function Nav({setOpenLogIn,setPageVale,pageVale}) {
  const { mode, setMode } = useColorScheme();

  const {userConnected, setUserConnected} = useContext(UserConnected)
  const [anchorUserMenu, setAnchorUserMenu] = useState(null);



    const handleOpenLogIn = () => {
        setOpenLogIn(true);
        handleCloseUserMenu();

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
        setUserConnected(null);
    }
     const handleBodyValContent =()=>{
        setPageVale((pageVale)=> !pageVale)
    }


  









  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    {/* sx={{ display: 'flex' ,justifyContent: 'space-around'}} */}
        <Toolbar >
            <Button
                type='link'
                onClick={() =>{}}
            >
                <Avatar sx={{ width: 60, height: 50 }} alt="LOGO" src="SP.png" />
            </Button>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Study Partner
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={modeToggle} color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
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
                        {!userConnected ?
                            <>
                                <MenuItem onClick={handleOpenLogIn}>
                                    <ListItemIcon>
                                    <PersonIcon />
                                    </ListItemIcon>
                                    log in
                                </MenuItem>
                            </>
                            :
                            <>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleLogOut}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </>}
                        <MenuItem onClick={handleBodyValContent}>
                            <ListItemIcon>
                                <InfoIcon fontSize="small" />
                            </ListItemIcon>
                            About
                        </MenuItem>
                    </Menu>
                </Box>
            </div>
        </Toolbar>
    </AppBar>
</Box >
  )
}
