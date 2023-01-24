import React, { useState } from "react";
import Register from "../register/Register";
import LogIn from "../logIn/LogIn";
import ForgetPassword from "../forgetPassword/ForgetPassword";
import ResetPassword from "../resetPassword/ResetPassword";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Auth({ handleCloseLogIn, openLogIn }) {
  const [registered, setRegistered] = useState(true);
  const [havePass, setHavePass] = useState(true);
  const [resetPass, setResetPass] = useState(false);

  const handleRegistered = () => {
    setRegistered((registered) => !registered);
  };
  const handleHavePass = () => {
    setHavePass((havePass) => !havePass);
  };
  const handleResetPass = () => {
    setResetPass((resetPass) => !resetPass);
  };

  return (
    <div>
      <Dialog
        open={openLogIn}
        onClose={handleCloseLogIn}
        aria-describedby="auth"
      >
        <DialogTitle>
          <IconButton
            onClick={handleCloseLogIn}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="Auth">
            {registered ? (
              havePass ? (
                <LogIn
                  handleRegistered={handleRegistered}
                  handleHavePass={handleHavePass}
                  handleCloseLogIn={handleCloseLogIn}
                />
              ) : resetPass ? (
                <ResetPassword handleHavePass={handleHavePass} />
              ) : (
                <ForgetPassword handleResetPass={handleResetPass} />
              )
            ) : (
              <Register handleRegistered={handleRegistered} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
