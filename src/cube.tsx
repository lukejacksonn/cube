import { useEffect, useRef, useState } from "preact/hooks";
import { css, interpret } from "./utils";

// import "./cuber";

export default (props) => {
  const container = useRef(null);
  const cube = useRef(new ERNO.Cube());
  const [speed, setSpeed] = useState(700);

  const centerCube = () =>
    cube.current.rotation.set((30 * Math.PI) / 180, (-45 * Math.PI) / 180, 0);

  useEffect(() => {
    if (props.case) {
      const hist = cube.current.twistQueue.history
        .map((x) =>
          x.command === x.command.toLowerCase()
            ? x.command.toUpperCase()
            : x.command.toLowerCase()
        )
        .join("");

      cube.current.twistDuration = 0;
      cube.current.autoRotate = false;
      centerCube();
      if (hist.length > 0) cube.current.shuffle(hist);
      cube.current.twist(interpret(props.case.algs[0], true));
    }
  }, [props.case]);

  useEffect(() => {
    container.current.appendChild(cube.current.domElement);
    cube.current.verbosity = 0;
    cube.current.autoRotate = !props.case;
  }, []);

  return (
    <div className={style.container} onDoubleClick={centerCube}>
      <div className={style.canvas} ref={container}></div>
      {props.case && (
        <>
          <h1
            className={style.alg}
            onClick={(e) => {
              cube.current.twistDuration = speed;
              cube.current.twist(interpret(props.case.algs[0]));
            }}
          >
            {props.case.algs[0]}
          </h1>
          <p className={style.group}>{props.case.group}</p>
          <input
            className={style.slider}
            key="speed"
            type="range"
            defaultValue={speed}
            step="100"
            min="0"
            max="900"
            onChange={(e) => {
              cube.current.twistDuration = 1000 - e.target.value;
              setSpeed(1000 - e.target.value);
            }}
          />
          <div className={style.controls}>
            <button
              onClick={(e) => {
                cube.current.twistDuration = speed;
                cube.current.twist(interpret(props.case.algs[0], true));
              }}
            >
              Reverse
            </button>
            <button onClick={centerCube}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                cube.current.twistDuration = speed;
                cube.current.twist(interpret(props.case.algs[0]));
              }}
            >
              Execute
            </button>
          </div>
        </>
      )}
    </div>
  );
};

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
    width: calc(var(--vh, 1vh) * 55);
    height: calc(var(--vh, 1vh) * 55);
    transform: translateY(-5%);
    animation: bob 3s infinite;
    overflow: hidden;
    &:only-child {
      width: 70vmin;
      height: 70vmin;
      animation: none;
    }
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
    font-size: calc(10px + 1vmin);
    color: #555;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  `,
};
