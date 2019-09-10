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
  const [stage, setStage] = react.useState(location.pathname.slice(1));
  const [i, setI] = react.useState(parseInt(location.search.slice(1)));

  const cases = algs[stage];
  let a = cases[i || 0].alg[0];

  return html`
    <${Cube} key="cube" alg=${a} />
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
          > * {
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
        <button onClick=${e => setStage('f2l')}>f2l</button>
        <button onClick=${e => setStage('oll')}>oll</button>
        <button onClick=${e => setStage('pll')}>pll</button>
      </div>
      <div
        className=${css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          grid-gap: 0.62rem;
          > a {
            width: 100%;
            padding-top: 100%;
          }
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            opacity: 0.8;
            &:hover {
              opacity: 1;
              transform: scale(1.1);
            }
          }
          h5 {
            color: #fff;
          }
        `}
      >
        ${cases.map(
          (move, i) => html`
            <a
              key=${move.alg[0]}
              onClick=${e => {
                e.preventDefault();
                setI(i);
              }}
            >
              <img id=${move.name} src=${imageForCase(move.alg[0])} />
              <h1>${move.name}</h1>
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
