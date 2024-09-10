import project1_img from '../assets/logo_blur.png'
import portfolio from '../assets/portfolio.png'

const mywork_data = [
    {
      w_name: 'Smart Auditorium',
      w_img: project1_img,
      w_desc: 'For this project, we have created an Arduino-based system that is specifically aimed at optimizing treatment and management in a smart auditorium. The objective of this microcontroller-based solution is to improve the overall experience for presenters and attendees by guaranteeing smooth operations and improved functionality during events. ',
      w_technologies: ['Arduino', 'C'],
    },
    {
        w_name: 'Car selling and buying website',
        w_img: project1_img,
        w_desc: 'Vehicle buying and selling in Sri Lanka can be challenging. This project aims to centralize vehicle listings from various sources and provide users with insightful data. The application leverages modern technologies, including Next.js for front-end development, TypeScript for type safety, and Node.js for backend logic. MySQL is used as the database solution. Azure is used for hosting, ensuring streamlined deployment and automation.',
        w_technologies: ['NextJs', 'TypeScript', 'NodeJs', 'My SQL'],
      },
      {
        w_name: 'Porfolio Website',
        w_img: portfolio,
        w_desc: 'Developing a portfolio website using React to highlight personal projects, skills, and experience. Designed responsive and intuitive user interfaces, implemented interactive features, and optimized performance for a smooth and engaging user experience.',
        w_technologies: ['React Js'],
      },
  ];
  
  export default mywork_data;
  