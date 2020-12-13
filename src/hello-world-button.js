import Heading from './components/heading/heading.js';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import React from 'react';


if (process.env.NODE_ENV === 'production'){
    console.log('production mode');
} else if (process.env.NODE_ENV === 'development'){
    console.log('development mode');
}

const heading = new Heading();
heading.render('hello world button');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();