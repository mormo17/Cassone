import LogInPage from '../jss/logIn.js';;
import RegistrationPage from '../jss/registration.js';
import HomePage from '../jss/homePage.js';

let routes = {
    '*': () => {
        LogInPage.render(updateMainContainer);
    },
    '/login': () => {
        LogInPage.render(updateMainContainer);
    },
    '/registration': () => {
        RegistrationPage.render(updateMainContainer);
    },
    '/homePage': () => {
        HomePage.render(updateMainContainer);
    },
};

let handleRouting = () => {
    let currentUri = window.location.hash || false;
    if (currentUri !== false) {
        currentUri = currentUri.substring(1);
    }
    routes[currentUri || '*']();
};

window.addEventListener('load', handleRouting);
window.addEventListener('hashchange', handleRouting);

function updateMainContainer(content) {
    var mainContainer = document.querySelector('#mainContainer');
    mainContainer.innerHTML = content
}