import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import UserConnected from "../../context/UserConnected";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import CircularProgress from "@mui/material/CircularProgress";
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
  Alert,
} from "@mui/material/";
const dateTime = new Date();

export default function CreatePost({ open, setOpen }) {
  const { urlServer } = useContext(UrlContext);
  const { userConnected } = useContext(UserConnected);
  const [valueCategory, setValueCategory] = useState("");
  const [valueSubCategory, setValueSubCategory] = useState("");
  const [date, setDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
  const [fromTime, setFromTime] = useState(dateTime);
  const [toTime, setToTime] = useState(dateTime);
  const [inputCategory, setInputCategory] = useState("");
  const [inputSubCategory, setInputSubCategory] = useState("");
  const [option, setOption] = useState(null);
  const [comment, setComment] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(urlServer + "/category/get-all");
        console.log(result);
        setOption(result.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleOptionSub = () => {
    const cat = option.find((item) => item.name === valueCategory);
    return cat.subjects.map((subject) => subject.name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = async () => {
    try {
      ///validation
      if (
        !valueCategory ||
        !valueSubCategory ||
        !date ||
        !fromTime ||
        !toTime
      ) {
        setAlertSeverity("error");
        setAlert(true);
        setAlertContent("missing details");
        setTimeout(() => {
          setAlert(false);
        }, 5000);
      } else {
        const tempDate =
          (date.$y && new Date(date.$y, date.$M, date.$D, 0, 0)) || date;
        const tempFrom =
          (fromTime.$H &&
            new Date(
              tempDate.getFullYear(),
              tempDate.getMonth(),
              tempDate.getDate(),
              fromTime.$H,
              fromTime.$m
            )) ||
          new Date(
            tempDate.getFullYear(),
            tempDate.getMonth(),
            tempDate.getDate(),
            fromTime.getHours(),
            fromTime.getMinutes()
          );
        const tempTo =
          (toTime.$H &&
            new Date(
              tempDate.getFullYear(),
              tempDate.getMonth(),
              tempDate.getDate(),
              toTime.$H,
              toTime.$m
            )) ||
          new Date(
            tempDate.getFullYear(),
            tempDate.getMonth(),
            tempDate.getDate(),
            toTime.getHours(),
            toTime.getMinutes()
          );

        if (tempFrom.getTime() > tempTo.getTime()) {
          // alert("the time to start should be early from the ending time");
        }
        if (tempFrom.getTime() < new Date().getTime()) {
          // alert("the time to start shouldn't be early from now");
        } else {
          ////create obj to fetch
          const postObj = {
            userId: userConnected.id || null,
            auther_name: userConnected.name || null,
            post: comment || null,
            category: inputCategory,
            sub_category: valueSubCategory,
            date: tempDate.getTime(),
            time_from: tempFrom.getTime(),
            time_to: tempTo.getTime(),
          };
          ///fetch to seever
          const answer = await axios.post(urlServer + "/post/add", postObj);
          console.log(answer);
          setAlertSeverity("success");
          setAlert(true);
          setAlertContent("post published");
          setTimeout(() => {
            setAlert(false);
          }, 3000);
          setTimeout(() => {
              window.location.reload();
            // setOpen(false);
          }, 2000);
          
        }
      }
    } catch (err) {
      // alert("post faild");
      console.log(err);
    }
  };

  return (
    <div>
      {option ? (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Post</DialogTitle>
          <DialogContent>
            <Box margin={1}>
              {alert ? (
                <Alert severity={alertSeverity}>{alertContent}</Alert>
              ) : (
                <></>
              )}
            </Box>
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
                  options={valueCategory ? handleOptionSub() : []}
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
                      console.log(newValue);
                      newValue && setFromTime(newValue);
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
                      newValue && setToTime(newValue);
                    }}
                    ampm={false}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    label="Date"
                    value={date || null}
                    onChange={(newValue) => {
                      newValue && setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </LocalizationProvider>

              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handlePost}>Post</Button>
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
