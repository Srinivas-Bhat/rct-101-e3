import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Login from './pages/Login';
import Products from './components/Products/Products.jsx'
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      {
        // Code here
      }
      <Navbar/>
        <Routes>
          <Route path="" element={<Home/>} />
          {/* <Route path="" element={<Login/>}/> */}
          <Route path='/products' element={<RequiredAuth><Products/></RequiredAuth>}/>
        </Routes>
    </div>
  );
}

export default App;
