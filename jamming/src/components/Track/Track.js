import React from 'react'
import './Track.css'

function Track(props) {
  return (
    <div class="Track">
        <div class="Track-information">
          <h3>{props.singleTrack.name}</h3>
          <p>{props.singleTrack.artist} | {props.singleTrack.album}</p>
        </div>
        <button class="Track-action">{/* <!-- + or - will go here --> */}</button>
    </div>
  )
}

export default Track