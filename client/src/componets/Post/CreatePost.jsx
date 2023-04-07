// import axios from "axios";
// import React, { useEffect, useState, useContext } from "react";
// import UserConnected from "../../context/UserConnected";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import CircularProgress from "@mui/material/CircularProgress";
// import UrlContext from "../../context/UrlContext.js";

// import {
//   Box,
//   Button,
//   TextField,
//   Autocomplete,
//   Grid,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Alert,
//   Typography,
// } from "@mui/material/";
// const dateTime = new Date();

// export default function CreatePost({ open, setOpen }) {
//   const { urlServer } = useContext(UrlContext);
//   const { userConnected } = useContext(UserConnected);

//   const [alertMessage, setAlertMessage] = useState('')
//   const [opanAlert, setOpanAlert] = useState(false);
//   const [alertMode, setAlertMode] = useState('')

//   const [valueCategory, setValueCategory] = useState("");
//   const [valueSubCategory, setValueSubCategory] = useState("");
//   const [date, setDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
//   const [fromTime, setFromTime] = useState(dateTime);
//   const [toTime, setToTime] = useState(dateTime);
//   const [inputCategory, setInputCategory] = useState("");
//   const [inputSubCategory, setInputSubCategory] = useState("");
//   const [option, setOption] = useState(null);
//   const [comment, setComment] = useState("");
//   const [alert, setAlert] = useState(false);
//   const [alertContent, setAlertContent] = useState("");
//   const [alertSeverity, setAlertSeverity] = useState("");

//   useEffect(() => {
//     (async () => {
//       try {
//         const result = await axios.get(`${urlServer}/category/get-all`);
//         console.log(result);
//         setOption(result.data);
//       } catch (err) {
//         console.log(err);
//       }
//     })();
//   }, [urlServer]);

//   const handleOpenAlert = (alertStatus, message) => {
//     setAlertMode(alertStatus);
//     setAlertMessage(message)
//     setOpanAlert(true);
//     setTimeout(() => {
//       setOpanAlert(false);
//     }, 3500)
//   }
//   const handleCloseAlert = () => {
//     setOpanAlert(false);
//   }

//   const handleOptionSub = () => {
//     const cat = option.find((item) => item.name === valueCategory);
//     return cat.subjects.map((subject) => subject.name);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handlePost = async () => {
//     try {
//       ///validation
//       if (
//         !valueCategory ||
//         !valueSubCategory ||
//         !date ||
//         !fromTime ||
//         !toTime
//       ) {
//         handleOpenAlert("error", "missing details")
//         // setAlertSeverity("error");
//         // setAlert(true);
//         // setAlertContent("missing details");
//         // setTimeout(() => {
//         //   setAlert(false);
//         // }, 5000);
//       } else {
//         const tempDate =
//           (date.$y && new Date(date.$y, date.$M, date.$D, 0, 0)) || date;
//         const tempFrom =
//           (fromTime.$H &&
//             new Date(
//               tempDate.getFullYear(),
//               tempDate.getMonth(),
//               tempDate.getDate(),
//               fromTime.$H,
//               fromTime.$m
//             )) ||
//           new Date(
//             tempDate.getFullYear(),
//             tempDate.getMonth(),
//             tempDate.getDate(),
//             fromTime.getHours(),
//             fromTime.getMinutes()
//           );
//         const tempTo =
//           (toTime.$H &&
//             new Date(
//               tempDate.getFullYear(),
//               tempDate.getMonth(),
//               tempDate.getDate(),
//               toTime.$H,
//               toTime.$m
//             )) ||
//           new Date(
//             tempDate.getFullYear(),
//             tempDate.getMonth(),
//             tempDate.getDate(),
//             toTime.getHours(),
//             toTime.getMinutes()
//           );

