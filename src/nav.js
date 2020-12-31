import { useState, html, css } from './utils.js';

const imageForCase = (alg) => {
  let x = alg.replace(/ /g, '');
  if (alg.startsWith("x' ")) x = x + ' x';
  if (alg.startsWith('x ')) x = x + " x'";
  return `http://cube.crider.co.uk/visualcube.php?fmt=png&size=300&bg=t&sch=fdcc0a,dc422f,3d80f6,ffffff,ff6c00,009d53&case=${x}`;
};

const item = (route, go, filterType) => (move, index) => html`
  <a
    data-hidden=${filterType === '' ? false : move.type !== filterType}
    data-active=${route == index}
    key=${move.algs[0]}
    onClick=${(e) => {
      e.preventDefault();
      go(index);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }}
  >
    <img id=${move.name} src=${imageForCase(move.algs[0])} />
    <p>${move.name}</p>
  </a>
`;

export default (props) => {
  const [filterType, setFilterType] = useState('');
  console.log(filterType);
  return html`
    <nav className=${style.nav}>
      <div className=${style.filters}>
        <button onClick=${(e) => setFilterType('f2l')}>f2l</button>
        <button onClick=${(e) => setFilterType('oll')}>oll</button>
        <button onClick=${(e) => setFilterType('pll')}>pll</button>
      </div>
      <div className=${style.links}>
        ${props.links.map(item(props.route, props.go, filterType))}
      </div>
    </nav>
  `;
};

const style = {
  nav: css`
    @media (orientation: landscape) {
      overflow-y: auto;
    }
    background: #222;
    height: 100vh;
    padding: 5vmin;
    > * + * {
      margin-top: 2rem;
    }
    opacity: 0.62;
    transition: opacity 0.62s;
    &:hover {
      opacity: 1;
    }
  `,
  filters: css`
    width: 100%;
    display: flex;
    > * + * {
      border-left: 1px solid rgba(0, 0, 0, 0.8);
    }
    button {
      flex: 1 1 100%;
      padding: 1rem 0;
      text-transform: uppercase;
      font-weight: bold;
    }
  `,
  links: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    grid-gap: 0.62rem;
    [data-hidden='true'] {
      display: none;
    }
    > a {
      width: 100%;
      padding-top: 100%;
      &[data-active='true'] > img {
        opacity: 0.3;
        transform: scale(0.9);
      }
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0.8;
      transition: transform 0.2s, opacity 0.3s;
      &:hover {
        opacity: 1;
        transform: scale(1.038);
      }
    }
    p {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #555;
    }
  `,
};
