import React from 'react'
import Profile from '../components/Profile'
import Analytics from '../components/Analytics'
import About from '../components/About'
import Featured from '../components/Featured'
import Activity from '../components/Activity'

const Leftsidebar = () => {
  return (
    <div className='lg:w-[70%] md:w-[60%]'>
        <Profile/>
        <Analytics/>
        <About/>
        <Featured/>
        <Activity/>
    </div>
  )
}

export default Leftsidebar