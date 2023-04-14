import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Upcoming from '../components/Upcoming'

const Movies = () => {
  return (
    <div className='moviesPage'>
      <NavigationBar />
      <Upcoming />
    </div>
   
  )
}

export default Movies
