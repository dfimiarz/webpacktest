import $ from "jquery"
import {getString} from "./test"

$(document).ready(() => {
    $('#test').text(getString());
});

