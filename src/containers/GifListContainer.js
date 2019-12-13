import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor(){
        super()

        this.state = {
            gifs: []
        }
    }

    fetchGIFs = (query = 'dolphins') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(gifsData => this.setState({ 
            gifs: gifsData.data}))
    }

    componentDidMount(){
        this.fetchGIFs()
    }

    

    render(){
        return(
            <div>
            < GifSearch fetchGIFs={this.fetchGIFs}/>
            < GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer