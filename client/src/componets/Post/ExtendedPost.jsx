import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserConnected from "../../context/UserConnected";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
export default function ExtendedPost({ openMore, setOpenMore, userId }) {
  const { userConnected } = useContext(UserConnected);
  const navigae = useNavigate();

  const handleClickOpen = () => {
    setOpenMore(true);
  };

  const handleClose = () => {
    setOpenMore(false);
  };
  return (
    <>
      <Dialog open={openMore} onClose={handleClose} fullWidth={true}>
        <DialogContent sx={{ padding: 5 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={10}>
              <Typography gutterBottom variant="body1">
                Hi, my name is David. {/*post.name*/}
              </Typography>
              <Typography gutterBottom variant="body1">
                I am looking for a partner to study
              </Typography>
              <Typography gutterBottom variant="body1">
                languages {/*post.category*/} English {/*post.sub_category*/}
              </Typography>
              <Typography gutterBottom variant="body1">
                on 22/12/2023 {/*post.date*/} between 14:00{/*post.time_from*/}{" "}
                and 15:00 {/*post.time_to*/}
              </Typography>
              <Typography gutterBottom variant="body1">
                {/* <DialogContentText> */}I can speak a little English but I
                want to learn to write and read {/*post.post*/}
                {/* </DialogContentText> */}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Avatar
                variant="rounded"
                alt="Remy Sharp"
                src={require("./languages.jpg")}
                sx={{ width: 175, height: 175 }}
              />
            </Grid>
          </Grid>
          <DialogActions sx={{ paddingTop: 5 }}>
            <Button onClick={()=>{navigae("/user", userId)}} variant="outlined" size="small">
              View profile
            </Button>
            {userConnected ? (
              <Button variant="outlined" size="small">
                be my partner
              </Button>
            ) : (
              <Tooltip title="Only logged-in users can use this feature." arrow>
                <span style={{ marginLeft: "5px" }}>
                  <Button variant="outlined" disabled size="small">
                    be my partner
                  </Button>
                </span>
              </Tooltip>
            )}
            {/* </Box> */}
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
