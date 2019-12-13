import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component{
    state = {
        gifs: []
    }

updateState = (gifsArray) => {
     this.setState({ gifs: gifsArray.data.map(gif => gif.images.original.url)})
}

fetchGifs = (query) =>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=c1vri64Q7UeHlGFlMQ8vTTrCiZnljCOY&rating=g&limit=3`)
    .then(resp => resp.json())
    .then(gifsArray => this.updateState(gifsArray))

}

    render(){
        return <div>
            < GifSearch fetchGifs={this.fetchGifs}/>
            < GifList gifs={this.state.gifs}/>
        </div>
    }
}

export default GifListContainer