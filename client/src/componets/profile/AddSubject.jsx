import React, { useState, useContext } from 'react';
import axios from 'axios';
import UserConnected from '../../context/UserConnected';
import { Box, Button, InputLabel, MenuItem, FormControl, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Select from '@mui/material/Select';

const temp = [
    {
        id: 1,
        name: "math",
        user_connected: null,
        subjects: [
            {
                id: 4,
                name: "Linear Algebra",
                category_id: 1,
                user_connected: null
            },
            {
                id: 5,
                name: "Geometry",
                category_id: 1,
                user_connected: null
            },
            {
                id: 6,
                name: "Statistics",
                category_id: 1,
                user_connected: null
            }
        ]
    },
    {
        id: 2,
        name: "languages",
        user_connected: null,
        subjects: [
            {
                id: 1,
                name: "English",
                category_id: 2,
                user_connected: null
            },
            {
                id: 2,
                name: "Hebrew",
                category_id: 2,
                user_connected: null
            },
            {
                id: 3,
                name: "Arabic",
                category_id: 2,
                user_connected: null
            }
        ]
    },
    {
        id: 3,
        name: "software",
        user_connected: null,
        subjects: [
            {
                id: 7,
                name: "JavaScript",
                category_id: 3,
                user_connected: null
            },
            {
                id: 8,
                name: "Java",
                category_id: 3,
                user_connected: null
            },
            {
                id: 9,
                name: "Python",
                category_id: 3,
                user_connected: null
            }
        ]
    },
    {
        id: 4,
        name: "philosophy",
        user_connected: null,
        subjects: []
    }];
 
// const dd =await axios.get("http://localhost:3005/category/get-all").data;
export default function AddSubject({ addSubject, setAddSubject }) {

  const { userConnected } = useContext(UserConnected);
  const [subjectId,setSubjectId] = useState();  
  const [cat,setCat] = useState(temp);
  const [subCat,setSubCat] = useState();

  const handleChangeCat = (event) => {
    setSubCat(cat[event.target.value]);
  };

  const handleChangeSub = (event) => {
    alert(event.target.value)
    setSubjectId(event.target.value);
  };
    
    const handleCancel = async () => {
setCat(temp);
setAddSubject(addSubject=>!addSubject);
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
       
    <Box sx={{ m: 2 }}>
        <Typography sx={{ m: 1 }} variant='h5' color="primary">Please select Subject to add</Typography>
      <FormControl sx={{ m: 1, minWidth: "30%" }}>
        <InputLabel>Category</InputLabel>
        <Select
          placeholder='Category'
          label="Category"
          onChange={handleChangeCat}
          value={''}
        >
            {cat && cat.map((item,index)=>{
                return  <MenuItem key={index} value={index}>{item.name}</MenuItem>
         })}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: "30%" }} >
        <InputLabel>Sub Category</InputLabel>
        <Select
          disabled={!subCat}
          label="Sub Category"
          placeholder='Sub Category'
          onChange={handleChangeSub}
          value={''}
          
        >
             {subCat && subCat.subjects.map((item,index)=>{
                return  <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
         })}
        </Select>
      </FormControl>

      <Button sx={{ m: 1,height:"55px" }} size="large" variant='contained' startIcon={<AddIcon fontSize='small' />} onClick={handleSave}>Add</Button>
      <Button sx={{ m: 1 ,height:"55px"}} size="large" variant='outlined' onClick={handleCancel}>Cancel</Button>
    </Box>
  );
}





















       // <Box sx={{ m: 1 }} >
        //     <FormControl sx={{ m: 1, minWidth: '30%' }} >
        //         <InputLabel  size='small'>Category</InputLabel>
        //         <Select
        //             autoWidth
        //             value={category}
        //             placeholder="Category"
        //             label="Category"
        //             onChange={handleChangeCat}
        //         >
        //              <MenuItem value="">
        //             </MenuItem>
        //             {category && category.map((item, index) => {
        //                 return <MenuItem key={index} onClick={() => { handleSetSubCategory(item.id) }} >{item.name} </MenuItem>
        //             })}


        //         </Select>
        //     </FormControl >
        //     {/* <FormControl sx={{ m: 1, minWidth: '30%' }}>
        //         <InputLabel size='small'> Sub Category</InputLabel>
        //         <Select
        //             value={category}
        //             label="Sub category"
        //             onChange={handleChangeSub}
        //         >
                   
        //             {subCategory && subCategory.map((item, index) => {
        //                 return <MenuItem key={index} onClick={handleAddSubject}>{item.name}</MenuItem>
        //             })}


        //         </Select>
        //     </FormControl> */}
        //     <Button sx={{ m: 1 }} size="large" variant='contained' startIcon={<AddIcon fontSize='small' />} onClick={handleAddSubject}>Add</Button>
        //     <Button sx={{ m: 1 }} size="large" variant='outlined' onClick={() => setAddSubject(addSubject => !addSubject)}>Cancel</Button>

        // </Box>
