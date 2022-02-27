import * as Tone from "tone";
export const synth2 = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    type: "sawtooth",
  },
  filter: {
    Q: 2,
    type: "lowpass",
    rolloff: -12,
  },
  envelope: {
    attack: 0.25,
    decay: 4,
    sustain: 0.1,
    release: 0.8,
  },
  filterEnvelope: {
    attack: 0.05,
    decay: 0.05,
    sustain: 0.7,
    release: 2,
    baseFrequency: 2000,
    octaves: -1.5,
  },
}).toDestination();

export const synth1 = new Tone.PolySynth({
  oscillator: { type: "sine2" },
}).toDestination();

export const sampler1 = new Tone.Sampler({
  urls: {
    A1: "guitar_Dstring.mp3",
  },
  baseUrl: "https://tonejs.github.io/audio/berklee/",
}).toDestination();

export const sampler2 = new Tone.Sampler({
  urls: {
    A1: "Analogsynth_octaves_highmid.mp3",
  },
  baseUrl: "https://tonejs.github.io/audio/berklee/",
}).toDestination();

export const player = new Tone.Player(
  "https://tonejs.github.io/audio/drum-samples/breakbeat.mp3"
).toDestination();

export const player2 = new Tone.Player(
  "https://tonejs.github.io/audio/drum-samples/handdrum-loop.mp3"
).toDestination();

export const player3 = new Tone.Player(
  "https://tonejs.github.io/audio/drum-samples/Djembe.mp3"
).toDestination();

export const player4 = new Tone.Player(
  "https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3"
).toDestination();
