import React from 'react'

import './styles/Loader.css'

function Loader () {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader