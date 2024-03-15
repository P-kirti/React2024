import React, { Component } from 'react'

export default class MovieItem extends Component {
  render() {
    let {original_title,poster_path,overview}=this.props
    return (
    
      <div>
        <div className="card" style={{width: '18rem'}}>
      <img src={poster_path} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{original_title}</h5>
        <p className="card-text">{overview}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
    )
  }
}
