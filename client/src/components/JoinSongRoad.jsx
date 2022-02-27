import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function JoinSongRoad({
  openJoinSongRoad,
  handleCloseJoinSongRoad,
}) {
  return (
    <Dialog
      open={openJoinSongRoad}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseJoinSongRoad}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Join a song road"}</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={handleCloseJoinSongRoad}>Create</Button>
        <Button onClick={handleCloseJoinSongRoad}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
