import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Public from './pages/Public';
import Protected from './pages/Protected';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/public" element={<Public/>} />
        <Route path="/protected" element={<Protected/>} />
      </Routes>
    </div>
  );
}

export default App;
