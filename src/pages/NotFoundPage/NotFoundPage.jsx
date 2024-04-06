import React from 'react'
import './NotFoundPage.style.css'

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <img src="https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg" alt="Logo" />
      <h1>Whoops, Something went wrong ...</h1>
      <p>We're having trouble playing this title right now. Plese try agin later or select a different title.</p>
      <h3>Error Code: 404 Not Found</h3>
    </div>
  )
}

export default NotFoundPage