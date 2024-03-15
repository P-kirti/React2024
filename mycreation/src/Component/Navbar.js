import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.jpg'

export default function Navbar() {
  return (
    <div>
<nav class="navbar navbar-light " id='nav'>
  <div id='btn'>
  <img src={logo} style={{height:'80px' , width:'80px'}} class='mx-2 my-2' id='logo'></img>

  < Link button id='nav' class='btn btn-danger mx-2' to="/wedding photoes" >Wedding Photoes</Link>
  <Link button id='nav' class="btn btn-danger mx-2" to="/Wedding Videos">Wedding Vidioes</Link>
  <Link button id='nav' class="btn btn-danger  mx-2" to="/Pre wedding Shoot" >Prewedding Shoot</Link>
  <Link button  id='nav' class="btn btn-danger my-2" to="/Explore" >Explore</Link>
  <Link button id='nav' class="btn btn-danger mx-2" to="/Login" >Login</Link>

  </div>
</nav>
   </div>
  )
}
