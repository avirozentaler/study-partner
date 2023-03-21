import React, { useState } from "react";
import Register from "./Register";
import LogIn from "./LogIn";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
import {Box,Dialog,DialogContent,DialogTitle,IconButton ,Typography,Alert } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Auth({ handleCloseLogIn, openLogIn }) {

  const [authMode, setAuthMode] = useState(0);
  const [alertMessage, setAlertMessage] = useState('')
  const [opanAlert, setOpanAlert] = useState(false);
  const [alertMode,  setAlertMode] = useState('')

  const handleOpenAlert = (alertStatus,message) => {
    setAlertMode(alertStatus);
    setAlertMessage(message)
    setOpanAlert(true);
    setTimeout(() => {
      setOpanAlert(false);
    }, 3500)
  }

  const handleCloseAlert = () => {
    setOpanAlert(false);
  }
  const handleAuthMode = (numOfMode) => {
    setAuthMode(numOfMode)
  }

  return (
    <Box>
      <Dialog
        open={openLogIn}
        onClose={handleCloseLogIn}
        aria-describedby="auth"
      >
        <DialogTitle>

        <Box sx={{ position: 'relative' }}>
        {opanAlert ? <Alert onClose={handleCloseAlert} sx={{ position: 'absolute', width: '100%' }} severity={alertMode}>{alertMessage}</Alert> : null}
      </Box>

          {authMode >0 && <ArrowBackOutlinedIcon onClick={()=>handleAuthMode(0)}/>}
          {!opanAlert &&<IconButton
            onClick={handleCloseLogIn}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>}
        </DialogTitle>

        <DialogContent >
          {authMode === 1 ? <Register handleAuthMode={handleAuthMode} handleOpenAlert={handleOpenAlert}/>
            : authMode === 2 ? <ForgetPassword  handleAuthMode={handleAuthMode} handleOpenAlert={handleOpenAlert}/>
              : authMode === 3 ? <ResetPassword  handleAuthMode={handleAuthMode} handleOpenAlert={handleOpenAlert}/>
                : <LogIn handleAuthMode={handleAuthMode} handleCloseLogIn={handleCloseLogIn} handleOpenAlert={handleOpenAlert}/>
          }
        </DialogContent>
      </Dialog>
    </Box>
  );
}




























































// import React, { useState } from "react";
// import Register from "./Register";
// import LogIn from "./LogIn";
// import ForgetPassword from "./ForgetPassword";
// import ResetPassword from "./ResetPassword";

// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

// export default function Auth({ handleCloseLogIn, openLogIn }) {
//   const [registered, setRegistered] = useState(true);
//   const [havePass, setHavePass] = useState(true);
//   const [resetPass, setResetPass] = useState(false);

//   const handleRegistered = () => {
//     setRegistered((registered) => !registered);
//   };
//   const handleHavePass = () => {
//     setHavePass((havePass) => !havePass);
//   };
//   const handleResetPass = () => {
//     setResetPass((resetPass) => !resetPass);
//   };

//   return (
//     <div>
//       <Dialog
//         open={openLogIn}
//         onClose={handleCloseLogIn}
//         aria-describedby="auth"
//       >
//         <DialogTitle>
//           <IconButton

//             onClick={handleCloseLogIn}
//             sx={{
//               position: "absolute",
//               right: 8,
//               top: 8,
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>

//         <DialogContent>
//           <div className="Auth">
//             {registered ? (
//               havePass ? (
//                 <LogIn
//                   handleRegistered={handleRegistered}
//                   handleHavePass={handleHavePass}
//                   handleCloseLogIn={handleCloseLogIn}
//                 />
//               ) : resetPass ? (
//                 <ResetPassword handleHavePass={handleHavePass} />
//               ) : (
//                 <ForgetPassword handleResetPass={handleResetPass} />
//               )
//             ) : (
//               <Register handleRegistered={handleRegistered} />
//             )}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
