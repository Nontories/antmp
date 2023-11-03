import React from 'react'
import './style.scss'
import BrandContainer from '../BrandContainer'
import LevelSection from '../LevelSection'

const SidebarImageGenerations = () => {
  return (
    <div className='layout-sidebar'>
      <div className='sidebar-container'>

        <BrandContainer />

        <LevelSection />

        <hr></hr>

      </div>
    </div>
  )
}

export default SidebarImageGenerations