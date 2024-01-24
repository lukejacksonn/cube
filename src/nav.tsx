import { css } from "goober";
import { useState } from "preact/hooks";
import { Case } from "./algorithms";

export default (props: {
  route: string;
  go: (x: string) => void;
  cases: Case[];
}) => {
  const [filterType, setFilterType] = useState("");
  return (
    <nav className={style.nav}>
      <div className={style.filters}>
        <button onClick={() => setFilterType("f2l")}>f2l</button>
        <button onClick={() => setFilterType("oll")}>oll</button>
        <button onClick={() => setFilterType("pll")}>pll</button>
      </div>
      <div className={style.links}>
        {props.cases.map((c) => (
          <a
            data-hidden={filterType === "" ? false : c.type !== filterType}
            data-active={props.route == c.moves[0].replace(/ /g, "")}
            href={`#${c.moves[0].replace(/ /g, "")}`}
            key={c.moves[0]}
            onClick={() => {
              props.go(c.moves[0].replace(/ /g, ""));
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img
              id={c.name + ""}
              src={`images/${c.moves[0].replace(/ /g, "")}-cube.png`}
            />
            <p>{c.name}</p>
          </a>
        ))}
      </div>
    </nav>
  );
};

const style = {
  nav: css`
    @media (orientation: landscape) {
      overflow-y: auto;
    }
    background: #222;
    height: 100vh;
    padding: 5vmin;
    > * + * {
      margin-top: 2rem;
    }
    opacity: 0.62;
    transition: opacity 0.62s;
    &:hover {
      opacity: 1;
    }
  `,
  filters: css`
    width: 100%;
    display: flex;
    > * + * {
      border-left: 1px solid rgba(0, 0, 0, 0.8);
    }
    button {
      flex: 1 1 100%;
      padding: 1rem 0;
      text-transform: uppercase;
      font-weight: bold;
    }
  `,
  links: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    grid-gap: 0.62rem;
    [data-hidden="true"] {
      display: none;
    }
    > a {
      width: 100%;
      padding-top: 100%;
      border-radius: 0.38rem;
      overflow: hidden;
      &[data-active="true"] {
        opacity: 0.3;
        transform: scale(0.95);
      }
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0.8;
      transition: transform 0.2s, opacity 0.3s;
      &:hover {
        opacity: 1;
        transform: scale(1.038);
      }
    }
    p {
      position: absolute;
      top: 0.38em;
      left: 0.38em;
      color: #555;
    }
  `,
};
