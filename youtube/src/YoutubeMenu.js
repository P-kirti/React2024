import React from 'react'
import { Link } from 'react-router-dom'

export const YoutubeMenu = () => {
  return (
    <div>
   <Link button class='btn btn-primary mx-2' to='/All' >All</Link>
   <Link button class='btn btn-warning mx-2' to='/Movies'>Movies</Link>
    <Link button class='btn btn-info mx-2' to='/BollywoodMusic'>BollywoodMusic</Link>
    <Link button class='btn btn-success mx-2' to='Aerobics'>Aerobics</Link>
    <Link button class= 'btn btn-danger mx-2' to='/Cartoon'>Cartoon</Link>
    <Link button class= 'btn btn-secondary 'to='/HomeImprovement'>Home Improvement</Link>


    </div>
  )
}

