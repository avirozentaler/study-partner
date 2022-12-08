import {useState} from 'react';
import dayjs from 'dayjs';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
export default function Post() {
//   alert("post");
const [value, setValue] = useState(dayjs('2022-04-07'));

  return (
    <>
    <FormControl sx={{ m: 1, minWidth: 150 }}>
    <InputLabel id="Category">Category</InputLabel>
      <Select
        label="Category"
        // onChange={}
      >
        <MenuItem >English</MenuItem>
        <MenuItem >Math </MenuItem>
        <MenuItem >Program engineer</MenuItem>
      </Select>
    </FormControl>
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>

 
 



        </>
  );
}
