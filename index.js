import { html, useState, render } from './utils.js';

import cases from './algorithms.js';

import Cube from './cube.js';
import Nav from './nav.js';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const App = () => {
  const [route, go] = useState(parseInt(location.search.slice(1)));
  let current = cases[route];
  return html`
    <${Cube} key="cube" case=${current} />
    <${Nav} go=${go} route=${route} links=${cases} />
  `;
};

render(html` <${App} /> `, document.body);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(
      function (registration) {
        // Registration was successful
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}
