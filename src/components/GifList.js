import React from 'react'

export default class GifList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gifUrls: props.gifUrls 
        }
    }
    
    renderGifs = () => {
        return this.props.gifUrls.map(url => {
            return (
                <li>
                    <img src={url} alt=""/>
                </li>
            )
        })
    }

    render() {
        return (
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}