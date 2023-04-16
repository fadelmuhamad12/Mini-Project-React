import React from 'react'
import FavoriteFull from '../components/FavoriteFull'
import NavigationBar from '../components/NavigationBar'
import TopRatedMoviesFull from '../components/TopRatedMoviesFull'

const Series = () => {
  return (
    <div className='seriesPage'>
        <NavigationBar />
        <TopRatedMoviesFull />
        <FavoriteFull />
    </div>

  )
}

export default Series
