import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
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
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
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
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
