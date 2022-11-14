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
            <Outlet/> 
        </Box>



    );
}


