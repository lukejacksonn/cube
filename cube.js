import { react, html, css } from 'https://unpkg.com/rplus';
import { interpret } from './utils.js';

// import ERNO from './cuber.js';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
  `,
  canvas: css`
    width: 100vw;
    height: 100vmin;
    max-height: calc(var(--vh, 1vh) * 60);
  `,
  alg: css`
    font-size: calc(10px + 2vw);
    color: rgba(255, 255, 255, 0.8);
  `,
  controls: css`
    button {
      background: #121212;
    }
  `
};

export default props => {
  const container = react.useRef(null);
  const cube = react.useRef(new ERNO.Cube());

  react.useEffect(() => {
    container.current.appendChild(cube.current.domElement);
    // cube.current.twistDuration = 0;
    console.log('HERE', cube.current);
    // cube.current.twist(interpret(props.alg, true));
    // return () => {
    //   cube.current = null;
    //   console.log('REMOVED', cube.current);
    // };
  }, [container]);

  return html`
    <div className=${style.container}>
      <div className=${style.canvas} ref=${container}></div>
      <button className=${style.alg}>${props.alg}</button>
      <div className=${style.controls}>
        <button
          onClick=${e => {
            cube.current.rotation.set(
              (25 * Math.PI) / 180,
              (-30 * Math.PI) / 180,
              0
            );
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            />
          </svg>
        </button>
        <button
          onClick=${e => {
            cube.current.twistDuration = 300;
            cube.current.twist(interpret(props.alg, true));
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
            />
          </svg>
        </button>
        <button
          onClick=${e => {
            cube.current.twistDuration = 300;
            cube.current.twist(interpret(props.alg));
          }}
        >
          <svg
            className=${style.play}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
    </div>
  `;
};

//   <input
//     key="speed"
//     type="range"
//     defaultValue=${speed}
//     min="0"
//     max="1000"
//     onChange=${e => {
//       window.cube.twistDuration = e.target.value;
//       setSpeed(e.target.value);
//     }}
//   />
