
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/about' element={<About></About>}>About Me</Route>
        <Route path='/services' element={<Services></Services>}>Services</Route>
        <Route path='/blogs' element={<Blogs></Blogs>}>Blogs</Route>
        <Route path='/login' element={<Login></Login>}>Login</Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
