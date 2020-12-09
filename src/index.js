import HelloWorld from './hello-world.js';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import addImage from './add-image.js';
import Heading from './components/heading/heading.js';

const heading = new Heading();
heading.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

HelloWorld();
addImage();