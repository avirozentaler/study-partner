import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OutboxOutlinedIcon from "@mui/icons-material/OutboxOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";

export default function PostSending({ emailSent, emailFailed }) {
  return (
    <Box>
      {!emailSent && !emailFailed && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography variant="h5">
              Sending email to your partner 
            </Typography>
          </Box>
          <Box>
            <OutboxOutlinedIcon color="primary" fontSize="large" />
          </Box>
        </Box>
      )}

      {emailFailed && (
        <Box>
          <Box>
            <Typography variant="h5">
              Sending email failed please try later
            </Typography>
          </Box>
          <Box>
            <ErrorOutlinedIcon />
          </Box>
        </Box>
      )}
      {emailSent && (
        // button onClick="window.location.reload();">Refresh Page</button> 
        <Box  sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography variant="h5">
              Email sent to the partner good luck  
            </Typography>
          </Box>
          <Box>
            <MarkEmailReadOutlinedIcon color="success" fontSize="large"/>
          </Box>
        </Box>
      )}
    </Box>
  );
}
