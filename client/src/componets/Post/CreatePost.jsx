import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserConnected from "../../context/UserConnected";
import UrlContext from "../../context/UrlContext.js";
import { daysDistance, weekIsEmpty, getOptionalsDays } from '../../utilities/validetion/validateDate';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from 'dayjs';
import {
  Box,
  Button,
  TextField,
  Autocomplete,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
  Typography,
} from "@mui/material/";

const tempDate = dayjs(new Date().setHours(0, 0, 0, 0));

export default function CreatePost({ open, setOpen }) {
  const { urlServer } = useContext(UrlContext);
  const { userConnected } = useContext(UserConnected);

  const [alertMessage, setAlertMessage] = useState('')
  const [opanAlert, setOpanAlert] = useState(false);
  const [alertMode, setAlertMode] = useState('')

  const [valueCategory, setValueCategory] = useState("");
  const [valueSubCategory, setValueSubCategory] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputSubCategory, setInputSubCategory] = useState("");

  const [dateFrom, setDateFrom] = useState(tempDate);
  const [dateTo, setDateTo] = useState(tempDate);
  const [timeFrom, setTimeFrom] = useState(tempDate);
  const [timeTo, setTimeTo] = useState(tempDate);
  const [option, setOption] = useState(null);
  const [comment, setComment] = useState("");
  const [days, setDays] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [week] = useState(["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]);
  const [loading, setLoading] = useState(false);
  const [rendering, setRendering] = useState(true);


  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${urlServer}/category/get-all`);
        setOption(result.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [urlServer]);

  const handleOpenAlert = (alertStatus, message) => {
    setAlertMode(alertStatus);
    setAlertMessage(message)
    setOpanAlert(true);
    setTimeout(() => {
      setOpanAlert(false);
    }, 3500)
  }

  const handleOptionSub = () => {
    const cat = option.find((item) => item.name === valueCategory);
    return cat.subjects.map((subject) => subject.name);
  };

  const handlePost = async () => {
    try {
      if (!valueSubCategory) {
        handleOpenAlert("error", "Please the subject you want to study");
        return;
      }
      const dFrom = dateFrom.$d.getTime();
      const dTo = dateTo.$d.getTime();
      const tFrom = (timeFrom.$H)*100 +timeFrom.$m;
      const tTo = (timeTo.$H)*100 +timeTo.$m;
      // //validation   
      if (dTo < dFrom) {
        handleOpenAlert("error", "The end date can not be earlier from the start");
        return;
      }
      if (tFrom > tTo) {
        handleOpenAlert("error", "the time not valid.");
        return;
      }
      if (tFrom === tTo) {
        handleOpenAlert("error", "please pick correct time");
        return;
      }
      if (daysDistance(dFrom, dTo) > 7) {
        handleOpenAlert("error", "You can have maximum a week range of date"); return;
      }
      if (weekIsEmpty(days)) {
        handleOpenAlert("error", "Please pick a day or more to study in"); return;
      }
      setLoading(true);
      const post = {
        userId: userConnected.id || null,
        auther_name: userConnected.name || null,
        post: comment || null,
        category: inputCategory,
        sub_category: inputSubCategory,
        date_from: dFrom,
        date_to: dTo,
        time_from: tFrom,
        time_to: tTo,
        days: days || null
      }
      await axios.post(urlServer + "/post/add", post);
      setLoading(false);
      handleOpenAlert("success", "post published");
      setTimeout(() => {
        window.location.reload();
        // setOpen(false);
      }, 4000);

    } catch (err) {
      handleOpenAlert("error", "post faild");
      console.log(err);
    }
  };

  const handleAbleDays = (df, dt) => {
    const distance = daysDistance(df, dt);
    if (distance < 8){
      setDays(getOptionalsDays(df.$W, distance));
    }      
  }

  return (
    <div>
      {option ? (
        <Dialog open={open} onClose={() => setOpen(false)}>
          {loading && <Box sx={{ position: 'relative' }}>
            <Box sx={{ backgroundColor: 'gray', display: 'flex', position: 'absolute', width: '100%', height: '536px', opacity: '0.5', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          </Box>}
          <Box m={1} >
            <DialogTitle >
              {opanAlert ? <Box mb={4} sx={{ position: 'relative', width: '100%' }}><Alert onClose={() => setOpanAlert(false)} sx={{ position: 'absolute', width: '100%' }} severity={alertMode}>{alertMessage}</Alert></Box> : <Typography variant="body4">{"Post"}</Typography>}
            </DialogTitle>

          </Box>
          <DialogContent>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Autocomplete
                sx={{ width: '47%', m: 1 }}
                options={option.map((category) => category.name)}
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
              <Autocomplete
                sx={{ width: '47%', m: 1 }}
                options={valueCategory ? handleOptionSub() : [""]}
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ width: '47%', m: 1 }}>
                  <DatePicker
                    label="From day"
                    disablePast
                    value={dateFrom}
                    inputFormat="DD/MM/YYYY"
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(newValue) => {
                      newValue && setDateFrom(newValue);
                      handleAbleDays(newValue, dateTo)
                    }}
                  />
                </Box>
                <Box sx={{ width: '47%', m: 1 }}>
                  <DatePicker
                    label="To day"
                    disablePast
                    value={dateTo}
                    inputFormat="DD/MM/YYYY"
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(newValue) => {
                      newValue && setDateTo(newValue);
                      handleAbleDays(dateFrom, newValue)
                    }}
                  />
                </Box>
                <Box sx={{ width: '47%', m: 1 }}>
                  <TimePicker
                    label="From Time"
                    value={timeFrom}
                    onChange={(newValue) => {
                      newValue && setTimeFrom(newValue);
                      console.log(newValue);
                    }}
                    ampm={false}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
                <Box sx={{ width: '47%', m: 1 }}>
                  <TimePicker
                    label="To time"
                    value={timeTo}
                    onChange={(newValue) => {
                      newValue && setTimeTo(newValue);
                    }}
                    ampm={false}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
              </LocalizationProvider>
              <Box sx={{ width: '100%', m: 1 }}>
                {week?.map((item, index) => {
                  return <Button
                    disabled={days[index] < 0}
                    key={index}
                    variant={days[index] !== 0 ? "contained" : "outlined"}
                    size="small"
                    sx={{ m: 0.4, width: '13%', }}
                    onClick={() => {
                      let temp = days;
                      temp[index] = 0 + 1 - temp[index]
                      setRendering(!rendering) //dont delete. it needed to render component
                      setDays(temp);
                    }}
                  >
                    {item}</Button>
                })}
              </Box>
              <Box sx={{ width: '100%', m: 1 }}>
                <TextField
                  value={comment}
                  fullWidth
                  multiline
                  rows={2}
                  placeholder="Add a description (optional)"
                  onChange={(event) => {
                    setComment(event.target.value);
                  }}
                ></TextField>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Box sx={{ marginRight: '2%' }}>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handlePost}>Post</Button>
            </Box>
          </DialogActions>
        </Dialog>
      ) : (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}