import React from 'react'

const spinner = {
  position: 'fixed',
  top: '50%',
  left: '50%',
}

function Spinner() {
    return (
<div className="d-flex justify-content-center" style={spinner}
>
  <div className="spinner-border" role="status">
    <span className="sr-only" >Loading...</span>
  </div>
</div>
    )
}

export default Spinner
