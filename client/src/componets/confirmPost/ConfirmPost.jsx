import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import UserConnected from "../../context/UserConnected";
import UrlContext from "../../context/UrlContext.js";

import {
    Box,
    Button,
    TextField,
    Autocomplete,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    Paper,
} from "@mui/material/";



export default function ConfirmPost() {
    const { postid, the_applicant_id } = useParams();
    console.log('post >>', postid);
    console.log('app>>', the_applicant_id);
    const { urlServer } = useContext(UrlContext);
    console.log(urlServer);
    const [applicant, setApplicant] = useState();

    useEffect(() => {
        (async () => {
            try {
                if (the_applicant_id !== undefined && the_applicant_id) {
                    const temp = await axios.post(`${urlServer}/user/get-one`, { id: the_applicant_id }, { withCredentials: true });
                    console.log(temp);
                    setApplicant(temp.data);
                }
            }
            catch (err) {
                console.log(err);
            }

        })()
    }, [])

    const confirm = async () => {
        await axios.post(urlServer + '/activity/confirm-post', {applicantId:the_applicant_id,postId:postid },{withCredentials:true});
    }

    const deny = async () => {
        await axios.post(urlServer + '/activity/deny-post', {applicantId:the_applicant_id,postId:postid },{withCredentials:true});
    }

    console.log('the_applicant_id >> ', the_applicant_id);
    console.log('postid >> ', postid);

    return (
        <Box sx={{ m: 4, display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ width: '95%' }}>
                {applicant && <Box m={2}>
                    <Typography variant='h4'>{applicant.name} sent request to your post.</Typography>
                </Box>}
                <Box></Box>
                <Box></Box>
                <Box sx={{ m: 2 }}>
                    <Button sx={{ borderRadius: '30px', m: 1 }} size="large" color="success" variant="contained" onClick={confirm}>  Confirm</Button>
                    <Button sx={{ borderRadius: '30px', m: 1 }} size="large" color="error" variant="contained" onClick={deny}>Deny</Button>
                </Box>
            </Paper>
        </Box>
    )
}
