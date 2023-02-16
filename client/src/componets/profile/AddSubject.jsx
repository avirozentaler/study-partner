import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserConnected from '../../context/UserConnected';
import { Box, Button, InputLabel, MenuItem, FormControl, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function AddSubject({ addSubject, setAddSubject }) {
    const { userConnected } = useContext(UserConnected);
    const [cat, setCat] = useState('');
    const [subCat, setSubCat] = useState("");
    // const [catValue, setCatValue] = useState('');
    // const [subValue, setSubValue] = useState('');
    const [subjectId, setSubjectId] = useState();
    useEffect(() => {
        (async () => {
            try {
                const categoryOBJ = await (await axios.get("http://localhost:3005/category/get-all")).data;
                console.log(categoryOBJ);
                if (!categoryOBJ) {
                    throw new Error("category could not be reched");
                }
                else {
                    setCat(categoryOBJ)
                }
            }
            catch (err) {
                console.log(err);
            }
        })()
    }, [])

    const handleChangeCat = (event) => {
        const {target:{value}} = event
        const sub = cat.filter((item)=>item.id == value.id);
        setSubCat(sub[0].subjects)
    };

    const handleChangeSub = (event) => {
        setSubjectId(event.target.value);
    }
    
    const handleSave = async () => {
        try {
            await axios.post('http://localhost:3005/user-subject/add', { userId: userConnected.id, subjectId });
        }
        catch (err) {
            console.log(err);
        }
        setAddSubject(addSubject => !addSubject);
    }

    return (
        <Box>
            {cat ? <Box sx={{ m: 2 }}>
                <Typography sx={{ m: 1 }} variant='h6' color="primary">Please select Subject to add</Typography>
                <FormControl sx={{ m: 1, minWidth:180 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        label="Category"
                        placeholder='Category'
                        onChange={handleChangeCat}
                        value={""}
                    >
                        {cat && cat.map((item, index) => {
                            return <MenuItem  key={index}  value={{ id: item.id, name: item.name }}>{item.name}</MenuItem>
                            
                        })}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth:180 }} >
                    <InputLabel>Sub Category</InputLabel>
                    <Select
                        disabled={!subCat? true :false}
                        label="Sub Category"
                        placeholder='Sub Category'
                        onChange={handleChangeSub}
                        value={''}
                    >
                        {subCat && subCat.map((item, index) => {
                            return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>

                <Button sx={{ m: 1, height: "55px" }} size="large" variant='contained' startIcon={<AddIcon fontSize='small' />} onClick={handleSave}>Add</Button>
                <Button sx={{ m: 1, height: "55px" }} size="large" variant='outlined' onClick={()=>{setAddSubject(addSubject => !addSubject)}}>Cancel</Button>
            </Box> : <Box>
            </Box>}
        </Box>
    );
}
