import React from "react";
import './styles/Skills.css'

const Skills = () =>  {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <ul className="list">
            <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MariaDB
            </span>
          </li>
            </ul>
        </div>
    )
}

export default Skills