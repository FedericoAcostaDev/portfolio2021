import { v4 as uuidv4 } from 'uuid';
import Trade from '../images/trade.png';
import Yolo from '../images/Yolo.png';
import GreenCtgImg from '../images/greenctg.jpg';
import Face from '../images/Face.png';

const projects = [
  {
    id: uuidv4(),
    name: 'YoLo ecommerce',
    desc: ' chlotes for women, created in React.js',
    img: Yolo,
  },
  {
    id: uuidv4(),
    name: 'My Crypto Tracker',
    desc: 'An App to see the Crypto market. React.js/Chart.js',
    img: Trade,
  },
  {
    id: uuidv4(),
    name: 'Face Detector',
    desc:
      'This website will recognize faces in images through an API. SQL database',
    img: Face,
  },
  {
    id: uuidv4(),
    name: 'Old Portfolio',
    desc: 'My old portfolio. React.js',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Mix-or-Match',
    desc: 'A game App using CSS, HTML, JS',
    img: GreenCtgImg,
  },
];

export default projects;
