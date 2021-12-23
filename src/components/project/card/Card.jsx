import React from 'react'
import PropTypes from 'prop-types'



const Card = ({title,text,imagesource,url}) => {
  return (
    <div className='card text-center animate__animated animate__bounce ' >
     
     <div className='overflow' >
       <img src={imagesource} alt="" className='card-img-top' />
       </div>
      
      <div className='card-body' >
        <h4 className='card-title text-secondary' >{title}</h4>
        <p className='card-text' >{text ? text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, alias id quas qui sit cum odit dicta quibusdam officiis sint laboriosam modi, voluptatum, sed possimus? Adipisci nostrum recusandae sunt mollitia!" }</p>
        <a href={url} target="_blank" rel='noreferrer' className='btn btn-outline-secondary reunded-0' >Go to this Website</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  imagesource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Card