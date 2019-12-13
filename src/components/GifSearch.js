import React, {Component} from 'react'

class GifSearch extends Component {

    state= {
        userInput: ""
    }

    handleChange = event => {
        event.persist()
        this.setState({userInput: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state.userInput)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="userInput" value={this.state.userInput} onChange={this.handleChange}/>
                <input type="submit" value="Find Gifs"></input>
            </form>
        )
    }
}

export default GifSearch;