import React, { useState, useContext, useEffect } from 'react';
import { Box, TextField, Button, Divider, IconButton, InputLabel, MenuItem, Paper, Select, FormControl, InputBase, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AddSubject from './AddSubject';
import axios from 'axios';
import UserConnected from '../../context/UserConnected';

export default function ProfileSubjects() {

    const { userConnected, setUserConnected } = useContext(UserConnected);
    const [subjects, setSubjects] = useState(userConnected.subjects || null);
    const [edit, setEdit] = useState(false);
    const [addSubject, setAddSubject] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }
    const handleAddSubjectWindow = () => {
        setAddSubject(!addSubject);
    }

    const handleDelete = (id) => {
        const temp = subjects.filter(item => item.id !== id);
        setSubjects(temp);
    }

    const handleSave = () => {
        try {
            setUserConnected({
                id: userConnected.id,
                name: userConnected.name,
                email: userConnected.email,
                password: userConnected.password,
                country: userConnected.country,
                languages: userConnected.languages,
                phone_number: userConnected.phone_number,
                age: userConnected.age,
                about: userConnected.about,
                posts: userConnected.posts,
                subjects: subjects,
            })
            axios.post("http://localhost:3005/user/update", {email:userConnected.email, subjects}, { withCredentials: true });
            setEdit(!edit);
        }
        catch (err) {
            console.log(err);
            alert(err.message);
        }
    }

    const handleCancel = () => {
        setSubjects(userConnected.subjects || null);
        setEdit(false);
    }

    return (
        <Box>
            {subjects ?
                <Box>
                    <Box sx={{ m: 1, display: 'flex', flexWrap: 'wrap' }}>
                        {subjects.map((item, index) => {
                            return <Paper key={index} sx={{ m: 1, display: 'flex', flexDirection: 'row' }}>
                                <Typography align='center' sx={{ m: 1 }}>{item.name} </Typography>
                                {edit ? <DeleteIcon sx={{ m: 1 }} fontSize='small' color='primary' onClick={() => { handleDelete(item.id) }} /> : null}
                            </Paper>
                        })}
                    </Box>
                    <Divider />
                    {!addSubject ?
                        edit ?
                            <Box sx={{ m: 1 }}>
                                <Button sx={{ m: 1 }} variant='contained' onClick={handleSave} size="large" startIcon={<SaveIcon fontSize='small' />}>Save</Button>
                                <Button sx={{ m: 1 }} variant='outlined' onClick={handleCancel} size="large" >Cancel</Button>

                            </Box>
                            :
                            <Box sx={{ m: 1 }}>
                                <Button sx={{ m: 1 }} variant='outlined' onClick={handleEdit} size="large" startIcon={<EditIcon fontSize='small' />}>Edit</Button>
                                <Button sx={{ m: 1 }} variant='outlined' onClick={handleAddSubjectWindow} size="large" startIcon={<AddCircleIcon fontSize='small' />} >Add Subject</Button>
                            </Box>
                        :
                        <AddSubject addSubject={addSubject} setAddSubject={setAddSubject} />
                    }
                </Box >
                : <Box></Box>}
        </Box>
    )
}
