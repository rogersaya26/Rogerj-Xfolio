import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './Cards.css'

import DogsApiImg from '../../images/app-thedog-api.png'
import TheBreakingBadApiImg from '../../images/app-thebreakingbad-api.png'
import AppTareas from '../../images/app-tareas.png'
import XfolioApp from '../../images/xfolio-app.png'
import FrontEmployeeList from '../../images/front-react-employees-list.png'
import ReduxReqres from '../../images/react-redux-api-reqres.png'

/* import Img1 from '../../images/image1.jpg'
import Img2 from '../../images/image2.jpg'
import Img3 from '../../images/image3.jpg' */

  const cards =[
    {
      id: 1,
      title: "React - Spring-Boot - MySqL CRUD List Employees",
      text: "Site React.js to Front-End, Hook, Axios, React-Router-Dom, BootStrap and SpringBoot to Back-End, Jpa (Hibernate), MySqL DataBase, Deployed in Heroku ",
      image: FrontEmployeeList,
      url: "https://react-front-employee.herokuapp.com/"
    },
    {
      id: 2,
      title: 'App personal task manager',
      text: "This Site in React.js and implement many Hooks and Bootstrap5",
      image: AppTareas,
      url: "https://pedantic-benz-3ef861.netlify.app"
    },
    {
      id: 3,
      title: 'Breaking Bad Api',
      text: "Site React.js consume Api Fetch: https://breakingbadapi.com/documentation/",
      image: TheBreakingBadApiImg,
      url: "https://condescending-hypatia-8f5346.netlify.app"
    },
    {
      id: 4,
      title: "My Portfolio",
      text: "Site React.js: Styled-Components, Animate.css, Bootstrap5, React-Router-Dom, Prop-Types, Ionic, Deployed in Heroku",
      image: XfolioApp,
      url: "https://rogerj-xfolio.herokuapp.com/"
    },
    {
      id: 5,
      title: 'The Dog Api',
      text: "Site React.js consume Api Fetch: https://docs.thedogapi.com/",
      image: DogsApiImg,
      url: "https://brave-varahamihira-e148be.netlify.app"
    },
    {
      id: 6,
      title: '',
      text: "React-Redux consume API Reqres.in Take List Persona",
      image: ReduxReqres,
      url: "https://silly-beaver-1d3561.netlify.app"
    }
    
  ]

const Cards = () => {
  return (
    <div className="container d-flex justify-content-center ">
      <div className="row">
        {
          cards.map((card) => (
            <div className="col-md-4 mt-5 mb-5"  key={card.id}>
          <Card title={card.title} text = {card.text} imagesource = {card.image} url ={card.url} />
        </div>
          ))
        }
        

        
      </div>
    </div>
  );
};

export default Cards;
