if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

document.body.appendChild(function () {
    var element = document.createElement('div');
    element.innerHTML = 'Hello webpack!';
    return element;
}());