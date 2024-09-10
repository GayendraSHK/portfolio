//import React from 'react'
import './Technologies.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import Services_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

const technologies = () => {
  return (
    <div id='technologies' className='technologies'>
        <div className="technologies-title">
            <h1>Technologies</h1>
            <img src={theme_pattern} alt="" />
        </div>
        {/* <div className="services-container">
            {Services_Data.map((service, index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services_readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div> */}
    </div>
  )
}

export default technologies