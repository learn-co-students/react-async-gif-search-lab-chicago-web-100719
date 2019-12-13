import React from 'react'

class GifSearch extends React.Component{
    constructor(){
        super()
        this.state={
            input: ''
        }
    }

    handleChange=(event)=>{
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.fetchData(this.state.input)
    }

    render(){
        return <form className="submitForm" onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" value={this.state.input}/>
            <input type='submit'/>
        </form>
    }

}

export default GifSearch