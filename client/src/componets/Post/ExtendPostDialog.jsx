import React, { useState } from 'react'
import ExtendedPost from './ExtendedPost';
import PostSending from './PostSending';
import {
    IconButton,
    Dialog,
    DialogTitle,
    Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ExtendPostDialog({ openMore, setOpenMore, post }) {
    const [emailSent, setEmailSent] = useState(0);
    const [isSendingEmail, setIsSendingEmail] = useState(false);

    const handleClose = () => {
        setOpenMore(false);
        setIsSendingEmail(false)
        emailSent === 1 && window.location.reload()
        setEmailSent(0)
    };


    return (
        <Box>
            <Dialog open={openMore} onClose={handleClose} fullWidth={true}>
                <Box>
                    <DialogTitle>
                        <IconButton
                            onClick={() => {
                                handleClose()
                            }}
                            sx={{
                                position: "absolute",
                                right: 8,
                                top: 8,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                </Box>
                {!isSendingEmail ? <ExtendedPost handleClose={handleClose} post={post} setIsSendingEmail={setIsSendingEmail} setEmailSent={setEmailSent} /> :
                    <PostSending handleClose={handleClose} emailSent={emailSent} />}
            </Dialog>
        </Box>
    )
}
