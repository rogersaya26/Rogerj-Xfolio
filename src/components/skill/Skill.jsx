import React from 'react'
import './Skill.css'
import JsLogo from '../images/javascript-logo.png'
import HtmlLogo from '../images/html-logo.png'
import CssLogo from '../images/css-logo.png'
import ReactLogo from '../images/react-logo.png'
import StyledComponentsLogo from '../images/styled-components-logo.png'
import SqlLogo from '../images/sql-logo.png'
import BootstrapLogo from '../images/bootstrap-logo.png'
import GitLogo from '../images/git-logo.png'

const Skill = () => {
  return (
    <div className='skill_container' >
      <h1>Skills</h1>

      <div className='logo_container' >

        <div className='logo' >
          <img src={HtmlLogo} alt="Html5 Logo" />
          <h2>HTML5</h2>
        </div>

        <div className='logo' >
          <img src={CssLogo} alt="Css3 Logo" />
          <h2>CSS3</h2>
        </div>

        <div className='logo' >
          <img src={JsLogo} alt="Javascript Logo" />
          <h2>Javascript</h2>
        </div>

        <div className='logo' >
          <img src={ReactLogo} alt="React.js Logo" />
          <h2>React.Js</h2>
        </div>

        <div className='logo_container' >

        <div className='logo' >
          <img src={StyledComponentsLogo} alt="Styled-Components Logo" />
          <h2>Styled</h2>
        </div>

         <div className='logo' >
          <img src={BootstrapLogo} alt="Bootstrap5 Logo" />
          <h2>Bootstrap5</h2>
        </div>

        <div className='logo' >
          <img src={SqlLogo} alt="Styled-Components Logo" />
          <h2>Sql</h2>
        </div>

         <div className='logo' >
          <img src={GitLogo} alt="Git Logo" />
          <h2>Git</h2>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Skill