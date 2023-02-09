import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPopupContex from '../../context/AuthPopupContex';
import Profie from '../profile/Profile';
import Nav from './nav/Nav';
import About from '../about/About'
import BodyApp from './bodyApp/BodyApp';
import UserProfile from './userProfile/UserProfile';
import UserConnected from '../../context/UserConnected';
import {Box} from '@mui/material'


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
        <Box sx={{ flexGrow: 1}}>
            <AuthPopupContex.Provider value={{ handleAuthPopup }}>
                <BrowserRouter>
                <Nav setOpenLogIn={setOpenLogIn}/>
                
                <Routes>
                    <Route path='/' element={<BodyApp openLogIn={openLogIn} handleCloseLogIn={handleCloseLogIn} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/profile' element={<Profie/>} />
                    <Route path='/user' element={<UserProfile/>} />
                </Routes>
                </BrowserRouter>
            </AuthPopupContex.Provider>
        </Box>
    );
}
