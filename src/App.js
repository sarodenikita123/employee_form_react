import './App.css';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Add from './Components/pages/User/Add';
import Show from './Components/pages/User/Show';
import Update from './Components/pages/User/Update';
import Delete from './Components/pages/User/Delete';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/user/add" element={<Add/>}></Route>
          <Route path="/user/show" element={<Show/>}></Route>
          <Route path="/user/update/:userId" element={<Update/>}></Route>
          <Route path="/user/delete/:userId" element={<Delete/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
