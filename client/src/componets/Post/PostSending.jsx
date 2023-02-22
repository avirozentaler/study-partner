import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserConnected from "../../context/UserConnected";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

export default function PostSending({ emailSent, emailFailed }) {

    return (
        <Box >
            {(!emailFailed && !emailSent) ? <Box >
                <Box>
                <Typography variant="h5">sending email to your partner</Typography>
                </Box>
                <Box>
                <OutboxOutlinedIcon color="primary" fontSize="large"/>
                </Box>
                
            </Box> :
                emailFailed ? <Box >
                    <>
                    <Typography>sending email failed please try later</Typography>
                    </>
                    <>
                    <ErrorOutlinedIcon />
                    </>
                    
                </Box> :
                    emailSent && <Box>
                        <Typography>Email sent to the partner</Typography>
                        <MarkEmailReadOutlinedIcon />
                    </Box>}
        </Box>
    )
}
