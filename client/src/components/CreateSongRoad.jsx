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

export default function CreateSongRoad({
  openCreateSongRoad,
  handleCloseCreateSongRoad,
}) {
  return (
    <Dialog
      open={openCreateSongRoad}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseCreateSongRoad}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Create a new song road!"}</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={handleCloseCreateSongRoad}>Create</Button>
        <Button onClick={handleCloseCreateSongRoad}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
