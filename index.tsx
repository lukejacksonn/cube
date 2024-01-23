import { render } from "preact";
import { useState } from "preact/hooks";

import cases from "./src/algorithms";

import Cube from "./src/cube";
import Nav from "./src/nav";

const App = () => {
  const [route, go] = useState(parseInt(location.search.slice(1)));
  let current = cases[route];
  return (
    <>
      <Cube case={current} />
      <Nav go={go} route={route} links={cases} />
    </>
  );
};

render(<App />, document.body);
