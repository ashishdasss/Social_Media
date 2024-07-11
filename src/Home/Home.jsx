import React from 'react'
import './Home.scss'
import Stories from '../Component/stories/Stories'
import Posts from '../Component/posts/Posts'


const Home = () => {
  return (
    <div className='home'>
      <Stories />
      <Posts/>
    </div>
  )
}
export default Home

