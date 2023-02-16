import React, { useState } from "react";
import axios from "axios";
import {
  nameValid,
  emailValid,
  passwordValid,
  countryValid,
  languagesValid,
  phone_numberValid,
  age_rangeValid,
} from "../../utilities/validetion/validetion.js";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [languages, setLanguages] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [age_range, setAge_range] = useState("");

  const submit = async () => {
    if (!nameValid(name)) {
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
        const answer = await axios.post("http://localhost:3005/user/register", {
          name,
          email,
          password,
          confirmPassword,
          country,
          languages,
          phone_number,
          age_range,
        });
        console.log(answer);
      } catch (err) {
        console.log(err);
        alert("faild");
      }
    }
  };
  return (
    <div className="Register auth">
      <Box
        display="flex"
        width={300}
        maxWidth="75%"
        flexDirection="column"
        gap={2}
        variant="outlined"
        alignItems={'center'}
        margin={'auto'}
      >
        <div>
          <Typography variant="h5" align="center">
            Sign up
          </Typography>
        </div>
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
        <TextField
          required
          id="age"
          label="Age"
          name="age"
          type="number"
          autoComplete="age"
          autoFocus
          value={age_range}
          onChange={(event) => setAge_range(event.target.value)}
        />
        <Button
          type="submit"
          variant="outlined"
          onClick={submit}
        >
          Register
        </Button>
      </Box>
    </div>
  );
}
