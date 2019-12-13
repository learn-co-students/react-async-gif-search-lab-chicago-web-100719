import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends React.Component {

    constructor(){
        super()
        this.state={
            gifs:[]
        }
    }

    fetchData =(input='dolphin')=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=wxAvLAUnfxLaC3JyanQLECSsJHmIomex&limit=3&rating=g`)
        .then(resp => resp.json())
        .then(data => {
                this.setState({
                    gifs: data.data
                })
            })
    }
    componentDidMount(){
        this.fetchData()
    }


    render(){
        return <div className="listContainer">
            <GifList gifs={this.state.gifs}/>
            <GifSearch fetchData={this.fetchData}/>
        </div>
    }

 
}
export default GifListContainer