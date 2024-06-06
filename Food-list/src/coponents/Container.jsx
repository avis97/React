import React from 'react'

function Container(props) {
  return (
    <div className='con'>
        {props.children}
    </div>
  )
}

export default Container