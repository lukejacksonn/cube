import { react, html, css } from 'https://unpkg.com/rplus';
import cases from './algorithms.js';
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

  let a = cases[i || 0];

  return html`
    <${Cube} key="cube" alg=${a.algs[0]} group=${a.group} />
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
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          grid-gap: 0.62rem;
          > a {
            width: 100%;
            padding-top: 100%;
            &[data-active='true'] > img {
              opacity: 1;
              transform: scale(1);
            }
          }
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            opacity: 0.5;
            transition: transform 0.2s;
            &:hover {
              opacity: 1;
              transform: scale(1.062);
            }
          }
          p {
            position: absolute;
            bottom: 0;
            left: 0;
            color: #555;
          }
        `}
      >
        ${cases.map(
          (move, index) => html`
            <a
              data-active=${i == index}
              key=${move.algs[0]}
              onClick=${e => {
                e.preventDefault();
                setI(index);
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <img id=${move.name} src=${imageForCase(move.algs[0])} />
              <p>${move.name}</p>
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
