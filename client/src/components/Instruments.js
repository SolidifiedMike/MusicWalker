import * as Tone from "tone";

export const synth = new Tone.Synth({
  oscillator: { type: "sine2" },
}).toDestination();
