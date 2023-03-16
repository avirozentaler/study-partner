import React, { useState ,useContext} from "react";
import axios from "axios";
import UrlContext from "../../context/UrlContext.js";
import {
  nameValid,
  emailValid,
  passwordValid,
  countryValid,
  languagesValid,
  phone_numberValid,
  age_Valid,
} from "../../utilities/validetion/validetion.js";
import { Box, Typography, TextField, Button, Grid, Alert } from "@mui/material";


export default function Register() {
  const {urlServer} = useContext(UrlContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [languages, setLanguages] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [age, setAge] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const submit = async () => {
    if (!nameValid(name)) {
      /////////////////////////
      alert("name not valid");
    } else if (!emailValid(email)) {
      alert("email not valid");
    } else if (!passwordValid(password)) {
      alert("password not valid");
    } else if (password !== confirmPassword) {
      alert("confirmPassword not match");
    } else if (country && !countryValid(country)) {
      alert("country not valid");
    } else if (!languagesValid(languages)) {
      alert("languages not valid");
    } else if (phone_number && !phone_numberValid(phone_number)) {
      alert("phone number not valid");
    }
    // else if (age_range && !age_rangeValid(age_range)) {
    //     alert('age range not valid')
    // }
    else {
      try {
        const answer = await axios.post(urlServer+"/user/register", {
          name,
          email,
          password,
          confirmPassword,
          country,
          languages,
          phone_number,
          age,
        });
        setAlertSeverity("success");
          setAlert(true);
          setAlertContent("You have successfully registered ");
          setTimeout(() => {
            setAlert(false);
          }, 3000);
        console.log(answer);
      } catch (err) {
        setAlertSeverity("error");
      setAlert(true);
      setAlertContent("Something went wrong. Please try again later");
      setTimeout(() => {
        setAlert(false);
      }, 3000);
        console.log(err);
        
      }
    }
  };
  return (
    <div className="Register auth">
      <Box margin={1}>
              {alert ? (
                <Alert severity={alertSeverity}>{alertContent}</Alert>
              ) : (
                <></>
              )}
            </Box>
      <div>
          <Typography variant="h5" align="center" margin={2}>
            Sign up
          </Typography>
        </div>
      <Box xs={{width: '100%'} } align='center'
    
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: -5 }}>
        <Grid item xs={6}>
        <TextField
          required
          id="name"
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          autoFocus
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          required
          id="email"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          required
          id="password"
          name="password"
          type="password"
          placeholder="password"
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          required
          id="confirm_password"
          name="confirm_password"
          type="password"
          label="Confirm Password"
          autoComplete="current-Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          required
          id="country"
          label="Country"
          name="country"
          type="text"
          autoComplete="current-country"
          autoFocus
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          required
          id="languages"
          label="Languages"
          name="languages"
          type="text"
          autoComplete="languages"
          autoFocus
          value={languages}
          onChange={(event) => setLanguages(event.target.value)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          required
          id="phone"
          label="phone number"
          name="phone"
          type="text"
          autoComplete="phone"
          autoFocus
          value={phone_number}
          onChange={(event) => setPhone_number(event.target.value)}
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          required
          id="age"
          label="Age"
          name="age"
          type="number"
          autoComplete="age"
          autoFocus
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        </Grid>
        </Grid>
        <Box align='center'
          margin={2}>
        <Button 
          
          type="submit"
          variant="outlined"
          onClick={submit}
        >
          Register
        </Button>

        </Box>
      </Box>
    </div>
  );
}
