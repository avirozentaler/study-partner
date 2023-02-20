import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPopupContex from '../../context/AuthPopupContex';
import Profie from '../profile/Profile';
import Nav from '../nav/Nav';
import About from '../about/About'
import Auth from '../authentication/Auth';
import Main from '../main/Main';
import UserProfile from '../userProfile/UserProfile';
import Footer from '../footer/Footer';
// import UserConnected from '../../context/UserConnected';
import { Box, Divider } from '@mui/material'


export default function Home() {
    const [openLogIn, setOpenLogIn] = useState(false);
    const [authPopup, setAuthPopup] = useState(false);

    const handleAuthPopup = () => {
        setAuthPopup((authPopup) => !authPopup)
    }

    const handleCloseLogIn = () => {
        setOpenLogIn(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AuthPopupContex.Provider value={{ handleAuthPopup }}>
                <BrowserRouter>
                    <Nav setOpenLogIn={setOpenLogIn} />
                    <Routes>
                        <Route path='/' element={<Main openLogIn={openLogIn} handleCloseLogIn={handleCloseLogIn} />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/profile' element={<Profie />} />
                        <Route path='/user' element={<UserProfile />} />
                    </Routes>
                    {openLogIn && <Auth handleCloseLogIn={handleCloseLogIn} openLogIn={openLogIn} />}
                    <Divider />
                    {/* <Footer /> */}
                </BrowserRouter>
            </AuthPopupContex.Provider>
        </Box>
    );
}
