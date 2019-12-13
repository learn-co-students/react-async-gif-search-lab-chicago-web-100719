import React from 'react'

class GifSearch extends React.Component {

    constructor(){
        super()

        this.state = {
            query: ''
        }
    }

    handleSearch = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }


render(){
    return <div>
        <h3>Seacrh</h3>
        <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.query} onChange={this.handleSearch}></input>
            <button type='submit'>Submit </button>
        </form>
    </div>
}
}

export default GifSearch