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

import apiHeader from "../config";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function CreateSongRoad({
  openCreateSongRoad,
  handleCloseCreateSongRoad,
  setRooms,
}) {
  const initialInput = {
    roomName: "",
    BGM: "",
    limit: 16,
    author: "",
  };
  const [values, setValues] = useState(initialInput);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (bgm) => {
    setAnchorEl(null);
    setValues({ ...values, BGM: bgm });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newRoom = values;

    Axios({
      method: "POST",
      data: newRoom,
      url: apiHeader,
    }).then((res) => {
      Axios.get(apiHeader).then((res) => {
        setRooms(res.data.data);
      });
      console.log(`Music town ${res.data.data.roomName} added!`);
    });

    handleCloseCreateSongRoad();
  };

  // console.log(values);

  return (
    <Dialog
      open={openCreateSongRoad}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseCreateSongRoad}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Create a new music town!"}</DialogTitle>
      <DialogContent>
        <TextField
          variant="outlined"
          placeholder="Enter a town name"
          size="small"
          name="roomName"
          value={values.roomName}
          onChange={handleChange}
        />
        <br />
        <br />
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleMenuClick}
          >
            {values.BGM === "" ? "Choose a BGM" : values.BGM}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            name="BGM"
            value={values.BGM}
          >
            <MenuItem onClick={() => handleClose("breakbeat")}>
              Breakbeat
            </MenuItem>
            <MenuItem onClick={() => handleClose("handdrum")}>
              Hand Drum
            </MenuItem>
            <MenuItem onClick={() => handleClose("Djembe")}>Djembe</MenuItem>
            <MenuItem onClick={() => handleClose("conga-rhythm")}>
              Conga Rhythm
            </MenuItem>
          </Menu>
        </>
        <br />
        <br />
        <TextField
          variant="outlined"
          placeholder="Max #blocks of roads"
          size="small"
          type="number"
          value={values.limit}
          onChange={handleChange}
          name="limit"
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          placeholder="Enter your name"
          size="small"
          value={values.author}
          onChange={handleChange}
          name="author"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>Create</Button>
        <Button onClick={handleCloseCreateSongRoad}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
