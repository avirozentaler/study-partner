import React, { useState, useContext } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProfileDetails from './ProfileDetails';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import UserConnected from '../../context/UserConnected';


export default function Profie() {

  const [expanded, setExpanded] = useState(" ");
  const { userConnected } = useContext(UserConnected);
  const handleChange = (panel) => {
    if (expanded === panel) {
      setExpanded(" ");
      return;
    }
    setExpanded(panel);
  }
  console.log(userConnected);
  return (
    <Box>
      {!userConnected ?
        <Box>
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
              <ProfileDetails />
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
              <Typography>
                About
              </Typography>
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
              <Typography>
                Pots
              </Typography>
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
                Subjects
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      }
    </Box>

  )
}



