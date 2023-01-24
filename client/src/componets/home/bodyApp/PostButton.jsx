import Fab from '@mui/material/Fab'
import AddIcon from "@mui/icons-material/Add";
export default function BodyApp(setOpenPost){<Fab
          sx={{ position: 'fixed', 
          bottom: 20,
          left: 30, }}
          variant="extended"
          color="primary"
          onClick={() => {
            setOpenPost(true);
          }}
        >
          <AddIcon />
        </Fab>}