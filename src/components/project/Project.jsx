import React from 'react'
import Cards from './card/Cards'
import './Project.css'

const Project = () => {
  return (
    <div className='project_container' id='projectid' >
      <h1>Projets</h1>
      <div>
      <Cards />
      </div>

    </div>
  )
}

export default Project
