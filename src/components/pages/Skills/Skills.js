import * as React from "react";
import "./Skills.css";
import { GrCss3, GrHtml5 } from "react-icons/gr";
import { DiJavascript1 } from "react-icons/di";
import { SiGoland, SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import image from "./PROGRAMMER.png"
const Skills = () => {
  return (
    <>
    <div className='inner_skill'>
      <div className="header_skill">
        <h1>My Skills</h1>
      </div>
      <div className="container_skill">
        <div className="skill-box">
          <div className="skill-title">
            <div className="img-skill">
              <GrHtml5 className="skill-icon" />
            </div>
            <h3>Html5</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img-skill">
              <GrCss3 className="skill-icon" />
            </div>
            <h3>CSS</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img-skill">
              <DiJavascript1 className="skill-icon" />
            </div>
            <h3>JavaScript</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img-skill">
              <FaReact className="skill-icon" />
            </div>
            <h3>React</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img-skill">
              <SiGoland className="skill-icon" />
            </div>
            <h3>Golang</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img-skill">
              <SiMongodb className="skill-icon" />
            </div>
            <h3>Mongodb</h3>
          </div>
        </div>
        <div>
          <img src = {image}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
