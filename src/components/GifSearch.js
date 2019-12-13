import React from 'react'

export default class GifSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }
    
    render() {
        return (
            <form onSubmit={event => this.props.setSearchTerm(event, this.state.searchTerm)}>
                <input onChange={this.handleInputChange} type="text" name="search" value={this.state.searchTerm}></input>
                <input type="submit" value="Search Gifs"></input>
            </form>
        )
    }
}