import { react, html, css } from 'https://unpkg.com/rplus';
import { interpret } from './utils.js';

// import ERNO from './cuber.js';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(var(--vh, 1vh) * 100);
    background: radial-gradient(#222, #111);
  `,
  canvas: css`
    height: calc(var(--vh, 1vh) * 50);
    transform: translateY(-5%);
    animation: bob 3s infinite;
    @keyframes bob {
      from: {
        transform: translateY(-5%);
      }
      50% {
        transform: translateY(-6%);
      }
      to {
        transform: translateY(-5%);
      }
    }
  `,
  alg: css`
    font-size: calc(14px + 2vmin);
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 0 2rem;
    line-height: 162%;
    cursor: pointer;
    margin-bottom: 1rem;
  `,
  controls: css`
    display: flex;

    button {
      font-size: calc(10px + 1vmin);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      background: #121212;
      padding: 1vmin 2vmin;
      color: rgba(255, 255, 255, 0.38);
      font-weight: bold;
      svg {
        width: calc(24px + 2vmin);
        height: calc(24px + 2vmin);
        fill: currentColor;
      }
    }
    button + button {
      margin-left: 1rem;
    }
  `,
  slider: css`
    margin: 1rem 0rem 1rem;
    max-width: 40rem;
    width: 90%;
  `,
  group: css`
    color: #444;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  `
};

export default props => {
  const container = react.useRef(null);
  const cube = react.useRef(new ERNO.Cube());
  const [speed, setSpeed] = react.useState(700);

  const centerCube = () =>
    cube.current.rotation.set((30 * Math.PI) / 180, (-45 * Math.PI) / 180, 0);

  react.useEffect(() => {
    const hist = cube.current.twistQueue.history
      .map(x =>
        x.command === x.command.toLowerCase()
          ? x.command.toUpperCase()
          : x.command.toLowerCase()
      )
      .join('');

    cube.current.twistDuration = 0;
    if (hist.length > 0) cube.current.shuffle(hist);
    cube.current.twist(interpret(props.alg, true));
  }, [props.alg]);

  react.useEffect(() => {
    container.current.appendChild(cube.current.domElement);
    cube.current.verbosity = 0;
    cube.current.autoRotate = false;
  }, []);

  return html`
    <div className=${style.container} onDoubleClick=${centerCube}>
      <div className=${style.canvas} ref=${container}></div>
      <h1
        className=${style.alg}
        onClick=${e => {
          cube.current.twistDuration = speed;
          cube.current.twist(interpret(props.alg));
        }}
      >
        ${props.alg}
      </h1>
      <p className=${style.group}>${props.group}</p>
      <input
        className=${style.slider}
        key="speed"
        type="range"
        defaultValue=${speed}
        step="100"
        min="0"
        max="900"
        onChange=${e => {
          cube.current.twistDuration = 1000 - e.target.value;
          setSpeed(1000 - e.target.value);
        }}
      />
      <div className=${style.controls}>
        <button
          onClick=${e => {
            cube.current.twistDuration = speed;
            cube.current.twist(interpret(props.alg, true));
          }}
        >
          Reverse
        </button>
        <button onClick=${centerCube}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            />
          </svg>
        </button>
        <button
          onClick=${e => {
            cube.current.twistDuration = speed;
            cube.current.twist(interpret(props.alg));
          }}
        >
          Execute
        </button>
      </div>
    </div>
  `;
};
