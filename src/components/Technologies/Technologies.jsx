//import React from 'react'
import './Technologies.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import Services_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon.svg'
import react_icon from '../../assets/react.svg';
import typescript from '../../assets/typescript.svg';
import mysql from '../../assets/mysql.svg';
import css from '../../assets/css.svg';
import html from '../../assets/html.svg';
import nodejs from '../../assets/nodejs.svg';
import javascript from '../../assets/javascript.svg';

const technologies = () => {
  return (
    <div id='technologies' className='technologies'>
        <div className="technologies-title">
            <h1>Technologies</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="technologies-icons-container">
            <div className="icon-wrapper">
            <img src={react_icon} alt="React" className="icon" />
            </div>
            <div className="icon-wrapper">
            <img src={typescript} alt="React" className="icon" />
            </div>
            <div className="icon-wrapper">
            <img src={mysql} alt="React" className="icon" />
            </div>
            <div className="icon-wrapper">
            <img src={html} alt="React" className="icon" />
            </div>
            <div className="icon-wrapper">
            <img src={css} alt="React" className="icon" />
            </div> 
            <div className="icon-wrapper">
            <img src={nodejs} alt="React" className="icon" />
            </div> 
            <div className="icon-wrapper">
            <img src={javascript} alt="React" className="icon" />
            </div>                    
        </div>

         {/* <div className="services-container">
//             {Services_Data.map((service, index)=>{
//                 return <div key={index} className="services-format">
//                     <h3>{service.s_no}</h3>
//                     <h2>{service.s_name}</h2>
//                     <p>{service.s_desc}</p>
//                     <div className="services_readmore">
//                         <p>Read More</p>
//                         <img src={arrow_icon} alt="" />
//                     </div>
//                 </div>
//             })}
//         </div> */}
    </div>
  )
}

export default technologies










// import './Technologies.css';
// import react_icon from '../../assets/react.svg';
// import typescript from '../../assets/typescript.svg';
// import mysql from '../../assets/mysql.svg';
// import css from '../../assets/css.svg';
// import html from '../../assets/html.svg';
// import nodejs from '../../assets/nodejs.svg';
// import javascript from '../../assets/javascript.svg';

// const Technologies = () => {
//   return (
//     <div id='technologies' className="technologies">
//         <h1 className="technologies-title">Technologies</h1>
        
//         <div className="technologies-icons-container">
//             <div className="icon-wrapper">
//             <img src={react_icon} alt="React" className="icon" />
//             </div>
//             <div className="icon-wrapper">
//             <img src={typescript} alt="React" className="icon" />
//             </div>
//             <div className="icon-wrapper">
//             <img src={mysql} alt="React" className="icon" />
//             </div>
//             <div className="icon-wrapper">
//             <img src={html} alt="React" className="icon" />
//             </div>
//             <div className="icon-wrapper">
//             <img src={css} alt="React" className="icon" />
//             </div> 
//             <div className="icon-wrapper">
//             <img src={nodejs} alt="React" className="icon" />
//             </div> 
//             <div className="icon-wrapper">
//             <img src={javascript} alt="React" className="icon" />
//             </div>                    
//       </div>
//     </div>
//   );
// };

// export default Technologies;

