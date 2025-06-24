import React from 'react'
import Urlsection from '../components/Urlsection'
import ViewedSection from '../components/ViewedSection'
import PeopleYoumayKnow from '../components/PeopleYoumayKnow'

const Rightsidebar = () => {
  return (
    <div className='lg:w-[30%] md:w-[40%]'>
        <Urlsection/>
        <ViewedSection/>
        <PeopleYoumayKnow/>
    </div>
  )
}

export default Rightsidebar