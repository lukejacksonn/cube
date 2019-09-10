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
    font-size: calc(14px + 3vmin);
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 0 2rem;
    line-height: 138%;
    cursor: pointer;
  `,
  controls: css`
    display: flex;

    button {
      font-size: calc(10px + 1vmin);

      background: #121212;
      padding: 1vmin 2vmin;
      svg {
        width: calc(16px + 2vmin);
        height: calc(16px + 2vmin);
      }
    }
    button + button {
      margin-left: 1rem;
    }
  `,
  slider: css`
    margin: 2rem 0 1rem;
    max-width: 30rem;
    width: 90%;
  `
};

export default props => {
  const container = react.useRef(null);
  const cube = (window.cube = react.useRef(new ERNO.Cube()));
  const [speed, setSpeed] = react.useState(700);

  react.useEffect(() => {
    container.current.appendChild(cube.current.domElement);
    cube.current.twistDuration = 0;
    cube.current.verbosity = 0;
    cube.current.autoRotate = false;
    cube.current.twist(interpret(props.alg, true));
    setTimeout(() => {
      cube.current.twistDuration = 1000 - speed;
    }, 1000);
  }, [container]);

  return html`
    <div
      className=${style.container}
      onDoubleClick=${() =>
        cube.current.rotation.set(
          (30 * Math.PI) / 180,
          (-40 * Math.PI) / 180,
          0
        )}
    >
      <div className=${style.canvas} ref=${container}></div>
      <h1
        className=${style.alg}
        onClick=${e => cube.current.twist(interpret(props.alg))}
      >
        ${props.alg}
      </h1>
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
        <button onClick=${e => cube.current.twist(interpret(props.alg, true))}>
          Reverse Sequence
        </button>
      </div>
    </div>
  `;
};
