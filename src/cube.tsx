import { css } from "goober";
import { useEffect, useRef, useState } from "preact/hooks";
import { interpret } from "./utils";
import { Case } from "./algorithms";

declare global {
  interface Window {
    ERNO: any;
  }
}

export default (props: { case: Case | undefined }) => {
  const container = useRef<HTMLDivElement>(null);
  const cube = useRef(new window.ERNO.Cube());
  const [speed, setSpeed] = useState<number>(700);

  const centerCube = () =>
    cube.current.rotation.set((30 * Math.PI) / 180, (-45 * Math.PI) / 180, 0);

  useEffect(() => {
    if (props.case) {
      const hist = cube.current.twistQueue.history
        .map((x: { command: string }) =>
          x.command === x.command.toLowerCase()
            ? x.command.toUpperCase()
            : x.command.toLowerCase()
        )
        .join("");

      cube.current.twistDuration = 0;
      cube.current.autoRotate = false;
      centerCube();
      if (hist.length > 0) cube.current.shuffle(hist);
      cube.current.twist(interpret(props.case.moves[0], true));
    }
  }, [props.case]);

  useEffect(() => {
    if (!container.current) return;
    container.current.appendChild(cube.current.domElement);
    cube.current.verbosity = 0;
    cube.current.autoRotate = !props.case;
  }, []);

  return (
    <div className={style.container} onDblClick={centerCube}>
      <div className={style.canvas} ref={container}></div>
      {props.case && (
        <>
          <h1
            className={style.alg}
            onClick={() => {
              cube.current.twistDuration = speed;
              if (!props.case) return;
              cube.current.twist(interpret(props.case.moves[0]));
            }}
          >
            {props.case.moves[0]}
          </h1>
          <p className={style.group}>{props.case.group}</p>
          <input
            className={style.slider}
            key="speed"
            type="range"
            defaultValue={speed + ""}
            step="100"
            min="0"
            max="900"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              const value = 1000 - parseInt(target.value);
              cube.current.twistDuration = value;
              setSpeed(value);
            }}
          />
          <div className={style.controls}>
            {/* <button
              onClick={(e) => {
                cube.current.twistDuration = speed;
                cube.current.twist("y");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m360-160-56-56 70-72q-128-17-211-70T80-480q0-83 115.5-141.5T480-680q169 0 284.5 58.5T880-480q0 62-66.5 111T640-296v-82q77-20 118.5-49.5T800-480q0-32-85.5-76T480-600q-149 0-234.5 44T160-480q0 24 51 57.5T356-372l-52-52 56-56 160 160-160 160Z" />
              </svg>
            </button> */}
            <button
              onClick={(e) => {
                cube.current.twistDuration = speed;
                if (!props.case) return;
                cube.current.twist(interpret(props.case.moves[0], true));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                style={{ transform: "scaleX(-1)" }}
              >
                <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
              </svg>
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
                if (!props.case) return;
                cube.current.twist(interpret(props.case.moves[0]));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                style={{ transform: "scaleX(1)" }}
              >
                <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
              </svg>
            </button>
            {/* <button
              onClick={(e) => {
                cube.current.twistDuration = speed;
                cube.current.twist("Y");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                style={{ transform: "scaleX(-1)" }}
              >
                <path d="m360-160-56-56 70-72q-128-17-211-70T80-480q0-83 115.5-141.5T480-680q169 0 284.5 58.5T880-480q0 62-66.5 111T640-296v-82q77-20 118.5-49.5T800-480q0-32-85.5-76T480-600q-149 0-234.5 44T160-480q0 24 51 57.5T356-372l-52-52 56-56 160 160-160 160Z" />
              </svg>
            </button> */}
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
    height: 100%;
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
      border-radius: 0.38rem;
      padding: 1vmin 2vmin;
      color: rgba(255, 255, 255, 0.38);
      font-weight: bold;
      svg {
        width: calc(48px + 2vmin);
        height: calc(48px + 2vmin);
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
