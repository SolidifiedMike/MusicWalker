import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import { synth } from "./Instruments";
import useKeyPress from "../hooks/useKeyPress";
import { useState } from "react";

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
    { color: "#adff2f", note: "B4" },
    { color: "#47ff60", note: "A4" },
    { color: "#5fffea", note: "G4" },
    { color: "#78acff", note: "F4" },
    { color: "#8486ff", note: "E4" },
    { color: "#e39cff", note: "D4" },
    { color: "#ffc0cb", note: "C4" },
    { color: "lightgrey", note: "1m" },
  ];
  const [currNote, setCurrNote] = useState(0);
  useKeyPress((e) => {
    const myKey = e.key;
    if (myKey === "ArrowUp" || myKey === "w") {
      setCurrNote(Math.max(currNote - 1, 0));
      e.preventDefault();
    }

    if (myKey === "ArrowDown" || myKey === "s") {
      setCurrNote(Math.min(currNote + 1, noteList.length - 1));
      e.preventDefault();
    }
    if (myKey === "Enter") {
      editTileTone(index, noteList[currNote].color, noteList[currNote].note);
      if (noteList[currNote].color !== "grey") {
        synth.triggerAttackRelease(noteList[currNote].note, "16n");
      }
      e.preventDefault();
    }
  });
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
          {noteList.map((note, i) => {
            return (
              <Button
                disableRipple={true}
                key={i}
                value={note.color}
                label={note.color}
                onClick={() => {
                  setCurrNote(i);
                  editTileTone(index, note.color, note.note);
                  if (note.color !== "grey") {
                    synth.triggerAttackRelease(note.note, "16n");
                  }
                }}
                style={{
                  height: "35px",
                  width: "100%",
                  zIndex: 100,
                  position: "default",
                  flexShrink: "0",
                  backgroundColor: note.color,
                  border: "none",
                  boxShadow:
                    i === currNote
                      ? "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                      : "none",
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
