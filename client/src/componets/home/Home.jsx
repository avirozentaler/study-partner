import React, { useContext, useState } from 'react';
import AuthPopupContex from '../../context/AuthPopupContex';
import Nav from './nav/Nav';
import About from '../about/About'
import BodyApp from './bodyApp/BodyApp';
import UserConnected from '../../context/UserConnected';
import {Box} from '@mui/material'
import { useColorScheme } from '@mui/material/styles';

export default function Home() {

    const { mode, setMode } = useColorScheme();
    const { userConnected, setUserConnected } = useContext(UserConnected);
    const [anchorUserMenu, setAnchorUserMenu] = useState(null);
    const [openLogIn, setOpenLogIn] = useState(false);
    const [authPopup, setAuthPopup] = useState(false);
    const [pageVale, setPageVale] = useState(true)


    const handleAuthPopup = () => {
        setAuthPopup((authPopup) => !authPopup)
    }
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
    const aaa = () => {
        setUserConnected({ name: 'amit' })
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AuthPopupContex.Provider value={{ handleAuthPopup }}>
                <Nav setOpenLogIn={setOpenLogIn} pageVale={pageVale} setPageVale={setPageVale} />
                {pageVale ? <BodyApp openLogIn={openLogIn} handleCloseLogIn={handleCloseLogIn} /> : <About />
                }
            </AuthPopupContex.Provider>
        </Box>
    );
}