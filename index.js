import { html, useState, render } from "./src/utils.js";

import cases from "./src/algorithms.js";

import Cube from "./src/cube.js";
import Nav from "./src/nav.js";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const App = () => {
  const [route, go] = useState(parseInt(location.search.slice(1)));
  let current = cases[route];
  return html`
    <${Cube} key="cube" case=${current} />
    <${Nav} go=${go} route=${route} links=${cases} />
  `;
};

render(html` <${App} /> `, document.body);
