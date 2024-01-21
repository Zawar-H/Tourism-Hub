import React from 'react'
import { useState } from 'react'

export default function trafficlight() {

    const [colour, setColour] = useState('red')

    function change() {
        if (colour === 'red'){
            setColour('yellow')
        } else if (colour === 'yellow'){
            setColour('green')
        } else if (colour === 'green'){
            setColour('red')
        }
    }

  return (
    <div className='flex justify-center'>
        {colour === 'red' ?
        <div className='trafficlight red'></div> : 
        <div className='trafficlight red off'></div>}

        {colour === 'yellow' ?
        <div className='trafficlight yellow'></div> : 
        <div className='trafficlight yellow off'></div>}

        {colour === 'green' ?
        <div className='trafficlight green'></div> : 
        <div className='trafficlight green off'></div>}

        <button onClick={change}>Next colour</button>
    </div>
  )
}
