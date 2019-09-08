let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

export const translations = {
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

export const interpret = (input, reverse) => {
  const out = input
    .replace(/[()]/g, '')
    .split(' ')
    .map(move => translations[move])
    .join('');

  return !reverse
    ? out
    : [...out]
        .reverse()
        .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
        .join('');
};
