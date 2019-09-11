import { react, html, css } from 'https://unpkg.com/rplus';

const imageForCase = alg => {
  let x = alg.replace(/ /g, '');
  if (alg.startsWith("x' ")) x = x + ' x';
  if (alg.startsWith('x ')) x = x + " x'";
  return `http://cube.crider.co.uk/visualcube.php?fmt=png&size=300&bg=t&sch=fdcc0a,dc422f,3d80f6,ffffff,ff6c00,009d53&case=${x}`;
};

const item = (route, go) => (move, index) => html`
  <a
    data-active=${route == index}
    key=${move.algs[0]}
    onClick=${e => {
      e.preventDefault();
      go(index);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }}
  >
    <img id=${move.name} src=${imageForCase(move.algs[0])} />
    <p>${move.name}</p>
  </a>
`;

export default props => html`
  <nav className=${style.nav}>
    <div className=${style.links}>
      ${props.links.map(item(props.route, props.go))}
    </div>
  </nav>
`;

const style = {
  nav: css`
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
  `,
  links: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    grid-gap: 0.62rem;
    > a {
      width: 100%;
      padding-top: 100%;
      &[data-active='true'] > img {
        opacity: 0.2;
        transform: scale(1);
      }
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0.8;
      transition: transform 0.2s, opacity 0.2s;
      &:hover {
        opacity: 1;
        transform: scale(1.05);
      }
    }
    p {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #555;
    }
  `
};
