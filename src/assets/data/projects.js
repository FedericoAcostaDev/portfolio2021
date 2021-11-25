import { v4 as uuidv4 } from 'uuid';
import Trade from '../images/trade.png';
import Yolo from '../images/Yolo.png';
import MomImg from '../images/mixormatch.png';
import Portfolio from '../images/oldportfolio.png';
import Face from '../images/Face.png';

const projects = [
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
    name: 'Face Detector',
    desc:
      'This website will recognize faces in images through an API. SQL database',
    img: Face,
    link: 'https://smartfar.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Old Portfolio',
    desc: 'My old portfolio. React.js',
    img: Portfolio,
    link: 'https://federicoacosta.netlify.app',
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
