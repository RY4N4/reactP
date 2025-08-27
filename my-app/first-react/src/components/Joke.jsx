import React from 'react'

export default function Joke(props){
    return(
        <>
        {props.setup && <p className='setup'>Setup : {props.setup}</p>}
        <p className='punchline' ><strong>Punchline : </strong>{props.punchline}</p>
        {props.upVotes && <p><i>UpVotes: {props.upVotes}</i></p>}
        <hr></hr>
        </>
    )
}
