
import React from 'react'

function Main(props) {
  return (
  <>
  <li className='todoitems'>
    <span> 
    <input type="checkbox">
    </input>
    <span className='todo-text'>{props.text}</span>
    </span>
    <p>...</p>
     
  </li>
  </>
  )
}

export default Main