import React from 'react'
import './Track.css'

function Track(props) {

  const addTrack = () => {
    props.onAdd(props.singleTrack);
  }

  const removeTrack = () => {
    props.onRemoval(props.singleTrack)
  }

  return (
    <div class="Track">
        <div class="Track-information">
          <h3>{props.singleTrack.name}</h3>
          <p>{props.singleTrack.artist} | {props.singleTrack.album}</p>
        </div>
        {props.isRemoval ? (<button class="Track-action" onClick={removeTrack}>-</button>) : (<button class="Track-action" onClick={addTrack}>+</button>)}
    </div>
  )
}

export default Track