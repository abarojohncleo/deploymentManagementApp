import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/login";
import Home from "./pages/home";
import Navigation from './components/navigation';
import Logout from './components/logout';

function App() {  
  
  return (
    <div className="bg-blue-800">
      <BrowserRouter>
      {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}
export default App;

