/*Change the home name by website using another file */

import React from 'react'

export const TopNav = (prop) => {
  return (
    <div>

<div class="topnav">
  <a class="active" href="#home">{prop.change}</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
    </div>
  )
}
