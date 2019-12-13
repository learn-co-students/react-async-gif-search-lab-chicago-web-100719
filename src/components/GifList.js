import React, {Component} from 'react'

export default class GifList extends Component {

  createGifs = () => {
    if(this.props.gifs.length > 0) {
      return this.props.gifs.map(gif => {
        return <div><img src={gif} /></div>
      })
    }
  }

  render() {
    return (
      <div>
        {this.createGifs()}
      </div>
    )
  }
} 