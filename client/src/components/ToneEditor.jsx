import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Tile({
  openToneEditor,
  handleCloseToneEditor,
  editTileTone,
  index,
}) {
  return (
    <Dialog
      open={openToneEditor}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseToneEditor}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{'Choose a tone you like'}</DialogTitle>
      <DialogContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Tone</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="white"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="white"
              control={<Radio />}
              label="white"
              onClick={() => {
                editTileTone(index, 'white');
              }}
            />
            <FormControlLabel
              value="red"
              control={<Radio />}
              label="red"
              onClick={() => {
                editTileTone(index, 'red');
              }}
            />
            <FormControlLabel
              value="orange"
              control={<Radio />}
              label="orange"
              onClick={() => {
                editTileTone(index, 'orange');
              }}
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseToneEditor}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
