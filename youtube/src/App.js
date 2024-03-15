
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { YoutubeMenu } from './YoutubeMenu';
import All from './Component/All';
import BollywoodMusic from './Component/BollywoodMusic';
import Aerobics from './Aerobics';
import Movies from './Component/Movies'
import Cartoon from './Component/Cartoon';
import HomeImprovement from './Component/HomeImprovement';
import Topnavbar from './Component/Topnavbar';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div>

      <Topnavbar></Topnavbar>

    
    
    
            
      <BrowserRouter>
      <YoutubeMenu ></YoutubeMenu>
      <Sidebar></Sidebar>
   
      
    
     
      <Routes>
    <Route path='/Sidebar' element={<Sidebar/>}></Route>
        <Route path='/All' element={<All/>}></Route>
    <Route path='/Movies' element={<Movies/>}></Route>
     <Route path='/BollywoodMusic' element={<BollywoodMusic/>}></Route>
      <Route path='Aerobics' element={<Aerobics/>}></Route>
      <Route path='/Cartoon' element={<Cartoon/>}></Route>
      <Route path='/HomeImprovement' element={<HomeImprovement/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
