import $ from "jquery"
import {getString} from "./test"
import Button from './button';

var app = document.getElementById('app');

//var message = () => (`<p>${getString()}</p>`)
var button = Button.html;
app.innerHTML = button;

Button.addListener();

