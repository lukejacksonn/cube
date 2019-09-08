import { react, html, css } from 'https://unpkg.com/rplus';
import { oll, pll } from './algorithms.js';
import Cube from './cube.js';
import { translations, interpret } from './utils.js';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const algs = [...oll, ...pll];

const Form = () => {
  const [input, setInput] = react.useState(0);
  return html`
    <${Cube} key=${input} alg=${algs[input].alg[0]} />
    <button
      className=${css`
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
      `}
      onClick=${e => setInput(input + 1)}
    >
      >
    </button>
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
