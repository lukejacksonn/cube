import { render } from "preact";
import { useState } from "preact/hooks";

import { cases } from "./src/algorithms";

import Cube from "./src/cube";
import Nav from "./src/nav";

const App = () => {
  const [route, go] = useState(location.hash.slice(1));
  let current = cases.find((x) => x.moves[0].replace(/ /g, "") === route);
  return (
    <>
      <Cube case={current} go={go} cases={cases} />
      <Nav go={go} route={route} cases={cases} />
    </>
  );
};

render(<App />, document.body);
