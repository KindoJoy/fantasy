import _ from 'lodash';
import './style.css';
import cartoon from './cartoon.jpg';
import data from './data.xml';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', ',', 'webpack', '!'], ' ');
    element.classList.add('hello');

    var img = new Image(100, 100);
    img.src = cartoon;
    element.appendChild(img);

    console.log(data);

    return element;
}

document.body.appendChild(component());