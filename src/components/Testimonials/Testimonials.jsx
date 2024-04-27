import React, { useRef } from 'react' 
import './Testimonials.css'
import nexticon from'../../assets/next-icon.png'
import backicon from'../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'


const Testimonials = () => {
  
  const slider = useRef();
  let tx=0;

  const slideForward= ()=>{
    if(tx >-50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward= ()=>{
    if(tx<0){
      tx +=25;
    }
    slider.current.style.transform =`translateX(${tx}%)`;
  }


  return (
    <div className='testimonials' id='testimonials'>
      <img src={nexticon} alt="" className='next-btn' onClick={slideForward} />

      <img src={backicon} alt=""  className='back-btn' onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Amy Clinton</h3>
                  <span>Educore</span>
                </div>
              </div>
              <p>"I've found a nurturing environment that fosters both academic excellence and personal growth. The supportive faculty, diverse student body, and myriad of opportunities have helped me discover my passion and prepare for a bright future ahead. I am proud to be a part of it."</p>
            </div>
          </li>
          <li>
          <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Phil Johnson</h3>
                  <span>Educore</span>
                </div>
              </div>
              <p>"My time at Educore has been nothing short of inspiring. The faculty, community, and learning environment have equipped me with the tools to excel both academically and personally. I am grateful for the opportunities and growth I've experienced here."</p>
            </div>
          </li>
          <li>
          <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>David Jacob</h3>
                  <span>Educore</span>
                </div>
              </div>
              <p>"Choosing Educore was one of the best decisions I've made. The engaging classes, skilled professors, and campus life have made my educational journey truly fulfilling. I've expanded my knowledge and developed valuable skills and lifelong friendships that will stay with me forever."</p>
            </div>
          </li>
      
          <li>
          <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Serena Jacks</h3>
                  <span>Educore</span>
                </div>
              </div>
              <p>"Studying at Educore  has been a transformative journey. The courses, supportive faculty, and vibrant campus culture have truly enriched my academic experience. I've gained not only knowledge  and  skills but also friendships that prepare me for success in future."</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials