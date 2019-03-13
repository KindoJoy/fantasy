document.body.appendChild(function () {
    var element = document.createElement('div');
    element.innerHTML = 'Hello webpack!';
    return element;
}());

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}