//         if (tempFrom.getTime() > tempTo.getTime()) {
//           // alert("the time to start should be early from the ending time");
//         }
//         if (tempFrom.getTime() < new Date().getTime()) {
//           // alert("the time to start shouldn't be early from now");
//         } else {
//           ////create obj to fetch
//           const postObj = {
//             userId: userConnected.id || null,
//             auther_name: userConnected.name || null,
//             post: comment || null,
//             category: inputCategory,
//             sub_category: valueSubCategory,
//             date: tempDate.getTime(),
//             time_from: tempFrom.getTime(),
//             time_to: tempTo.getTime(),
//           };
//           ///fetch to seever
//           const answer = await axios.post(urlServer + "/post/add", postObj);
//           console.log(answer);
//           setAlertSeverity("success");
//           setAlert(true);
//           setAlertContent("post published");
//           setTimeout(() => {
//             setAlert(false);
//           }, 3000);
//           setTimeout(() => {
//             window.location.reload();
//             // setOpen(false);
//           }, 2000);

//         }
//       }
//     } catch (err) {
//       // alert("post faild");
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       {option ? (
//         <Dialog open={open} onClose={handleClose}>
//           <Box m={1} >
//             <DialogTitle sx={{ position:'relative' }}>
//               {opanAlert ? <Alert onClose={handleCloseAlert} sx={{ position: 'absolute',width:'98%' }} severity={alertMode}>{alertMessage}</Alert> : <Typography variant="">{"Post"}</Typography>}
//             </DialogTitle>
//           </Box>
//           <DialogContent>
//             <Box margin={1}>
//               {alert ? (
//                 <Alert severity={alertSeverity}>{alertContent}</Alert>
//               ) : (
//                 <></>
//               )}
//             </Box>
//             <Grid container spacing={3}>
//               <Grid item xs={6}>
//                 <Autocomplete
//                   options={option.map((category) => category.name)}
//                   value={valueCategory}
//                   inputValue={inputCategory}
//                   onChange={(event, newValue) => {
//                     setValueCategory(newValue);
//                   }}
//                   onInputChange={(event, newInputValue) => {
//                     setInputCategory(newInputValue);
//                   }}
//                   renderInput={(params) => (
//                     <TextField {...params} label="Category" />
//                   )}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <Autocomplete
//                   options={valueCategory ? handleOptionSub() : [""]}
//                   value={valueSubCategory}
//                   inputValue={inputSubCategory}
//                   onChange={(event, newValue) => {
//                     setValueSubCategory(newValue);
//                   }}
//                   onInputChange={(event, newInputValue) => {
//                     setInputSubCategory(newInputValue);
//                   }}
//                   renderInput={(params) => (
//                     <TextField {...params} label="Sub Category" />
//                   )}
//                 />
//               </Grid>

//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <Grid item xs={6}>
//                   <TimePicker
//                     label="From Time"
//                     value={fromTime}
//                     onChange={(newValue) => {
//                       console.log(newValue);
//                       newValue && setFromTime(newValue);
//                     }}
//                     ampm={false}
//                     renderInput={(params) => <TextField {...params} />}
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <TimePicker
//                     label="To Time"
//                     value={toTime}
//                     onChange={(newValue) => {
//                       newValue && setToTime(newValue);
//                     }}
//                     ampm={false}
//                     renderInput={(params) => <TextField {...params} />}
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <DatePicker
//                     label="Date"
//                     inputFormat="DD/MM/YYYY"
//                     renderInput={(params) => <TextField {...params} />}
//                     value={date}
//                     onChange={(newValue) => {
//                       newValue && setDate(newValue);
//                       console.log(newValue);
//                     }}
//                   />
//                   {/* <DatePicker                  
//                     label="Date"
//                     inputFormat="DD/MM/YYYY"
//                     value={date || null}
//                     onChange={(newValue) => {
//                     newValue && setDate(newValue);
//                     }}
//                     renderInput={(params) => <TextField {...params} />}
//                   /> */}
//                 </Grid>
//               </LocalizationProvider>

//               <Grid item xs={12}>
//                 <TextField
//                   value={comment}
//                   fullWidth
//                   multiline
//                   rows={2}
//                   placeholder="Add a description (optional)"
//                   onChange={(event) => {
//                     setComment(event.target.value);
//                   }}
//                 ></TextField>
//               </Grid>
//             </Grid>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>
//             <Button onClick={handlePost}>Post</Button>
//           </DialogActions>
//         </Dialog>
//       ) : (
//         <Box>
//           <CircularProgress />
//         </Box>
//       )}
//     </div>
//   );
// }




import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserConnected from "../../context/UserConnected";
import UrlContext from "../../context/UrlContext.js";
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
  Grid,
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
  const [dateTo, setDateTo] = useState(null);
  const [timeFrom, setTimeFrom] = useState(null);
  const [timeTo, setTimeTo] = useState(null);
  const [option, setOption] = useState(null);
  const [comment, setComment] = useState("");
  const [days, setDays] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [week, setWeek] = useState(["Sun'", "Mon'", "Tue'", "Wen'", "Thu'", "Fri'", "Sat'"]);
  const [loading, setLoading] = useState(false);
  const [l, setL] = useState(true);


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
      //validation
      if (
        !valueSubCategory ||
        !dateFrom ||
        !dateTo ||
        !timeFrom ||
        !timeTo
      ) {
        handleOpenAlert("error", "missing details");
        return;
      }
      if (dateFrom.$d.getTime() < tempDate.$d.getTime()) {
        handleOpenAlert("error", "The date can not be earlier from today");
        return;
      }
      if (dateTo.$d.getTime() < dateFrom.$d.getTime()) {
        handleOpenAlert("error", "The end date can not be earlier from the start");
        return;
      }
      let dayPicked = false;
      days.forEach((item) => {
        if (item == !0) {
          dayPicked = true;
        }
      })
      if(!dayPicked){
        handleOpenAlert("error", "Please pick a day or more to study in");
        return;
      }
      // else {
      setLoading(true);
      const post = {
        userId: userConnected.id || null,
        auther_name: userConnected.name || null,
        post: comment || null,
        category: inputCategory,
        sub_category: valueSubCategory,
        date_from: dateFrom.$d.getTime(),
        date_to: dateTo.$d.getTime(),
        time_from: timeFrom.$d.getTime(),
        time_to: timeTo.$d.getTime(),
        days: days || null
      }
      console.log(post);
      const answer = await axios.post(urlServer + "/post/add", post);
      setLoading(false);
      handleOpenAlert("success", "post published");
      setTimeout(() => {
        window.location.reload();
        // setOpen(false);
      }, 2000);
      // }
    } catch (err) {
      handleOpenAlert("error", "post faild");
      console.log(err);
    }
  };

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
                    }}
                  />
                </Box>
                <Box sx={{ width: '47%', m: 1 }}>
                  <DatePicker
                    label="To day"
                    disablePast
                    value={tempDate}
                    inputFormat="DD/MM/YYYY"
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(newValue) => {
                      newValue && setDateTo(newValue);
                    }}
                  />
                </Box>
                <Box sx={{ width: '47%', m: 1 }}>
                  <TimePicker
                    label="From"
                    value={tempDate}
                    onChange={(newValue) => {
                      newValue && setTimeFrom(newValue);
                    }}
                    ampm={false}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
                <Box sx={{ width: '47%', m: 1 }}>
                  <TimePicker
                    label="To"
                    value={tempDate}
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
                  return <Button key={index}
                    // variant={days[index]!==0?"outlined":"contained"} 
                    variant="outlined"
                    size="small"
                    sx={{ m: 0.4, width: '13%', border: days[index] !== 0 ? "solid" : "" }}
                    onClick={() => {
                      let temp = days;
                      temp[index] = 0 + 1 - temp[index]
                      setL(!l)
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