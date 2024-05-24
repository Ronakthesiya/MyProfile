import React, { useEffect } from 'react'
import './Contact.css'
import mailIcon from '../../assets/mail.png'
import gitIcon from '../../assets/github.png'
import linkedIcon from '../../assets/linkedin.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    AOS.init({duration: 1500 , delay: 100});
  }, [])

  return <footer id='contact' className='footerContainer'>
    <div className='footerText' data-aos="fade-right">
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className='footerLinks' data-aos="fade-left">
      <li className='footerLink'>
        <img src={mailIcon} alt='Loading...'/>
        <a href='mailto:ronakthesiya2004@gmail.com'>ronakthesiya2004@gmail.com</a>
      </li>
      <li className='footerLink'>
        <img src={linkedIcon} alt='Loading...'/>
        <a href='https://in.linkedin.com/in/ronak-thesiya-376174285'>linkedin.com/RonakThesiya</a>
      </li>
      <li className='footerLink'>
        <img src={gitIcon} alt='Loading...'/>
        <a href='https://github.com/Ronakthesiya'>github.com/RonakThesiya</a>
      </li>
    </ul>
  </footer>
}

export default Contact