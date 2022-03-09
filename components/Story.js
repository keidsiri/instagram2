import React from 'react'

function Story({img, username}) {
  return (
    <div>
      <img src={img} alt="image"/>
      <p>{username}</p>
    </div>
  )
}

export default Story