import { react, html, css } from 'https://unpkg.com/rplus';
import algs from './algorithms.js';
import Cube from './cube.js';
import { invert } from './utils.js';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const imageForCase = alg => {
  let x = alg.replace(/ /g, '');
  if (alg.startsWith("x' ")) x = x + ' x';
  if (alg.startsWith('x ')) x = x + " x'";
  return `http://cube.crider.co.uk/visualcube.php?fmt=png&size=300&bg=t&sch=fdcc0a,dc422f,3d80f6,ffffff,ff6c00,009d53&case=${x}`;
};

const Form = () => {
  const [input, setInput] = react.useState(0);

  const cases = algs[location.pathname.slice(1)];
  const i = parseInt(location.search.slice(1)) || 0;

  let a = cases[i].alg[0];
  return html`
    <${Cube} key=${a} alg=${a} />
    <nav
      className=${css`
        @media (orientation: landscape) {
          overflow-y: auto;
        }
        background: #222;
        height: 100vh;
        padding: 3rem;
        > * + * {
          margin-top: 2rem;
        }
        opacity: 0.62;
        transition: opacity 0.62s;
        &:hover {
          opacity: 1;
        }
      `}
    >
      <div
        className=${css`
          display: flex;
          a {
            flex: 1 1 100%;
            text-align: center;
            color: #fff;
            background: #333;
            padding: 1rem;
            text-decoration: none;
            font-weight: bold;
            letter-spacing: 1px;
          }
          > * + * {
            border-left: 1px solid #222;
          }
        `}
      >
        <a href="/oll">F2L</a>
        <a href="/oll">OLL</a>
        <a href="/pll">PLL</a>
      </div>
      <div
        className=${css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(101px, 1fr));
          grid-gap: 1rem;
          img {
            width: 100%;
            opacity: 0.8;
            &:hover {
              opacity: 1;
              transform: scale(1.1);
            }
          }
        `}
      >
        ${cases.map(
          (move, i) => html`
            <a href=${`?${i}`}>
              <img id=${move.name} src=${imageForCase(move.alg[0])} />
            </a>
          `
        )}
      </div>
    </nav>
  `;
};

react.render(
  html`
    <${Form} />
  `,
  document.body
);

{
  /* <select
  onChange=${e => {
    setInput(e.target.value);
  }}
>
  ${algs.map(
    (move, i) =>
      html`
        <option value=${move.alg[0]}
          >${move.name} :: ${move.alg[0].replace(/ /g, '')}</option
        >
      `
  )}
</select> */
}
