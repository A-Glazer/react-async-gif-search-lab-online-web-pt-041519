import React from 'react'


const GifList = props => {
    return(
    props.pics.map((pic) =>
        <div>
            <img src={pic.url} />
        </div>
    )
        // same as below ->
        // const GifList = ({ pics }) => <div>{ pics }</div>
        
        )
}



export default GifList