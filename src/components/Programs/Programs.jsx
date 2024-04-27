import React from 'react'
import './Programs.css'
import scholar1 from '../../assets/scholar1.jpg'
import scholar2 from '../../assets/scholar2.jpg'
import scholar4 from '../../assets/scholar4.jpg'
import programicon1 from '../../assets/program-icon-1.png'
import programicon2 from '../../assets/program-icon-2.png'
import programicon3 from '../../assets/program-icon-3.png'



const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="program">
            <img src={scholar1} alt="" />
            <div className="caption">
              <img src={programicon1} alt="" />
              <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={scholar4} alt="" id='scholar-4' />
            <div className="caption">
              <img src={programicon2} alt="" />
              <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={scholar2} alt="" />
            <div className="caption">
              <img src={programicon3}  alt="" />
              <p>Doctorate Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs