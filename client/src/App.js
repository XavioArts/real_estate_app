import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Public from './pages/Public';
import Protected from './pages/Protected';
import NavBar from './components/NavBar';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/public" element={<Public/>} />
        <Route element={<RequireAuth/>} >
          <Route path="/protected" element={<Protected/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
