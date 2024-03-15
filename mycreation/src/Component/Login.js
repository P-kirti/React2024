import React from 'react'

export default function Login() {
  return (
    <div id='box'>
<h1>Login to Mk Creation</h1>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Drop Your Suggession</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button btn btn-light>Submit</button>

    </div>
  )
}
