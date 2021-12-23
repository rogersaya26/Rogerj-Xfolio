import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './Cards.css'


import Img1 from '../../images/image1.jpg'
import Img2 from '../../images/image2.jpg'
import Img3 from '../../images/image3.jpg'

  const cards =[
    {
      id: 1,
      title: 'Web',
      text: "React cposas y totas",
      image: Img1,
      url: "www.google.com"
    },
    {
      id: 2,
      title: 'App',
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolorum neque consequuntur ipsum sequi, rerum optio reiciendis, quasi explicabo doloremque blanditiis earum! Eum ipsum commodi doloribus aliquid enim nobis ut.",
      image: Img2,
      url: "www.google.com"
    },
    {
      id: 3,
      title: 'Blog',
      text: "Lorem ipsum dolor sit amet consectetur, rerum optio reiciendis, quasi explicabo doloremque blanditiis earum! Eum ipsum commodi doloribus aliquid enim nobis ut.",
      image: Img3,
      url: "https://www.google.com"
    }
  ]

const Cards = () => {
  return (
    <div className="container d-flex justify-content-center ">
      <div className="row">
        {
          cards.map((card) => (
            <div className="col-md-4" key={card.id}>
          <Card title={card.title} text = {card.text} imagesource = {card.image} url ={card.url} />
        </div>
          ))
        }
        
        
        
       
        
      </div>
    </div>
  );
};

export default Cards;
