import React, { useState, useContext } from 'react'
import UserConnected from '../../../context/UserConnected';
import { AppBar, Box, Toolbar, Typography, IconButton, ListItemIcon, MenuItem, Menu, Avatar, Tooltip, Button }
    from '@mui/material'
import Logout from '@mui/icons-material/Logout';
import { useColorScheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';


export default function Nav({ setOpenLogIn, setPageVale, pageVale }) {
    const { mode, setMode } = useColorScheme();
    const { userConnected, setUserConnected } = useContext(UserConnected)
    const [anchorUserMenu, setAnchorUserMenu] = useState(null);
    const handleOpenLogIn = () => {
        console.log('1 open log in ');
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
    const handleBodyValContent = () => {
        setPageVale((pageVale) => !pageVale)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <Button
                        type='link'
                        onClick={handleBodyValContent}
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
                                <MenuItem onClick={handleBodyValContent} >
                                    <ListItemIcon>
                                        {pageVale ? <InfoIcon fontSize="small" /> : <HomeIcon fontSize="small" />}
                                    </ListItemIcon>
                                    {pageVale ? "about" : "home"}

                                </MenuItem>

                                <MenuItem onClick={!userConnected ? handleOpenLogIn : handleLogOut} >
                                    <ListItemIcon>
                                        {!userConnected ? <PersonIcon fontSize="small" /> : <Logout fontSize="small" />}
                                    </ListItemIcon>
                                    {!userConnected ? "log in" : "log out"}
                                </MenuItem>

                                {userConnected ? <MenuItem>
                                    <ListItemIcon>
                                        <PersonIcon fontSize="small" />
                                    </ListItemIcon>
                                    My account
                                </MenuItem> : null}
                            </Menu>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
        </Box >
    )
}
