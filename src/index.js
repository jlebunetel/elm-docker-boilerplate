'use strict';

// Style
import './css/base.css';
import './scss/bulma.scss';
import './scss/fontawesome.scss';

// Main app
const { Elm } = require('./Main.elm');

Elm.Main.init({
    node: document.getElementById('app')
});

// Favicon
import favicon from './img/rocket-solid.svg';
const link = document.createElement('link');
link.rel = 'shortcut icon';
link.href = favicon;
document.head.appendChild(link);
