import React, { useState, useContext } from "react";
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
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { maxWidth } from "@mui/system";


export default function Register({ handleOpenAlert }) {
  const { urlServer } = useContext(UrlContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [languages, setLanguages] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [age, setAge] = useState("");

  const submit = async () => {
    if (!nameValid(name)) {
      handleOpenAlert('error', 'name not valid');
    } else if (!emailValid(email)) {
      handleOpenAlert('error', 'email not valid');
    } else if (!passwordValid(password)) {
      handleOpenAlert('error', 'password  not valid');
    } else if (password !== confirmPassword) {
      handleOpenAlert('error', 'confirm password not match"');
    } else if (country && !countryValid(country)) {
      handleOpenAlert('error', 'country is not valid');
    } else if (!languagesValid(languages)) {
      handleOpenAlert('error', 'languages not valid');
    } else if (phone_number && !phone_numberValid(phone_number)) {
      handleOpenAlert('error', 'phone number not valid');
    }
    // else if (age_range && !age_rangeValid(age_range)) {
      // handleOpenAlert('error', 'age not valid');
    //     alert('age range not valid')
    // }
    else {
      try {
        const answer = await axios.post(urlServer + "/user/register", {
          name,
          email,
          password,
          confirmPassword,
          country,
          languages,
          phone_number,
          age,
        });
        console.log(answer);
        handleOpenAlert('success', 'User created successfully');
      } catch (err) {
        console.log(err);
        handleOpenAlert('error', 'Register faild');
      }
    }
  };
  return (
    <Box sx={{textAlign:'center'}}>

      <Box sx={{ }}>
        <Typography variant="h5" m={2} >
          Sign up
        </Typography>
      </Box>

      {/* <Box xs={{ width: '100%', display:'flex' }} mb={2} mt={2} align='center'> */}
      <Box xs={{}}>
        <TextField
          sx={{ m: 1 }}
          required
          // variant='standard'
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
          sx={{ m: 1 }}
          required
          // variant='standard'
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
          sx={{ m: 1 }}
          required
          // variant='standard'
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
          sx={{ m: 1 }}
          required
          // variant='standard'
          id="confirm_password"
          name="confirm_password"
          type="password"
          label="Confirm Password"
          autoComplete="current-Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          required
          // variant='standard'
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
          sx={{ m: 1 }}
          required
          // variant='standard'
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
          sx={{ m: 1 }}
          required
          // variant='standard'
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
          sx={{ m: 1 }}
          required
          // variant='standard'
          id="age"
          label="Age"
          name="age"
          type="number"
          autoComplete="age"
          autoFocus
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />

      </Box>
      <Box>
        <Button
        
          color="success"
          variant="contained"
          type="submit"
          sx={{ m: 2}}
          // variant="outlined"
          onClick={submit}
        >
          Register
        </Button>
      </Box>

      {/* <Box xs={{ width: '100%' }} align='center'> */}


      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: -5 }}>
          <Grid item xs={12} md={6} sm={6}  >

          </Grid>
          <Grid item xs={12} md={6} sm={6}>

          </Grid>
          <Grid item xs={12} md={6} sm={6}>

          </Grid>
          <Grid xs={12} md={6} sm={6}>

          </Grid>
          <Grid item xs={12} md={6} sm={6}>

          </Grid>
          <Grid item xs={12} md={6} sm={6}>

          </Grid>
          <Grid item xs={12} md={6} sm={6}>

          </Grid>
          <Grid item xs={12} md={6} sm={6}>

          </Grid>
        </Grid> */}



    </Box>
  );
}































// import React, { useState, useContext } from "react";
// import axios from "axios";
// import UrlContext from "../../context/UrlContext.js";
// import {
//   nameValid,
//   emailValid,
//   passwordValid,
//   countryValid,
//   languagesValid,
//   phone_numberValid,
//   age_Valid,
// } from "../../utilities/validetion/validetion.js";
// import { Box, Typography, TextField, Button, Grid } from "@mui/material";


// export default function Register({ handleOpenAlert }) {
//   const { urlServer } = useContext(UrlContext);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [country, setCountry] = useState("");
//   const [languages, setLanguages] = useState("");
//   const [phone_number, setPhone_number] = useState("");
//   const [age, setAge] = useState("");

//   const submit = async () => {
//     if (!nameValid(name)) {
//       handleOpenAlert('error', 'name not valid');
//       // alert("name not valid");
//     } else if (!emailValid(email)) {
//       handleOpenAlert('error', 'email not valid');
//       // alert("email not valid");
//     } else if (!passwordValid(password)) {
//       handleOpenAlert('error', 'password  not valid');
//       // alert("password not valid");
//     } else if (password !== confirmPassword) {
//       handleOpenAlert('error', 'confirm password not match"');
//       // alert("confirmPassword not match");
//     } else if (country && !countryValid(country)) {
//       handleOpenAlert('error', 'country is not valid');
//       // alert("country not valid");
//     } else if (!languagesValid(languages)) {
//       handleOpenAlert('error', 'languages not valid');
//       // alert("languages not valid");
//     } else if (phone_number && !phone_numberValid(phone_number)) {
//       handleOpenAlert('error', 'phone number not valid');
//       // alert("phone number not valid");
//     }
//     // else if (age_range && !age_rangeValid(age_range)) {
//     //     alert('age range not valid')
//     // }
//     else {
//       try {
//         const answer = await axios.post(urlServer + "/user/register", {
//           name,
//           email,
//           password,
//           confirmPassword,
//           country,
//           languages,
//           phone_number,
//           age,
//         });
//         console.log(answer);
//         handleOpenAlert('success', 'User created successfully');
//       } catch (err) {
//         console.log(err);
//         handleOpenAlert('error', 'Register faild');
//         // alert("faild");
//       }
//     }
//   };
//   return (
//     <Box >
//       {/* <div>
//         <Typography variant="h5" align="center" margin={2}>
//           Sign up
//         </Typography>
//       </div> */}
//       <Box>
//         <Typography variant="h5" align="center">
//           Sign up
//         </Typography>
//       </Box>
//       <Box xs={{ width: '100%' }} align='center'

//       >
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: -5 }}>
//           <Grid item xs={6}>
//             <TextField
//               required
//               id="name"
//               label="Name"
//               name="name"
//               type="text"
//               autoComplete="name"
//               autoFocus
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               required
//               id="email"
//               label="Email address"
//               name="email"
//               type="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               required
//               id="password"
//               name="password"
//               type="password"
//               placeholder="password"
//               label="Password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               required
//               id="confirm_password"
//               name="confirm_password"
//               type="password"
//               label="Confirm Password"
//               autoComplete="current-Password"
//               value={confirmPassword}
//               onChange={(event) => setConfirmPassword(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               required
//               id="country"
//               label="Country"
//               name="country"
//               type="text"
//               autoComplete="current-country"
//               autoFocus
//               value={country}
//               onChange={(event) => setCountry(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               required
//               id="languages"
//               label="Languages"
//               name="languages"
//               type="text"
//               autoComplete="languages"
//               autoFocus
//               value={languages}
//               onChange={(event) => setLanguages(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               required
//               id="phone"
//               label="phone number"
//               name="phone"
//               type="text"
//               autoComplete="phone"
//               autoFocus
//               value={phone_number}
//               onChange={(event) => setPhone_number(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               required
//               id="age"
//               label="Age"
//               name="age"
//               type="number"
//               autoComplete="age"
//               autoFocus
//               value={age}
//               onChange={(event) => setAge(event.target.value)}
//             />
//           </Grid>
//         </Grid>
//         {/* <Box align='center'
//           margin={2}> */}

//         <Button
//           color="success"
//           variant="contained"
//           type="submit"
//           sx={{ width: '100%',m:'2' }}
//           // variant="outlined"
//           onClick={submit}
//         >
//           Register
//         </Button>

//         {/* </Box> */}
//       </Box>
//     </Box>
//   );
// }
