import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPopupContex from '../../context/AuthPopupContex';
import Profie from '../profile/Profile';
import Nav from './nav/Nav';
import About from '../about/About'
import BodyApp from './bodyApp/BodyApp';
import UserConnected from '../../context/UserConnected';
import {Box} from '@mui/material'


export default function Home() {

    
    const { userConnected, setUserConnected } = useContext(UserConnected);
    const [anchorUserMenu, setAnchorUserMenu] = useState(null);
    const [openLogIn, setOpenLogIn] = useState(false);
    const [authPopup, setAuthPopup] = useState(false);
    


    const handleAuthPopup = () => {
        setAuthPopup((authPopup) => !authPopup)
    }
    // const handleOpenLogIn = () => {
    //     setOpenLogIn(true);
    //     handleCloseUserMenu();

    // };
    const handleCloseLogIn = () => {
        setOpenLogIn(false);
    };
    // const handleAuth = () => {
    //     setUserConnected(!userConnected)
    // }
    // const handleOpenUserMenu = (event) => {
    //     setAnchorUserMenu(event.currentTarget);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorUserMenu(null);
    // };

    // const handleLogOut = () => {
    //     setUserConnected(null);
    // }
    // const aaa = () => {
    //     setUserConnected({ name: 'amit' })
    // }
    
    return (
        <Box sx={{ flexGrow: 1}}>
            <AuthPopupContex.Provider value={{ handleAuthPopup }}>
                <BrowserRouter>
                <Nav setOpenLogIn={setOpenLogIn}/>
                <Routes>
                    <Route path='/' element={<BodyApp openLogIn={openLogIn} handleCloseLogIn={handleCloseLogIn} />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/profile' element={<Profie/>} />
                </Routes>
                </BrowserRouter>
            </AuthPopupContex.Provider>
        </Box>
    );
}
