import React from 'react'

export const Accordian = (props) => {
  return (
    <div>
        <div class={"alert alert-${props.mode}"} role="alert">
    A simple primary alert—check it out!
  </div>
  <button class="btn btn-primary" onClick={props.kirti}>click</button>
  </div>
  )
}
