import React from 'react'

const Spinner = () => {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="spinner-grow text-primary spinner-grow-lg" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Spinner