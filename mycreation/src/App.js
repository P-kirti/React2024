import "./App.css";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import PrewedShoot from "./Component/PrewedShoot";
import WeddingPhoto from "./Component/WeddingPhoto";
import WeddingVideos from "./Component/WeddingVideos";
import Explore from "./Component/Explore";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div> 
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        
     <Route path="/wedding photoes" element={<WeddingPhoto/>}></Route>
     <Route path="/Wedding Videos" element={<WeddingVideos/>}></Route>
     <Route path="/Pre wedding Shoot" element={<PrewedShoot/>}></Route>
     <Route path="/Explore" element={<Explore/>}></Route>
     <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
