import { v4 as uuidv4 } from 'uuid';
import Trade from '../images/trade.png';
import Yolo from '../images/Yolo.png';
import MomImg from '../images/mixormatch.png';
import Portfolio from '../images/oldportfolio.png';
import Face from '../images/Face.png';
import Blog from '../images/blog.png';
import Social from '../images/socialNetwork.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Social Network',
    desc: 'Proyect from SecondBrain study groups. Designed on Figma. React.js | NextJS | Tailwind | Firebase V9 | Formik | Storybook',
    img: Social,
    link: 'https://secondbrains.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'HIV Blog',
    desc: 'A React.js | MERN blog app to share information about rights, medication, and info about HIV for all the people who need containment.',
    img: Blog,
    link: 'https://guerreros.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'YoLo Ecommerce',
    desc: ' Chlotes for women, created in React.js',
    img: Yolo,
    link: 'https://yolocommerce.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'My Crypto Tracker',
    desc: 'An App to see the Crypto market. React.js/Chart.js',
    img: Trade,
    link: 'https://crypto-trackerfederico.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'I-Mage',
    desc: 'Imgur clone using Imgur API, React-Redux',
    img: Portfolio,
    link: 'https://image-challenge.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Face Detector',
    desc: 'This website will recognize faces in images through an API. SQL database',
    img: Face,
    link: 'https://smartfar.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Mix-or-Match',
    desc: 'A game App using CSS, HTML, JS',
    img: MomImg,
    link: 'https://boring-northcutt-06aca7.netlify.app/',
  },
];

export default projects;
