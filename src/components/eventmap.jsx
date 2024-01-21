import { constrainedMemory } from 'process'
import React from 'react'

export default function eventmap(props) {
  return (
    <>
      <div className='mapsection'>
      <iframe className= "map" src={props.coordinate} height="600" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
