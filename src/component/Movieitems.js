import React, { Component } from 'react'

export class Movieitems extends Component {
  render() {
    let {title,year,type,imageUrl,id}=this.props;
    return (
        <div className="card my-3" style={{width: '18rem'}}>
        <a target='_blank' href={`https://www.omdbapi.com/?i=${id}&apikey=982ff953`} ><img src={imageUrl} className="card-img-top" alt="..."/></a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{year}</p>
          <p className="card-text">{type}</p>
          {/*<button type="button" target='_blank' class="btn btn-primary" href={`https://www.omdbapi.com/?i=${id}&apikey=982ff953`}>Go To</button> */}
        </div>
      </div>
    )
  }
}

export default Movieitems

