import React from 'react'
import you1 from '../Images/youtube-logo-0.png'
export default function Topnavbar() {
  return (
    <div>
        <form class="d-flex  " > 
                             <button class="btn   text-dark " type="submit" id='gap'><i class="fa-solid fa-bars"></i> </button>
                            <img src={you1} id='style' ></img>
                             <input class="form-control  " type="search" placeholder="Search" aria-label="Search" id='searchbar' /> 
                             <button class="btn   text-dark " type="submit" id='gap'><i class="fas fa-search " ></i> </button> 
                             <button class="btn btn-outline-warning  text-dark  " type="submit"id='gap'><i class="fa-solid fa-microphone fa-lg"></i> </button> 
                             <button class="btn  text-dark   " type="submit"id='gap'> <i class="fa-solid fa-video fa-lg"></i> </button> 
                             <button class="btn  text-dark   " type="submit"id='gap'><i class="fa-solid fa-bell fa-lg"></i> </button> 
  
                         </form> 
  
  
                     </div>
    
  )
}
