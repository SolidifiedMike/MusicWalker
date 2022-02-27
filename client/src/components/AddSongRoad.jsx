import { useState } from "react";
import { TextField, Menu, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Axios from "axios";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import apiHeader from "../config";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function AddSongRoad({
  openAddSongRoad,
  handleCloseAddSongRoad,
  roadConfig,
  instrument,
  id,
}) {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");

  const handleAddNewRoad = () => {
    const newRoad = {
      author: author,
      instrument: instrument,
      road: roadConfig,
    };
    console.log(newRoad);

    Axios({
      method: "PUT",
      data: newRoad,
      url: `${apiHeader + "/" + id}`,
    }).then((res) => {
      navigate("/");
    });
  };

  return (
    <Dialog
      open={openAddSongRoad}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseAddSongRoad}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Create a new music town!"}</DialogTitle>
      <DialogContent>
        <TextField
          variant="outlined"
          placeholder="Enter your name"
          size="small"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddNewRoad}>Add</Button>
        <Button onClick={handleCloseAddSongRoad}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
