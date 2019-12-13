import React from 'react'

class GifList extends React.Component {

    renderGifs(){
      return  this.props.gifs.map(gif => {
            return <img src={gif.images.original.url} alt="gifs" />

        })
    }


    render(){
        return(<div>
            {this.renderGifs()}
        </div>)
    }
}

export default GifList