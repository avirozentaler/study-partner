import React, { useContext, useState } from 'react';
import UserConnected from '../../context/UserConnected';
import { Link, Outlet, useNavigate } from "react-router-dom";
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useColorScheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



export default function Home() {
    
            
    const { mode, setMode } = useColorScheme();
    const { userConnected, setUserConnected } = useContext(UserConnected);
    const [anchorUserMenu, setAnchorUserMenu] = useState(null);
    const navigate = useNavigate();

    const modeToggle = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    const handleOpenLogin = () => {
        navigate('/log-in');
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
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Study Partner
                    </Typography>
                    <IconButton sx={{ ml: 1 }} onClick={modeToggle} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

        
      
                    {!userConnected ? <Box> <Button color="inherit" onClick={handleOpenLogin}>Login</Button> </Box> : null}
                    {/* {!userConnected ? <Link to='/log-in'>log in</Link> : null} */}
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
        </Box>

    



    );
}


