import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const myKey = 'bCQS0PlyPjrnjvt42yrJP4bPi0DosMGS'

class GifListContainer extends Component {

    state= {
        gifs: []
    }

    searchGifs = (userInput) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${myKey}&rating=g`)
        .then(resp => resp.json())
        .then(gifs => this.setState({gifs: gifs.data.slice(0, 3)}))
    }
    
    render() {
        return (
        <div>
            <GifSearch onSubmit= {this.searchGifs}/>
            <GifList gifs={this.state.gifs} />
        </div>
        )
    }
}

export default GifListContainer