import Heading from './components/heading/heading.js';
import PotatoImg from './components/potato-image/potato.js';
import _ from 'lodash';


const heading = new Heading();
heading.render(_.upperFirst('potato'));
const potatoImg = new PotatoImg();
potatoImg.render();