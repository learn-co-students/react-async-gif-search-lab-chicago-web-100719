import React, {Component} from 'react'

class GifList extends Component {

    listGifs = () => {
      const gifList =  this.props.gifs.map(gif => {
            return <li key={Math.floor(Math.random() *1000)}> <img src= {gif.images.original.url} alt=""/></li>
        })
        return gifList
    }

    render() {
        return (
        <div>
            <ul id='gif-list'>
                {this.listGifs()}
            </ul>
        </div>)
    }
}

export default GifList;