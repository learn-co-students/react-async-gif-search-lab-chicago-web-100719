import React from 'react'

class GifSearch extends React.Component{
    state ={
        query:""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.query)
        event.target.reset()
    }

    render(){
        return  <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={event => this.setState({query: event.target.value})}/>
                        <input type="submit"/>
                    </form>
                </div>
    }
}

export default GifSearch