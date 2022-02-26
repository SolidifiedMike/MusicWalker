import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import { synth } from "./Instruments";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Tile({
  openToneEditor,
  handleCloseToneEditor,
  editTileTone,
  index,
}) {
  const noteList = [
    { color: "purple", note: "B4" },
    { color: "blue", note: "A4" },
    { color: "lime", note: "G4" },
    { color: "green", note: "F4" },
    { color: "yellow", note: "E4" },
    { color: "orange", note: "D4" },
    { color: "red", note: "C4" },
    { color: "grey", note: "1m" },
  ];

  return (
    <Dialog
      open={openToneEditor}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseToneEditor}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Choose a tone you like"}</DialogTitle>
      <DialogContent>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          style={{ width: "100%" }}
        >
          {noteList.map((note) => {
            return (
              <Button
                value={note.color}
                label={note.color}
                onClick={() => {
                  editTileTone(index, note.color, note.note);
                  if (note.color !== "grey") {
                    synth.triggerAttackRelease(note.note, "16n");
                  }
                }}
                style={{
                  height: "35px",
                  width: "100%",
                  flexShrink: "0",
                  backgroundColor: note.color,
                  border: "none",
                }}
              ></Button>
            );
          })}
        </ButtonGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseToneEditor}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
