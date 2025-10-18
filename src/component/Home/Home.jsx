import React, { useEffect } from 'react'
import './Home.css'
import MyImage from '../../assets/myImage3.png'
import MyImage2 from '../../assets/myImage2.png'
import School from '../../assets/tapovan.jpg'
import University from '../../assets/DU.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import ReactImg from '../../assets/React.png';
import ASPNET from '../../assets/ASPNET2.png';
import NodeImg from '../../assets/node.png';
import CSSImg from '../../assets/CSS.png';
import Angular from '../../assets/Angular.png';
import HTMLImg from '../../assets/Html.png';
import JavaScriptImg from '../../assets/JS.png';
import MongoDBImg from '../../assets/Mongo.png';
import MySQLImg from '../../assets/SQL.png';
import FlutterImg from '../../assets/flutter.png';
import TypeScriptImg from '../../assets/TS.png';
import JavaImg from '../../assets/Java.png';
import PythonImg from '../../assets/python.png';
import CImg from '../../assets/C.png';



const Home = () => {

  const skills = [
    { title: 'Java', imageSrc: JavaImg },
    { title: 'Python', imageSrc: PythonImg },
    { title: 'React.js', imageSrc: ReactImg },
    { title: 'Node.js', imageSrc: NodeImg },
    { title: 'ASP.NET core', imageSrc: ASPNET },
    { title: 'Angular', imageSrc: Angular },
    { title: 'CSS', imageSrc: CSSImg },
    { title: 'HTML', imageSrc: HTMLImg },
    { title: 'JavaScript', imageSrc: JavaScriptImg },
    { title: 'MongoDB', imageSrc: MongoDBImg },
    { title: 'MySQL', imageSrc: MySQLImg },
    { title: 'TypeScript', imageSrc: TypeScriptImg },
    { title: 'C', imageSrc: CImg }
  ];

  useEffect(() => {
    AOS.init({duration: 1500 , delay: 100});
  }, [])

  return (
    <>
    <section className='container'  id='home'>
      <div className='content' data-aos="fade-right">
        <h1 className='title1'>Hi, I'm Ronak</h1>
        <p className='desc'>
        Enthusiastic and versatile developer with expertise in a wide range of technologies, including  React.js, Angular, Node.js, MongoDB, 
MySQL and Flutter
        </p>
        <a className='contactBtn' href='mailto:ronakthesiya2004@gmail.com'>Contact Me</a>
      </div>
      <img src={MyImage} alt='My Image' className='myImage' data-aos="zoom-in"/>
      <div className='topBlur'/>
      <div className='bottomBlur'/>
    </section>


    <section className='container2' id="education">
      <h2 className='title2' data-aos="fade-right">Education</h2>
      <div className='content2'>
        <img className='myImage2' src={MyImage2} alt='Image is Loading...' data-aos="zoom-in-right"/>
        <ul className='educationItems'>
          <li className='educationItem' data-aos="fade-left">
            <img style={{'width':'100px'}} src={University} alt='Image is Loading...' data-aos="flip-right"/>
            <div className='educationItemsText'>
              <h3>B.Tech - CSE</h3>
              <p> Darshan University, Rajkot </p>
              <p> Semester - 7 | CGPA:9.35 </p>
            </div>
          </li>
          <li className='educationItem' data-aos="fade-left">
            <img style={{'width':'100px'}} src={School} alt='Image is Loading...' data-aos="flip-right"/>
            <div className='educationItemsText'>
              <h3>HSC</h3>
              <p> Gujarat Board | Tapovan School, Rajkot </p>
              <p> Percentage: 81%</p>
            </div>
          </li>
          <li className='educationItem' data-aos="fade-left">
            <img style={{'width':'100px'}} src={School} alt='Image is Loading...' data-aos="flip-right"/>
            <div className='educationItemsText'>
              <h3>SSC</h3>
              <p> Gujarat Board | Tapovan School, Rajkot </p>
              <p> Percentage: 85%</p>
            </div>
          </li>
        </ul>
      </div>
    </section>



    <section className='container3' id='skill'>
      <h2 className='title3' data-aos="fade-right">Skill</h2>
      <div className='content3'>
        <div className='skills'>
          {
            skills.map((skill,id)=>{
              return <div key={id} className='skill' data-aos="zoom-in-left">
                  <div className='skillImage'>
                    <img src={skill.imageSrc} alt='Image is Loading...'/>
                  </div>
                  <p>{skill.title}</p>
                </div>
            })
          }
        </div>
      </div>
      <div className='thirdBlur'/>
      <div className='fourthBlur'/>

    </section>


    </>
  )
}

export default Home