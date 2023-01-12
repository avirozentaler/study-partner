import axios from "axios";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
    Button,
    TextField,
    Autocomplete,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material/";

const dateTime = new Date();
const timeString = dateTime.toString();

export default function Post({ open, setOpen }) {
    const [valueCategory, setValueCategory] = useState("");
    const [valueSubCategory, setValueSubCategory] = useState("");
    const [date, setDate] = useState(timeString);
    const [fromTime, setFromTime] = useState(timeString);
    const [toTime, setToTime] = useState(timeString);
    const [inputCategory, setInputCategory] = useState("");
    const [inputSubCategory, setInputSubCategory] = useState("");

    const option = [
        {
            id: 1,
            name: "math",
            user_connected: null,
            subjects: [
                {
                    id: 4,
                    name: "Linear Algebra",
                    category_id: 1,
                    user_connected: null,
                },
                {
                    id: 5,
                    name: "Geometry",
                    category_id: 1,
                    user_connected: null,
                },
                {
                    id: 6,
                    name: "Statistics",
                    category_id: 1,
                    user_connected: null,
                },
            ],
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
                    user_connected: null,
                },
                {
                    id: 2,
                    name: "Hebrew",
                    category_id: 2,
                    user_connected: null,
                },
                {
                    id: 3,
                    name: "Arabic",
                    category_id: 2,
                    user_connected: null,
                },
            ],
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
                    user_connected: null,
                },
                {
                    id: 8,
                    name: "Java",
                    category_id: 3,
                    user_connected: null,
                },
                {
                    id: 9,
                    name: "Python",
                    category_id: 3,
                    user_connected: null,
                },
            ],
        },
        {
            id: 4,
            name: "philosophy",
            user_connected: null,
            subjects: [],
        },
    ];

    const handleOptionSub = () => {
        const cat = option.find((item) => item.name === valueCategory);
        return cat.subjects.map((subject) => subject.name);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handlePost = async () => {
        //בדיקת שדות
        if (!valueCategory || !valueSubCategory || !date || !fromTime || !toTime) {
            alert("missing details");
        }
        // else if (valueCategory != handleOptionSub()){
        //   alert('Invalid subcategory')
        // }
        // else if (date < timeString){
        //   alert("Invalid date");
        // }
        // else if(fromTime<toTime){
        //   alert('Invalid time range')
        // }
        else {
            //קריאת שרת

            try {
                const answer = await axios.post("http://localhost:3005/post/add", {
          /*userId, auther_name,  post,*/ category: valueCategory,
                    sub_category: valueSubCategory,
                    date: date,
                    time_from: fromTime,
                    time_to: toTime,
                });
                console.log(answer);
                setOpen(false);
            } catch (err) {
                alert("post faild");
                console.log(err);
            }
        }
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Post</DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Autocomplete
                                options={option.map((category) => category.name)}
                                value={valueCategory}
                                inputValue={inputCategory}
                                onChange={(event, newValue) => {
                                    setValueCategory(newValue);
                                }}
                                onInputChange={(event, newInputValue) => {
                                    setInputCategory(newInputValue);
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Category" />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                options={
                                    valueCategory ? handleOptionSub() : []
                                }
                                value={valueSubCategory}
                                inputValue={inputSubCategory}
                                onChange={(event, newValue) => {
                                    setValueSubCategory(newValue);
                                }}
                                onInputChange={(event, newInputValue) => {
                                    setInputSubCategory(newInputValue);
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Sub Category" />
                                )}
                            />
                        </Grid>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid item xs={6}>
                                <TimePicker
                                    label="From Time"
                                    value={fromTime}
                                    onChange={(newValue) => {
                                        setFromTime(newValue);
                                    }}
                                    ampm={false}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TimePicker
                                    label="To Time"
                                    value={toTime}
                                    onChange={(newValue) => {
                                        setToTime(newValue);
                                    }}
                                    ampm={false}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <DatePicker
                                    label="Date"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                        </LocalizationProvider>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handlePost}>Post</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
