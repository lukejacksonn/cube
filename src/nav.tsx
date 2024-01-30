import { css } from "goober";
import { useState } from "preact/hooks";
import { Case } from "./algorithms";
import { hash } from "./utils";

export default (props: {
  route: string;
  go: (x: string) => void;
  cases: Case[];
}) => {
  const [filterType, setFilterType] = useState("");
  return (
    <nav className={style.nav}>
      <div className={style.filters}>
        <button
          data-active={filterType === "f2l"}
          onClick={() => setFilterType("f2l")}
        >
          f2l
        </button>
        <button
          data-active={filterType === "oll"}
          onClick={() => setFilterType("oll")}
        >
          oll
        </button>
        <button
          data-active={filterType === "pll"}
          onClick={() => setFilterType("pll")}
        >
          pll
        </button>
      </div>
      {filterType && (
        <div className={style.instructions}>
          {
            {
              f2l: (
                <p>
                  The First Two Layers (F2L) should be solved intuitively. The
                  algorithms here cover most scenarios but you don't need to
                  learn all of them.
                </p>
              ),
              oll: (
                <p>
                  Orienting the last layer (OLL) results in a solved top face. A
                  "two look" approach drastically reduces the amount of
                  algorithms required.
                </p>
              ),
              pll: (
                <p>
                  Permuting the Last Layer (PLL) results in a solved cube. A
                  "two look" approach drastically reduces the amount of
                  algorithms required.
                </p>
              ),
            }[filterType]
          }
        </div>
      )}
      <div className={style.links}>
        {props.cases.map((c) => (
          <a
            data-hidden={filterType === "" ? false : c.type !== filterType}
            data-active={props.route == c.moves[0].replace(/ /g, "")}
            href={`#${c.moves[0].replace(/ /g, "")}`}
            key={c.moves[0]}
            onClick={() => {
              props.go(c.moves[0].replace(/ /g, ""));
              document.body.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img id={c.name + ""} src={`images/${hash(c.moves[0])}.png`} />
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
    display: flex;
    flex-direction: column;
    gap: 1.38rem;
    height: 100vh;
    padding: 1.38rem;
    opacity: 0.62;
    transition: opacity 0.62s;
    &:hover {
      opacity: 1;
    }
  `,
  filters: css`
    flex: none;
    width: 100%;
    display: flex;
    border-radius: 0.38rem;
    overflow: hidden;
    > * + * {
      border-left: 1px solid rgba(0, 0, 0, 0.8);
    }
    button {
      flex: 1 1 100%;
      padding: 1rem 0;
      text-transform: uppercase;
      font-weight: bold;

      &[data-active="true"] {
        background: #444;
      }
    }
  `,
  instructions: css`
    flex: none;
    color: rgba(255, 255, 255, 0.62);
    font-size: 1rem;
    line-height: 1.2;
    background: #333;
    padding: 1rem;
    border-radius: 0.38rem;
  `,
  links: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    grid-gap: 1rem;
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
      top: 0.5em;
      left: 0.5em;
      color: #555;
    }
  `,
};
