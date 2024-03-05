import React from 'react'
import you1 from '../Images/youtube-logo-0.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <div>
      
     
     <div class="collapse " id="navbarToggleExternalContent" >
  <div class="bg-dark p-1">
     </div>
</div>
<nav class="navbar navbar-dark bg-white">
  
    <span class="navbar-toggler-icon" id='toggle' ></span>
    
  
      
      
      <span>  <img src={you1} style={{height:'110px', width:'110px'}} ></img></span>
 <center><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id='searchbar' style={{width:'800px'}}  ></input></center> 

  <button class="btn btn-outline-success" type="submit" id='searchbar' >Search</button> 
  <div class="container-fluid">
    
 
    
    
  </div>
</nav>
 
       
        
  
    </div>
  )
}
