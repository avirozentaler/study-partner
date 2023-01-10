import React, { useState, useEffect, useContext } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import {
    Box,
    Typography,
    IconButton,
    TextField,
    Autocomplete,
    Button,
} from "@mui/material";
import axios from 'axios';
import UserConnected from "../../context/UserConnected";









export default function ProfileDetails() {


    const { userConnected } = useContext(UserConnected);

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [country, setCountry] = useState()
    const [language, setLanguage] = useState()
    const [age, setAge] = useState()
    const [phone_number, setPhone_number] = useState()

    const [edit, setEdit] = useState(true);


    const handleEdit = async () => {
        if (!edit) {
            try {
                const update = await axios.post('http://localhost:3005/user/update');
            } catch (err) {
                console.log(err);
            }
        }
        setEdit(edit => !edit)
    }

    return (
        <div>
            <Box component='form' autoComplete='on'>
                <TextField disabled={edit} label="Name" type='text' onChange={(event) => { setName(event.target.value) }} defaultValue={userConnected.name} required />
                <TextField disabled={edit} label="Email" type='email' onChange={(event) => { setEmail(event.target.value) }} defaultValue={userConnected.email} required />
                <TextField disabled={edit} label="Age" type='number' onChange={(event) => { setAge(event.target.value) }} defaultValue={userConnected.age} />
                <TextField disabled={edit} label="Country" type='text' onChange={(event) => { setCountry(event.target.value) }} defaultValue={userConnected.country} />
                <TextField disabled={edit} label="Language" type='text' onChange={(event) => { setLanguage(event.target.value) }} defaultValue={userConnected.languages} />
                <TextField disabled={edit} label="Phone Number" type="tel" onChange={(event) => { setPhone_number(event.target.value) }} defaultValue={userConnected.phone_number} />
            </Box>

            <Button variant={edit ? "outlined" : "contained"} onClick={handleEdit} >
                {edit ? <EditIcon /> : null}
                {edit ? "Edit" : "Save"}
            </Button>

        </div>
    )
}
