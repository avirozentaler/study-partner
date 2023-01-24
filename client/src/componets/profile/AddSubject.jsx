import React, { useState, useContext } from 'react';
import { Box, Button, InputLabel, MenuItem, Select,FormControl } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import axios from 'axios';
import UserConnected from '../../context/UserConnected';

export default function AddSubject({ addSubject, setAddSubject }) {

    const [category, setCategory] = useState([{
        "id": 1,
        "name": "math",
        "user_connected": null,
        "subjects": [
            {
                "id": 4,
                "name": "Linear Algebra",
                "category_id": 1,
                "user_connected": null
            },
            {
                "id": 5,
                "name": "Geometry",
                "category_id": 1,
                "user_connected": null
            },
            {
                "id": 6,
                "name": "Statistics",
                "category_id": 1,
                "user_connected": null
            }
        ]
    },
    {
        "id": 2,
        "name": "languages",
        "user_connected": null,
        "subjects": [
            {
                "id": 1,
                "name": "English",
                "category_id": 2,
                "user_connected": null
            },
            {
                "id": 2,
                "name": "Hebrew",
                "category_id": 2,
                "user_connected": null
            },
            {
                "id": 3,
                "name": "Arabic",
                "category_id": 2,
                "user_connected": null
            }
        ]
    },
    {
        "id": 3,
        "name": "software",
        "user_connected": null,
        "subjects": [
            {
                "id": 7,
                "name": "JavaScript",
                "category_id": 3,
                "user_connected": null
            },
            {
                "id": 8,
                "name": "Java",
                "category_id": 3,
                "user_connected": null
            },
            {
                "id": 9,
                "name": "Python",
                "category_id": 3,
                "user_connected": null
            }
        ]
    },
    {
        "id": 4,
        "name": "philosophy",
        "user_connected": null,
        "subjects": []
    }]);

    const [subCategory, setSubCategory] = useState([]);
    const [newSub, setNewSub] = useState([]);

    const handleSetSubCategory = (id) => {
        setSubCategory(["lalala"])  //category.filter((item) => item.id === id).subjects
    }
    const handleAddSubject = async (id) => {
       
    }
    const handleChangeCat = (event,cat) => {
     
    }
    const handleChangeSub = () => {
        ////
    }
    const handleSave = async() => {
        try {
            await axios.post('http://localhost:3005/user-subject/add', { userId: UserConnected.id, subjectId: newSub.id });
        }
        catch (err) {
            console.log(err);
        }
        setAddSubject(addSubject => !addSubject);
    }
    return (

        <Box sx={{ m: 1 }} >
            <FormControl sx={{ m: 1, minWidth: '30%' }} >
                <InputLabel size='small'>Category</InputLabel>
                <Select
                    autoWidth
                    value={category}
                    label="Age"
                    onChange={handleChangeCat}
                >
                    {category && category.map((item, index) => {
                        return <MenuItem key={index} onClick={() => { handleSetSubCategory(item.id) }} >{item.name} </MenuItem> 
                    })}


                </Select>
            </FormControl >
            <FormControl sx={{ m: 1, minWidth: '30%' }}>
                <InputLabel size='small'> Sub Category</InputLabel>
                <Select
                    value={category}
                    label="Sub category"
                    onChange={handleChangeSub}
                >
                    {subCategory && subCategory.map((item, index) => {
                        return <MenuItem key={index} onClick={handleAddSubject}>{item.name}</MenuItem>
                    })}


                </Select>
            </FormControl>
            <Button sx={{ m: 1 }} size="large" variant='contained' startIcon={<AddIcon fontSize='small' />} onClick={handleAddSubject}>Add</Button>
            <Button sx={{ m: 1 }} size="large" variant='outlined' onClick={() => setAddSubject(addSubject => !addSubject)}>Cancel</Button>

        </Box>
    )
}
