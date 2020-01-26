import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()

        this.state = {
            search: ""
        }
    }

handleInputChange = (event) => {
    this.setState({
        search: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.search) return
        this.props.fetchfunc(this.state.search)
}

    render () {
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>Search: 
                    <input 
                        id="search"
                        type="text"
                        name="search"
                        value={this.state.search}
                        onChange={event=>this.handleInputChange(event)}
                    />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            )
        }
}

