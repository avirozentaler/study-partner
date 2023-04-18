import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UrlContext from "../../context/UrlContext";
// import Posts from "../Post/Posts";
import { Box, FormControl, Select, InputLabel, MenuItem, Button, TextField, Autocomplete, ListSubheader } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
const tempDate = dayjs(new Date().setHours(0, 0, 0, 0));

export default function Filters({ setPosts, handleRendering }) {

    const { urlServer } = useContext(UrlContext)
    // const [subjects] = useState(['English', 'Hebrew', 'Arabic', 'Linear', 'Geometry', 'Statistics', 'JavaScript', 'Java', 'Python']);
    const [categoriesOptions, setCategoriesOptions] = useState(null)
    const [subjectName, setSubjectName] = useState('');
    const [date, setDate] = useState(null);
    const [time,setTime] = useState(null)
    const [val, setval] = useState("");
    
    const [subject, setSubject] = useState('');



    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get(`${urlServer}/category/get-all`);
                const newArr = [];
                result.data.forEach(cat => {
                    cat.subjects.forEach(subCat => {
                        newArr.push({ id: subCat.id, name: subCat.name, category: cat.name })
                    });
                });
                setCategoriesOptions(newArr);

            } catch (err) {
                console.log(err);
            }
        })();
    }, [urlServer]);



    const filter = async () => {
        try {
            const timeTemp = (time.$H)*100 +time.$m;
            // console.log(subjectName);
            // const postsList = await axios.post(`${urlServer}/post/filter`, { subject_name: subjectName });
            // const postsList = await axios.post(`${urlServer}/post/filter`, { date: stempDay });
            const postsList = await axios.post(`${urlServer}/post/filter`, { time:timeTemp });
            console.log(postsList);
            console.log(postsList.data);
            if (!postsList) {
                throw new Error("posts not dound")
            }
            else {
                if (postsList.data !== [] && postsList.data !== null) {
                    setPosts(postsList.data)
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Autocomplete
                sx={{ width: '47%', m: 1 }}
                options={categoriesOptions ? categoriesOptions.sort((a, b) => a.category.localeCompare(b.category)) : []}
                getOptionLabel={(option) => option.name}
                groupBy={(option) => option.category}
                onChange={(event, newValue) => {
                    console.log(newValue);
                    setSubjectName(newValue.name);
                }}
                onInputChange={(event, newInputValue) => {
                    setval(newInputValue);
                }}
                renderInput={(params) => (
                    <TextField {...params} label="Category" />
                )}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ width: '47%', m: 1 }}>
                    <DatePicker
                        label="Date"
                        disablePast
                        // value={null}
                        value={date}
                        inputFormat="DD/MM/YYYY"
                        renderInput={(params) => <TextField {...params} />}
                        onChange={(newValue) => {
                            newValue && setDate(newValue);
                            console.log(newValue);
                            // handleAbleDays(newValue, dateTo)
                        }}
                    />
                </Box>

                <Box sx={{ width: '47%', m: 1 }}>
                  <TimePicker
                    label="Time"
                    value={time}
                    onChange={(newValue) => {
                      newValue && setTime(newValue);
                    }}
                    ampm={false}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
            </LocalizationProvider>

            <Button variant="contained" onClick={filter}>Search</Button>
            <Button onClick={handleRendering}>Clear</Button>
        </Box>
    )
}


