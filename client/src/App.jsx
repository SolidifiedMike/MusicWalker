import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import MusicPage from './pages/MusicPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MusicPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>

    </Router>

  );
}

export default App;
