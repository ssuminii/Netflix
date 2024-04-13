import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import './LoadingSpinner.style.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-aria">
        <ClipLoader
        color={'red'}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>
  )
}

export default LoadingSpinner