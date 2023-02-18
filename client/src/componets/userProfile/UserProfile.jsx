import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import UserPosts from './UserPosts';
import {
  Paper,
  Button,
  Tooltip,
  Rating,
  Box,
  Typography,
  CircularProgress,
  Grid,
  Avatar,
  Divider,
} from "@mui/material";
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';

export default function UserProfile() {
  const { state: { userId } } = useLocation()
  const [user, setUser] = useState();
  const [rate, setRate] = useState(null);
  const [userStars, setUserStars] = useState(null);
  const [stars, setStars] = useState(null);
  const [isRating, setIsRating] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        console.log('userId >>', userId);
        const userData = await axios.post("http://localhost:3005/user/get-one", { id: userId })
        console.log(userData.data);
        setUser(userData.data);
        setRate(userData.data.rate);
        console.log(userData.data.rate);
        // setUserStars(userData.data.rate);
      }
      catch (err) {
        console.log(err);
      }
    })()
  }, [])

  const handleRate = async () => {
    ////////////////needed to  manage
    await axios.put('http://localhost:3005/user/update',
    { email:user.email,rate:stars },
    { withCredentials: true });
    setStars(null)
    setIsRating(rating => !rating)////////////////
  }

  const handleCancelRate =()=>{
    setStars(null)
    setIsRating(rating => !rating)
  }
console.log(rate);
  return (
    <Box>
      {user ?
        <Box>

          <Box sx={{ flexGrow: 1 }} >
            <Grid container minHeight={300} >

              <Grid item xs={12} sm={12} md={3}>
                <Box sx={{ display: "flex", justifyContent: "center", }}><Avatar sx={{ width: 100, height: 100, marginTop: 5 }} /> </Box>
                <Box sx={{ m: 5 }}>
                   <Rating
                   disabled={!isRating}
                    value={!isRating ?rate || null :stars}
                    onChange={(event, newValue) => {
                      setStars(newValue);
                    }}
                  />
                  <Box>
                    {!isRating ? <Box><Tooltip title="Rate Skill"><StarRateOutlinedIcon sx={{ m: 1 }} fontSize='small' color='primary' onClick={()=>{ setIsRating(rating => !rating)}} /></Tooltip></Box> :
                      <Box><Button onClick={handleCancelRate}>Cancel</Button><Button onClick={handleRate}>Save</Button></Box>}
                  </Box>
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
                        return <Paper key={index} sx={{ m: 3, padding: 2 }}>
                          <Typography align='center'> {item.name} </Typography>
                          {/* {!rating ? <Tooltip title="Rate Skill"><StarRateOutlinedIcon sx={{ m: 1 }} fontSize='small' color='primary' onClick={handleOpenRatingOption} /></Tooltip> : <Rating
                            name="simple-controlled"
                            value={stars}
                            onChange={(event, newValue) => {
                              setStars(newValue);
                            }}
                          />} */}
                          {/* {isRating && <Box><Button onClick={handleRate}>Save</Button><Button onClick={handleOpenRatingOption}>Cancel</Button></Box>} */}
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
