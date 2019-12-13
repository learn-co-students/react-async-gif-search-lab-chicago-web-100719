import React, {Component} from 'react'

export default class GifSearch extends Component {

  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.props.handleSubmit
  // }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input onChange={this.props.handleChange} type="text" id="query" />
        <button type="submit">Search</button>
      </form>
    )
  }
}