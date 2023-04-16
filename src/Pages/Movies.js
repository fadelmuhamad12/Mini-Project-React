import React from 'react'
import NavigationBar from '../components/NavigationBar'
import FavoriteFull from '../components/FavoriteFull'
import UpcomingFull from '../components/UpcomingFull'

const Movies = () => {
  return (
    <div className='moviesPage'>
      <NavigationBar />
      <UpcomingFull />
      <FavoriteFull />

    </div>
   
  )
}

export default Movies
