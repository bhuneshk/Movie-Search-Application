import React, {Component} from 'react'
import Movieitems from './Movieitems';

export class Movie extends Component {
    state={
        articles: [],
        loading: false
    }

    constructor(){
    super();
    // this.state={
    //     articles: [],
    //     loading: false
    // }
  }
  async componentDidMount() {
    let url='https://www.omdbapi.com/?s=guardians&apikey=982ff953';
    let data = await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({
        articles : parsedData.Search

    })
    console.log(this.state.articles);
}
  render() {
    return (
        <div className='container my-3'>
              <h2>Movies</h2>
              <div className='row'>
                {this.state.articles.length && this.state.articles.map((element)=>{
                    return  <div className='col-md-4'>
                    <Movieitems title={element.Title} year={element.Year} type={element.Type} imageUrl={element.Poster} id={element.imdbID}/>
                 </div>
                })}
              </div>
        </div>
    )
  }
}

export default Movie
