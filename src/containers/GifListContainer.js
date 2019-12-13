import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      gifs : []
    }
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    }, console.log(this.state))
  }

  handleSubmit = event => {
    event.preventDefault()
    let searchQuery = this.state.query.split(' ').join('%20')
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=gaHS5XhmfJvnMMq0HwJ3yPlXQIUVllKx&rating=g`)
    .then(resp => resp.json())
    .then(gif => {
      if(gif.data) {
        let gifs = gif.data.splice(0,3).map(gif => gif.images.downsized.url)
        this.setState({
          gifs: gifs
        })
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        < GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }
}