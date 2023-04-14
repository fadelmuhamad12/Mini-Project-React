import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Upcoming from '../components/Upcoming'
import FavoriteFull from '../components/FavoriteFull'

const Movies = () => {
  return (
    <div className='moviesPage'>
      <NavigationBar />
      <Upcoming />
      <FavoriteFull />

    </div>
   
  )
}

export default Movies
