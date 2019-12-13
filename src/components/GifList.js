import React from 'react'

class GifList extends React.Component {

    renderGifs=()=>{
        
        return this.props.gifs.map(gif =>{
            const url=gif.images.original.url
            return <img src={url}/>
        } )
    
    }

    render(){
        return (<div>
            {this.renderGifs()}
        </div>)
    }

}

export default GifList