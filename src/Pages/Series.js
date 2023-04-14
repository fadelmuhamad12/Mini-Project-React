import React from 'react'
import Favorite from '../components/Favorite'
import NavigationBar from '../components/NavigationBar'
import TopRatedMovies from '../components/TopRatedMovies'

const Series = () => {
  return (
    <div className='seriesPage'>
        <NavigationBar />
        <TopRatedMovies />
        <Favorite />
    </div>

  )
}

export default Series
