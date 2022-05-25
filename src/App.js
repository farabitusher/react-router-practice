import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/Not found/NotFound';
import Header from './Components/Header/Header';
import Friends from './Components/Friends/Friends';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/friends' element={<Friends/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
