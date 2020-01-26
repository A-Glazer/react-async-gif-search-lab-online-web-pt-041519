import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

    state = {
        gifArray: [],
        // query: dolphin
    }

    componentDidMount(){
        this.fetchFunc("dolphins")
    }

    fetchFunc(query) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then((info) => {
            this.setState({gifArray: info.data.map((gifs) => ({
                url: gifs.images.original.url
            })
            )
        })
        }
        ) 
    }


    render () {
        // console.log("gifArray is", this.state.gifArray)
        return (
            <div>
            < GifSearch fetchfunc={this.fetchFunc.bind(this)} />
            < GifList pics={this.state.gifArray} />
            </div>
            )
    }
}