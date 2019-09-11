import { react, html, css } from 'https://unpkg.com/rplus';
import cases from './algorithms.js';
import Cube from './cube.js';
import Nav from './nav.js';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const Form = () => {
  const [route, go] = react.useState(parseInt(location.search.slice(1)));
  let current = cases[route || 0];
  return html`
    <${Cube} key="cube" alg=${current.algs[0]} group=${current.group} />
    <${Nav} go=${go} route=${route} links=${cases} />
  `;
};

react.render(
  html`
    <${Form} />
  `,
  document.body
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(
      function(registration) {
        // Registration was successful
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}
