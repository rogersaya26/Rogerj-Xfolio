import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './Cards.css'

import DogsApiImg from '../../images/app-thedog-api.png'
import TheBreakingBadApiImg from '../../images/app-thebreakingbad-api.png'

import Img1 from '../../images/image1.jpg'
/* import Img2 from '../../images/image2.jpg'
import Img3 from '../../images/image3.jpg' */

  const cards =[
    {
      id: 1,
      title: 'The Dog Api',
      text: "Site React.js consume Api Fetch: https://docs.thedogapi.com/",
      image: DogsApiImg,
      url: "https://brave-varahamihira-e148be.netlify.app"
    },
    {
      id: 2,
      title: 'App',
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolorum neque consequuntur ipsum sequi, rerum optio reiciendis, quasi explicabo doloremque blanditiis earum! Eum ipsum commodi doloribus aliquid enim nobis ut.",
      image: Img1,
      url: "www.google.com"
    },
    {
      id: 3,
      title: 'Breaking Bad Api',
      text: "Site React.js consume Api Fetch: https://breakingbadapi.com/documentation/",
      image: TheBreakingBadApiImg,
      url: "https://condescending-hypatia-8f5346.netlify.app"
    }
  ]

const Cards = () => {
  return (
    <div className="container d-flex justify-content-center ">
      <div className="row">
        {
          cards.map((card) => (
            <div className="col-md-4 "  key={card.id}>
          <Card title={card.title} text = {card.text} imagesource = {card.image} url ={card.url} />
        </div>
          ))
        }
        
        
        
       
        
      </div>
    </div>
  );
};

export default Cards;
