import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone'
function App() {
  const synth = new Tone.Synth().toDestination();
  const mem = new Tone.MembraneSynth().toDestination();
  const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
  const chorusSynth = new Tone.PolySynth().connect(chorus);
  
  const playSynth1 = () => {
    const now = Tone.now()
    synth.triggerAttackRelease("C4", "16n", now)
    synth.triggerAttackRelease("E4", "16n", now + 0.2)
    synth.triggerAttackRelease("G4", "16n", now + 0.8)
  }
  const playSynth2 = () => {
    mem.triggerAttackRelease("C5", "8n")
  }
  const playSynth3 = () => {
    
    chorusSynth.triggerAttackRelease(["C3", "E3", "G4"], "8n")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={playSynth1}>Play1</button><br/>
        <button onClick={playSynth2}>Play2</button><br/>
        <button onClick={playSynth3}>Play3</button>
      </header>
    </div>
  );
}

export default App;
