import React, { useContext } from 'react'
import UserConnected from '../../../context/UserConnected';
import Auth from '../../authentication/auth/Auth';
import { Box, Typography, IconButton, Button }
    from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useColorScheme, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default function BodyApp({ openLogIn, handleCloseLogIn }) {
    const { userConnected, setUserConnected } = useContext(UserConnected);

    const aaa = () => {
        setUserConnected({ name: 'amit' })
    }
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));
    function BootstrapDialogTitle(props) {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    }
    BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
    };

    return (
        <Box>
            <></>
            <BootstrapDialog
                onClose={handleCloseLogIn}
                aria-labelledby="customized-dialog-title"
                open={openLogIn}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseLogIn}>
               
                </BootstrapDialogTitle>
                <DialogContent >
                    <Auth handleCloseLogIn={handleCloseLogIn}/>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </BootstrapDialog>
            {userConnected ?
                <Typography variant='h3'>user  Connected</Typography>
                :
                <Typography variant='h3'>user not Connected</Typography>
            }
            <Button onClick={aaa}>test connected</Button>
        </Box>
    )
}
