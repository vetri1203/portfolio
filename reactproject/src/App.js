import React, { useEffect } from 'react';
import "./Style/style.css";

//importing images

import profile from "./images/vetrivel profile.jpeg";
import internet from "./images/internet.gif";
import java from "./images/java.jpeg";
import sql from "./images/sql.png";
import mongo from "./images/mongodb.png";
import express from "./images/express.png";
import react from "./images/reactimg.png";
import node from "./images/node.png";
import html from "./images/html.png";
import css from "./images/css.png";
import atlas from "./images/atlas.png";
import postman from "./images/postman.png";
import vscode from "./images/vscode.jpeg";
import gymx from './images/gymx.png';

import github from './images/git hub.png';


import linkedIn from './images/linkedin.png';
import twitter from './images/twitter.png';
import insta from './images/instagram.png';
import  gitlogo from './images/github.png';
// import gmail from './images/gmail.png';



const alert = () => {
};
//main
const App = () => {
  useEffect(() => {
    alert('Page loaded!'); 
  }, []);
  

  
  return (
    <>
      
      <div>
        <img src={internet} alt="image not found" className="internet" />
      </div>

      <div id="home">
        <img className="profile" id="profile" src={profile} alt="vetrivel" />

        <div className="home">
          <h1 className="fname"> Hii... This is Vetrivel Jaganathan</h1>

          <span className="about">
            {" "}
            Seeking the role of an Engineer where I can contribute towards the
            organizational goals through my technical skills and knowledge
            acquired by pursuing a degree in Engineering.
          </span>
        </div>
      </div>

      <h1 className="temp">Qualification</h1>
      <div id="education">
        <div className="clg">
          <span className="deg">
            <h3 className="degh">Bachelor's Degree </h3>
          </span>
          <p className="cls">
            I am currently pursuing my Bachelor's degree in Computer and
            Communication at <b>Sri Eshwar College of Engineering </b>with
            overall CGPA of 8.02{" "}
          </p>
        </div>

        <div className="hsc">
          <h3 className="sclh">HSC</h3>
          <p className="clss1">
            {" "}
            I am completed my schooling in <b>
              Kongu Matric.her.sec.school
            </b>{" "}
          </p>
        </div>

        <div className="sslc">
          <h3 className="sslch">SSLC</h3>
          <p className="clss2">
            I am completed my schooling in <b>Kongu Matric.her.sec.school</b>{" "}
          </p>
        </div>
      </div>

      <div className="skills">
        <h1 className="skillsName">Skills</h1>

        <div className="skillsImg">
          <img className="java" id="java" src={java} alt="java" />
          <img className="sql" id="sql" src={sql} alt="sql" />
          <img className="mongodb" id="mongodb" src={mongo} alt="MongoDb" />
          <img className="express" id="express" src={express} alt="express" />
          <img className="react" id="react" src={react} alt="react" />
          <img className="node" id="node" src={node} alt="Node" />
          <img className="html" id="html" src={html} alt="HTML" />
          <img className="css" id="css" src={css} alt="CSS" />
        </div>
      </div>

      <div className="tool">
        <h1 className="toolName">Tolls</h1>

        <div className="toolsImg">
          <img className="atlas" id="atlas" src={atlas} alt="atlas" />
          <img className="postman" id="postman" src={postman} alt="Postman" />
          <img className="vscode" id="vscode" src={vscode} alt="Vs Code" />
          <img className="github" id="github" src={github} alt="git hub" />

        </div>
      </div>

      <div className="project">
        <h1 className="projectName">Projects</h1>

        <div className="project1">
          <h2 className="exploreName">Explore</h2>
          <p className="abtExplore">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Explore is a web application that allows users to post images of
            tourist attractions, see them, and then comment on them. The best
            website tool for discovering top tourist destinations. I helped with
            the backend construction of a web application that made it easier to
            explore tourist attractions. The login and signup schemas were
            designed and implemented with significant assistance from me,
            ensuring the validation procedures. Multer, a middleware for
            managing multipart/form-data in Node.js and Express.js, was also
            used to successfully integrate the file uploading capability.
          </p>
          <h3 className="toolandtech">Tools&Technology</h3>
          <div className="techUsed">
            <span>MERN Stack</span> <br />
            <span>Github</span> <br />
            <span>vscode</span> <br />
            <span>MongoDb Atlas</span> <br />
          </div>
        </div>

        <div className="project2">
          <h2 className="eventName">Event Management</h2>
          <p className="abtEvent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            A comprehensive, user-friendly solution called the Event Management
            App was developed to make organizing, planning, and executing events
            easier. This software offers a variety of features, including the
            ability to arrange events, select locations, organize vendors. The
            program assists event organizers in properly managing every aspect
            of event planning, ensuring faultless coordination and a delightful
            guest experience. It offers great powers and a straightforward UI.
            By employing the most modern technology, the Event Management App
            transforms the way events are managed, making it a crucial tool for
            event managers and organizers.
          </p>
          <h3 className="toolandtech">Tools&Technology</h3>
          <div className="techUsed">
            <span>MERN Stack</span> <br />
            <span>Github</span> <br />
            <span>vscode</span> <br />
            <span>MongoDb Atlas</span> <br />
          </div>
        </div>
      </div>

      <div className="internship">
        <h1 className='internName'>Internship</h1>
        <img className="gymx" id="gymx" src={gymx} alt="Postman" />

        <h2 className="companyName">
          GyanMatrix Technologies Pvt. Ltd. , Coimbatore
        </h2>
        <p className="details">
        <span className="time"><b>Duration </b><br/>
        <b>No.of.Projects Worked </b> <br/>
        </span> 
        <span className="col"><b>:</b><br/>
        <b>:</b></span>
        <span className="ans">4 Months <br/> 2</span>
        </p>
        
        
      </div>

      <div className='contact'>
      <h1 className='contactName'>To Contact</h1>
        <div className='contactImg'>
          <a href='https://www.linkedin.com/in/vetrivel-jaganathan/'><img className='linkedinlogo' src={linkedIn}/></a>
          <a href='https://github.com/vetri1203'><img className='githublogo' src={gitlogo}/></a>
          <a href='https://www.instagram.com/vetrivel_jaganathan/'><img className='instalogo' src={insta}/></a>
          <a href='https://twitter.com/VetrivelJagana3'><img className='twitter' src={twitter}/></a>



        </div>
      </div>

        <a className='back' href=''>Back to home</a>
      {/* </div> */}
    </>
  );
};

export default App;
