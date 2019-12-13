import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifUrls: [],
            searchTerm: 'dolphin'
        }
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=Jz6E9HNPOohBm8nM2ZIhGDk4eaUSd8E8&rating=g`)
        .then(resp => resp.json())
        .then(gifs => {
            let gifUrls = gifs.data.map(gif => gif.images.original.url)
            this.setState({gifUrls: gifUrls})
        })
    }

    componentDidUpdate() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=Jz6E9HNPOohBm8nM2ZIhGDk4eaUSd8E8&rating=g`)
        .then(resp => resp.json())
        .then(gifs => {
            let gifUrls = gifs.data.map(gif => gif.images.original.url)
            this.setState({gifUrls: gifUrls})
        })
    }

    setSearchTerm = (event, term) => {
        event.preventDefault()
        this.setState({searchTerm: term})
    }
    
    render() {
        return (
            <div>
                <GifSearch setSearchTerm={this.setSearchTerm}/>
                <GifList gifUrls={this.state.gifUrls}/>
            </div>
        )
    }
}