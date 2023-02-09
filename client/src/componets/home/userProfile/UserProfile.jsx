import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import UserPosts from './UserPosts';
// import UserConnected from '../../context/UserConnected';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Paper,
  Button,
  Tooltip,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
  Box,
  Typography,
  CircularProgress,
  Grid,
  Avatar,
  Divider,
} from "@mui/material";
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import { padding } from '@mui/system';
export default function UserProfile({ email }) {

  const [user, setUser] = useState();
  const [stars, setStars] = useState(0);
  const [rating, setRating] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const userD = await axios.post("http://localhost:3005/user/get-one", { email: "Yonatan@g.com" })
        console.log(userD.data);
        setUser(userD.data);
        // setUser({
        //   id: 2,
        //   name: "Yonatan",
        //   email: "Yonatan@g.com",
        //   country: "Israel",
        //   languages: "[\"English\",\"Hebrew\"]",
        //   phone_number: "+01248787637",
        //   age: 30,
        //   about: "",
        //   posts: [
        //     {
        //       "id": 16,
        //       "user_id": 2,
        //       "auther_name": "moshe cohen",
        //       "category": "0",
        //       "sub_category": "Hebrew",
        //       "post": " ",
        //       "date": 1675720800000,
        //       "time_from": 1675777860000,
        //       "time_to": 1675777860000
        //     },
        //     {
        //       "id": 17,
        //       "user_id": 2,
        //       "auther_name": "moshe cohen",
        //       "category": "0",
        //       "sub_category": "Hebrew",
        //       "post": " ",
        //       "date": 1675720800000,
        //       "time_from": 1675790280000,
        //       "time_to": 1675790280000
        //     },
        //     {
        //       "id": 18,
        //       "user_id": 2,
        //       "auther_name": "moshe cohen",
        //       "category": "languages",
        //       "sub_category": "English",
        //       "post": " ",
        //       "date": 1675720800000,
        //       "time_from": 1675794780000,
        //       "time_to": 1675791180000
        //     },
        //     {
        //       "id": 19,
        //       "user_id": 2,
        //       "auther_name": "moshe cohen",
        //       "category": "languages",
        //       "sub_category": "Hebrew",
        //       "post": " ",
        //       "date": 1675720800000,
        //       "time_from": 1675794780000,
        //       "time_to": 1675791180000
        //     }
        //   ],
        //   subjects: [{
        //     id: 4,
        //     name: "Linear Algebra",
        //     category_id: 1,
        //     user_connected: null,
        //   },
        //   {
        //     id: 0,
        //     name: "Geometry",
        //     category_id: 1,
        //     user_connected: null,
        //   }]
       
       
        // })

      }
      catch (err) {
        console.log(err);
      }
    })()
  }, [])

  const handleOpenRatingOption = () => {
    setRating(rating => !rating)
  }
  const handleRate = () => {
    ////////////////needed to  manage
    setRating(rating => !rating)////////////////
  }


  return (
    <Box>
      {user ?
        <Box>

          <Box sx={{ flexGrow: 1 }} >
            <Grid container minHeight={300} >

              <Grid item xs={12} sm={12} md={3}>
                {/* display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px"  */}
                <Box sx={{ display:"flex",justifyContent: "center",  }}><Avatar  sx={{ width: 100, height: 100,marginTop:5 }} /> </Box>
                {/* marginLeft: 19, marginTop: 6 */}
                <Box sx={{ m: 5 }}>
                  <Rating
                    name="simple-controlled"
                    value={stars}
                    onChange={(event, newValue) => {
                      setStars(newValue);
                    }}
                  />
                </Box>
              </Grid>

              <Grid item sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }} md={9} xs={12} sm={12} >
                <Box sx={{ m: 3 }} > <Typography sx={{ textDecoration: "underline", }} color="primary" variant='h3'>{user.name}</Typography> </Box>
                <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "flex-start" }}>
                  <Paper sx={{ display: "flex", m: 3, padding: 2, flexDirection: "column", alignItems: "flex-start", minWidth: "130px" }}><Typography variant="caption">Age:</Typography             >  <Typography sx={{}} >{user.age}</Typography>  </Paper>
                  <Paper sx={{ display: "flex", m: 3, padding: 2, flexDirection: "column", alignItems: "flex-start", minWidth: "130px" }}><Typography variant="caption">Country:</Typography         >  <Typography sx={{}} >{user.country}</Typography>  </Paper>
                  <Paper sx={{ display: "flex", m: 3, padding: 2, flexDirection: "column", alignItems: "flex-start", minWidth: "130px" }}><Typography variant="caption">Email:</Typography           >  <Typography sx={{}} >{user.email}</Typography>  </Paper>
                  <Paper sx={{ display: "flex", m: 3, padding: 2, flexDirection: "column", alignItems: "flex-start", minWidth: "130px" }}><Typography variant="caption">Phone Number:</Typography    >  <Typography sx={{}} >{user.phone_number}</Typography>  </Paper>
                  <Paper sx={{ display: "flex", m: 3, padding: 2, flexDirection: "column", alignItems: "flex-start", minWidth: "130px" }}><Typography variant="caption">Languages Skill:</Typography >  <Typography sx={{}} >{user.languages}</Typography>  </Paper>
                </Box>

                <Box sx={{ minWidth: "95%", m: 3 }}>
                  <Paper sx={{ display: "flex", padding: 2, flexDirection: "column", alignItems: "flex-start", minWidth: "100%" }}> <Typography variant="caption">About Me:</Typography> <Typography>{user.about || "User hasn't added yet..."}</Typography></Paper>
                </Box>

                <Box sx={{ minWidth: "96%", m: 2 }}>
                  <Paper sx={{ m: 1 }}>
                    <Typography variant="body1" sx={{ textDecoration: "underline" }}>All Subjects</Typography>

                    <Box sx={{ m: 1, display: 'flex', flexWrap: 'wrap' }}>
                      {user.subjects && user.subjects.map((item, index) => {
                        return <Paper key={index} sx={{ m: 3, padding: 2}}>
                          <Typography align='center'> {item.name} </Typography>
                          {!rating ? <Tooltip title="Rate Skill"><StarRateOutlinedIcon sx={{ m: 1 }} fontSize='small' color='primary' onClick={handleOpenRatingOption} /></Tooltip> : <Rating
                            name="simple-controlled"
                            value={stars}
                            onChange={(event, newValue) => {
                              setStars(newValue);
                            }}
                          />}
                          {rating && <Box><Button onClick={handleRate}>Save</Button><Button onClick={handleOpenRatingOption}>Cancel</Button></Box>}
                        </Paper>
                      })}
                    </Box>
                  </Paper>
                </Box>


              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box>
            {user.posts && <UserPosts posts={user.posts} />}
          </Box>

        </Box>

        : <Box sx={{ marginTop: '20%' }}>
          <CircularProgress />
        </Box>
      }
    </Box>
  )
}
