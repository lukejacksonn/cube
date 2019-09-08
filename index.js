import { react, html, css } from 'https://unpkg.com/rplus';
import { oll, pll } from './algorithms.js';
window.cube.twistDuration = 500;

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

const algs = [...oll, ...pll];
const translations = {
  // Up
  U: 'U',
  U2: 'UU',
  "U'": 'u',
  u: 'EU',
  "u'": 'eu',
  // Down
  D: 'D',
  D2: 'DD',
  "D'": 'd',
  d: 'ED',
  "d'": 'ed',
  // Front
  F: 'F',
  F2: 'FF',
  "F'": 'f',
  f: 'SF',
  "f'": 'sf',
  // Back
  B: 'B',
  B2: 'BB',
  "B'": 'b',
  b: 'SB',
  "b'": 'sb',
  // Left
  L: 'L',
  L2: 'LL',
  "L'": 'l',
  l: 'ML',
  "l'": 'ml',
  // Right
  R: 'R',
  R2: 'RR',
  "R'": 'r',
  r: 'mR',
  "r'": 'Mr',
  // Middle
  M: 'M',
  M2: 'mm',
  "M'": 'm',
  // Standing
  S: 'S',
  S2: 'SS',
  "S'": 's',
  // Equator
  E: 'E',
  E2: 'EE',
  "E'": 'e',
  // Rotations
  x: 'X',
  "x'": 'x',
  y: 'Y',
  "y'": 'y',
  z: 'Z',
  "z'": 'z'
};

const interpret = input =>
  input
    .replace(/[()]/g, '')
    .split(' ')
    .map(move => translations[move])
    .join('');

const executeSequence = input => window.cube.twist(interpret(input));
const executeSequenceReverse = input =>
  window.cube.twist(
    [...interpret(input)]
      .reverse()
      .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
      .join('')
  );

const Form = () => {
  const [input, setInput] = react.useState(algs[0].alg[0]);
  const [speed, setSpeed] = react.useState(500);
  return html`
    <select onChange=${e => setInput(e.target.value)}>
      ${algs.map(
        (move, i) =>
          html`
            <option value=${move.alg[0]}>${move.name} :: ${move.alg[0]}</option>
          `
      )}
    </select>
    <input
      type="range"
      defaultValue=${speed}
      min="0"
      max="1000"
      onChange=${e => {
        window.cube.twistDuration = e.target.value;
      }}
    />
    <button onClick=${e => executeSequenceReverse(input)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
        />
      </svg>
    </button>
    <button onClick=${e => executeSequence(input)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </button>
  `;
};

react.render(
  html`
    <${Form} />
  `,
  document.querySelector('#controls')
);
