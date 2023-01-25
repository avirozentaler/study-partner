import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserConnected from '../../context/UserConnected';
import ProfileSummary from './ProfileSummary';
import ProfileDetails from './ProfileDetails';
import ProfileSubjects from './ProfileSubjects';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";

import { useEffect } from 'react';


export default function Profie() {

  const navigate = useNavigate()
  const [expanded, setExpanded] = useState("1");
  const { userConnected } = useContext(UserConnected);

  useEffect(() => {
    if (!UserConnected) {
      navigate('/')
    }
  }, []);

  const handleChange = (panel) => {
    if (expanded === panel) {
      setExpanded(" ");
      return;
    }
    setExpanded(panel);
  }

  return (
    <Box>
      {/* <Paper > */}

      {!userConnected ?
        <Box >
          <Typography>You are not loged in Please Login first</Typography>
        </Box>
        : <Box>
          <Accordion expanded={expanded === '1'} onChange={() => { handleChange('1') }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >Profile Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ProfileDetails setExpanded={setExpanded} />
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === '2'} onChange={() => { handleChange('2') }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>About Me</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ProfileSummary />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === '3'} onChange={() => { handleChange('3') }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>My Subjects</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ProfileSubjects />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === '4'} onChange={() => { handleChange('4') }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>My Posts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {/* Pots */}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      }
      {/* </Paper> */}
    </Box>

  )
}



