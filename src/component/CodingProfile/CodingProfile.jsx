import React, { useEffect } from 'react';
import './CodingProfile.css';
import lc from '../../assets/Leetcode.png'
import cf from '../../assets/codeforces.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const CodingProfile = () => {
  useEffect(() => {
    AOS.init({duration: 1500 , delay: 100});
  }, [])

  return (
    <section id="codingprofile" className='codeContainer'>
      <h2 className='codeTitle' data-aos="fade-right">Coding Profile</h2>
      <div className='codeContact'>
        <div className='code1'data-aos="zoom-in-up">
        <div className='imgName'>
          <img src={lc} alt='Img loding...'/>
          <h3 className='codeName'>LeetCode</h3>
        </div>
        <div className="codeChart">
          <div className='codelink'>
            Profile : <a href='https://leetcode.com/u/Ronak_Thesiya/'>Ronak_Thesiya</a>
            <br/>
            Contest Rating : 1689
            <br/>
            Global Ranking : 70,865
            <br/>
            Problem solved : 559
          </div>
        </div>
        </div>

        <div className='code1' data-aos="zoom-in-up">
          <div className='imgName'>
            <img src={cf} alt='Img loding...'/>
            <h3 className='codeName'>Codeforces</h3>
          </div>
          <div className="codeChart">
            <div className='codelink'>
              Profile : <a href='https://codeforces.com/profile/Ronak_Thesiya'>Ronak_Thesiya</a>
              <br/>
              Contest Rating : 1029
              <br/>
              Problem Solved : 252
              <br/>
            </div>
          </div>
        </div>

      </div>

      <div className='resume' data-aos="zoom-out">
        <h2 className='resumeTitle'>Resume</h2>
        <div className='resumeLink'>
          <a href='Ronak_Thesiya.pdf' download="RonakThesiya.pdf">Download</a>
        </div>
      </div>
    </section>
  );
};

export default CodingProfile;
