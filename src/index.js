
var style = require('./style/globalStyle.css');
var messages = require('./messages');

// import Button from './button';
// import Kitten from './image';
// var newMessage = () => (
// 	`<p>
// 		${messages.hi} and ${messages.event}
// 		${Kitten}
// 	</p>`
// );

// var newMessage = () => (Button.button);

import { multiply } from './mathstuff';

const newMessage = () => (`
	<div class="${style.box}">
		DEV: ${DEVELOPMENT.toString()}<br>
		PROD: ${PRODUCTION.toString()}<br>
	</div>	
`)


var app = document.getElementById('app');
app.innerHTML = newMessage()

// Button.attachEl();
if(DEVELOPMENT) {
	if(module.hot) {
		module.hot.accept();
	}
}