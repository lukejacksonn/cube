export default [
  // ------------------------------
  // F2L CASES
  {
    name: 1,
    type: 'f2l',
    group: 'Basic Insert',
    algs: ["U (R U' R')"]
  },
  {
    name: 2,
    type: 'f2l',
    group: 'Basic Insert',
    algs: ["y' U' (R' U R)", "y U' (L' U L)"]
  },
  {
    name: 3,
    type: 'f2l',
    group: 'Basic Insert',
    algs: ["y' (R' U' R)", "y (L' U' L)"]
  },
  {
    name: 4,
    type: 'f2l',
    group: 'Basic Insert',
    algs: ["(R U R')"]
  },

  {
    name: 5,
    type: 'f2l',
    group: 'Different Facing Up',
    algs: ["U' (R U' R' U) y' (R' U' R)", "y' U (R' U' R U') (R' U' R)"]
  },
  {
    name: 6,
    type: 'f2l',
    group: 'Different Facing Up',
    algs: ["U' (R U R' U) (R U R')"]
  },
  {
    name: 7,
    type: 'f2l',
    group: 'Different Facing Up',
    algs: ["U' (R U2' R' U) y' (R' U' R)", "U' (R U2' R') d (R' U' R)"]
  },
  {
    name: 8,
    type: 'f2l',
    group: 'Different Facing Up',
    algs: [
      "R' U2' R2 U R2' U R",
      "y' U (R' U2 R) U' y (R U R')",
      "(R U' R' U) (R U' R') U2 (R U' R')"
    ]
  },
  {
    name: 9,
    type: 'f2l',
    group: 'Different Facing Up',
    algs: ["y' U (R' U R U') (R' U' R)"]
  },
  {
    name: 10,
    type: 'f2l',
    group: 'Different Facing Up',
    algs: ["U' (R U' R' U) (R U R')"]
  },
  {
    name: 11,
    type: 'f2l',
    group: 'Same Facing Up',
    algs: ["(U' R U R') U2 (R U' R')"]
  },

  {
    name: 12,
    type: 'f2l',
    group: 'Same Facing Up',
    algs: ["y' (U R' U' R) U2' (R' U R) ", " d (R' U' R) U2' (R' U R)"]
  },

  {
    name: 13,
    type: 'f2l',
    group: 'Same Facing Up',
    algs: ["U' (R U2' R') U2 (R U' R')"]
  },

  {
    name: 14,
    type: 'f2l',
    group: 'Same Facing Up',
    algs: ["y' U (R' U2 R) U2' (R' U R) ", " d (R' U2 R) U2' (R' U R)"]
  },
  {
    name: 15,
    type: 'f2l',
    group: 'White Facing Up',
    algs: ["U (R U2 R') U (R U' R')"]
  },
  {
    name: 16,
    type: 'f2l',
    group: 'White Facing Up',
    algs: ["y' U' (R' U2 R) U' (R' U R)"]
  },
  {
    name: 17,
    type: 'f2l',
    group: 'White Facing Up',
    algs: ["U2 (R U R' U) (R U' R')", "(R U' R') U2 (R U R')"]
  },
  {
    name: 18,
    type: 'f2l',
    group: 'White Facing Up',
    algs: ["y' U2 (R' U' R) U' (R' U R)"]
  },

  {
    name: 19,
    type: 'f2l',
    group: 'Incorrectly Connected',
    algs: ["y' (R' U R) U2' y (R U R')", "(R U R') U2 (R U' R' U) (R U' R')"]
  },
  {
    name: 20,
    type: 'f2l',
    group: 'Incorrectly Connected',
    algs: ["(R U' R' U2) y' (R' U' R)", "U F (R U R' U') F' (U R U' R')"]
  },
  {
    name: 21,
    type: 'f2l',
    group: 'Incorrectly Connected',
    algs: ["(R U2 R') U' (R U R')"]
  },
  {
    name: 22,
    type: 'f2l',
    group: 'Incorrectly Connected',
    algs: ["y' (R' U2 R) U (R' U' R)"]
  },
  {
    name: 23,
    type: 'f2l',
    group: 'Incorrectly Connected',
    algs: [
      "U (R U' R' U') (R U' R' U) (R U' R')",
      "(R U R' U2') (R U R' U') (R U R')"
    ]
  },
  {
    name: 24,
    type: 'f2l',
    group: 'Incorrectly Connected',
    algs: [
      "y' U' (R' U R U) (R' U R U') (R' U R)",
      "F (U R U' R') F' (R U' R')"
    ]
  },

  {
    name: 25,
    type: 'f2l',
    group: 'Corner In Edge Out',
    algs: ["U' F' (R U R' U') R' F R", "R' F' R U (R U' R') F"]
  },
  {
    name: 26,
    type: 'f2l',
    group: 'Corner In Edge Out',
    algs: ["U (R U' R') U' (F' U F)", "U (R U' R') (F R' F' R)"]
  },
  {
    name: 27,
    type: 'f2l',
    group: 'Corner In Edge Out',
    algs: ["(R U' R' U) (R U' R')"]
  },
  {
    name: 28,
    type: 'f2l',
    group: 'Corner In Edge Out',
    algs: ["y' (R' U R U') (R' U R)"]
  },
  {
    name: 29,
    type: 'f2l',
    group: 'Corner In Edge Out',
    algs: ["y' (R' U' R U) (R' U' R)", "(R' F R F') U (R U' R')"]
  },
  {
    name: 30,
    type: 'f2l',
    group: 'Corner In Edge Out',
    algs: ["(R U R' U') (R U R')"]
  },

  {
    name: 31,
    type: 'f2l',
    group: 'Edge In Corner Out',
    algs: ["(R U' R' U) y' (R' U R)", "U' (R' F R F') (R U' R')"]
  },
  {
    name: 32,
    type: 'f2l',
    group: 'Edge In Corner Out',
    algs: ["(U R U' R') (U R U' R') (U R U' R')"]
  },
  {
    name: 33,
    type: 'f2l',
    group: 'Edge In Corner Out',
    algs: ["(U' R U' R') U2 (R U' R')"]
  },
  {
    name: 34,
    type: 'f2l',
    group: 'Edge In Corner Out',
    algs: ["U (R U R') U2 (R U R')"]
  },
  {
    name: 35,
    type: 'f2l',
    group: 'Edge In Corner Out',
    algs: ["(U' R U R') U y' (R' U' R)"]
  },
  {
    name: 36,
    type: 'f2l',
    group: 'Edge In Corner Out',
    algs: ["U (F' U' F) U' (R U R')"]
  },

  {
    name: 37,
    type: 'f2l',
    group: 'Both In Slot',
    algs: ["(R U' R') d (R' U2 R) U2' (R' U R) "]
  },
  {
    name: 38,
    type: 'f2l',
    group: 'Both In Slot',
    algs: [
      "(R U' R' U') R U R' U2 (R U' R')",
      "(R U R' U') R U2 R' U' (R U R')"
    ]
  },
  {
    name: 39,
    type: 'f2l',
    group: 'Both In Slot',
    algs: [
      "(R U' R' U) (R U2' R') U (R U' R')",
      "(R U R') U2' (R U' R' U) (R U R')"
    ]
  },
  {
    name: 40,
    type: 'f2l',
    group: 'Both In Slot',
    algs: [
      "(F' U F) U2 (R U R' U) (R U' R')",
      "(R U' R') F (R U R' U') F' (R U' R')"
    ]
  },
  {
    name: 41,
    type: 'f2l',
    group: 'Both In Slot',
    algs: ["(R U R' U') (R U' R') U2 y' (R' U' R)"]
  },
  // ---------------------------------------
  // OLL CASES
  {
    name: 1,
    type: 'oll',
    group: 'Dot',
    probability: 2,
    algs: ["R U2 R' R' F R F' U2 R' F R F'"]
  },
  {
    name: 2,
    type: 'oll',
    group: 'Dot',
    probability: 4,
    algs: [
      "r U r' U2 r U2 R' U2 R U' r'",
      "y' F R U R' U' F' f R U R' U' f'",
      "y' F R U R' U' S R U R' U' f'"
    ]
  },
  {
    name: 3,
    type: 'oll',
    group: 'Dot',
    probability: 4,
    algs: [
      "r' R2 U R' U r U2 r' U M'",
      "y F U R U' R' F' U F R U R' U' F'",
      "y' f R U R' U' f' U' F R U R' U' F'"
    ]
  },
  {
    name: 4,
    type: 'oll',
    group: 'Dot',
    probability: 4,
    algs: [
      "M U' r U2 r' U' R U' R' M'",
      "y F U R U' R' F' U' F R U R' U' F'",
      "y' f R U R' U' f' U F R U R' U' F'"
    ]
  },
  {
    name: 5,
    type: 'oll',
    group: 'Square Shape',
    probability: 4,
    algs: ["l' U2 L U L' U l", "y2 r' U2 R U R' U r"]
  },
  {
    name: 6,
    type: 'oll',
    group: 'Square Shape',
    probability: 4,
    algs: ["r U2 R' U' R U' r'"]
  },
  {
    name: 7,
    type: 'oll',
    group: 'Small Lightning Bolt',
    probability: 4,
    algs: ["r U R' U R U2 r'"]
  },
  {
    name: 8,
    type: 'oll',
    group: 'Small Lightning Bolt',
    probability: 4,
    algs: [
      "l' U' L U' L' U2 l",
      "R U2 R' U2 R' F R F'",
      "y2 r' U' R U' R' U2 r"
    ]
  },
  {
    name: 9,
    type: 'oll',
    group: 'Fish Shape',
    probability: 4,
    algs: ["R U R' U' R' F R2 U R' U' F'"]
  },
  {
    name: 10,
    type: 'oll',
    group: 'Fish Shape',
    probability: 4,
    algs: [
      "R U R' U R' F R F' R U2 R'",
      "y2 r U R' U R U' R' U' r' R (U R U' R')"
    ]
  },
  {
    name: 11,
    type: 'oll',
    group: 'Small Lightning Bolt',
    probability: 4,
    algs: ["r U R' U R' F R F' R U2 r'", "y2 r' R2 U R' U R U2 R' U M'"]
  },
  {
    name: 12,
    type: 'oll',
    group: 'Small Lightning Bolt',
    probability: 4,
    algs: ["M' R' U' R U' R' U2 R U' R r'"]
  },
  {
    name: 13,
    type: 'oll',
    group: 'Knight Move Shape',
    probability: 4,
    algs: ["F U R U' R2 F' R U R U' R'", "r U' r' U' r U r' y' R' U R"]
  },
  {
    name: 14,
    type: 'oll',
    group: 'Knight Move Shape',
    probability: 4,
    algs: ["R' F R U R' F' R F U' F'"]
  },
  {
    name: 15,
    type: 'oll',
    group: 'Knight Move Shape',
    probability: 4,
    algs: ["l' U' l L' U' L U l' U l", "y2 r' U' r R' U' R U r' U r"]
  },
  {
    name: 16,
    type: 'oll',
    group: 'Knight Move Shape',
    probability: 4,
    algs: ["r U r' R U R' U' r U' r'"]
  },
  {
    name: 17,
    type: 'oll',
    group: 'Dot',
    probability: 4,
    algs: [
      "F R' F' R2 r' U R U' R' U' M'",
      "y2 R U R' U R' F R F' U2 R' F R F'"
    ]
  },
  {
    name: 18,
    type: 'oll',
    group: 'Dot',
    probability: 4,
    algs: [
      "r U R' U R U2 r' r' U' R U' R' U2 r",
      "y R U2 R' R' F R F' U2 M' (U R U' r')"
    ]
  },
  {
    name: 19,
    type: 'oll',
    group: 'Dot',
    probability: 4,
    algs: ["r' R U R U R' U' M' R' F R F'"]
  },
  {
    name: 20,
    type: 'oll',
    group: 'Dot',
    probability: 1,
    algs: ["r U R' U' M2 U R U' R' U' M'", "r' R U (R U R' U') M2 U R U' r'"]
  },
  {
    name: 21,
    type: 'oll',
    group: 'Cross',
    probability: 2,
    algs: ["R U2 R' U' R U R' U' R U' R'", "y R U R' U R U' R' U R U2 R'"]
  },
  {
    name: 22,
    type: 'oll',
    group: 'Cross',
    probability: 4,
    algs: ["R U2 (R2 U' R2 U' R2) U2 R"]
  },
  {
    name: 23,
    type: 'oll',
    group: 'Cross',
    probability: 4,
    algs: ["R2 D' R U2 R' D R U2 R", "y2 R2 D R' U2 R D' R' U2 R'"]
  },
  {
    name: 24,
    type: 'oll',
    group: 'Cross',
    probability: 4,
    algs: ["r U R' U' r' F R F'", "y R U R D R' U' R D' R2"]
  },
  {
    name: 25,
    type: 'oll',
    group: 'Cross',
    probability: 4,
    algs: ["F' r U R' U' r' F R", "y' R' F R B' R' F' R B"]
  },
  {
    name: 26,
    type: 'oll',
    group: 'Cross',
    probability: 4,
    algs: ["(R U2 R') U' R U' R'", "y' R' U' R U' R' U2 R"]
  },
  {
    name: 27,
    type: 'oll',
    group: 'Cross',
    probability: 4,
    algs: ["R U R' U R U2 R'", "y' R' U2 (R U R' U) R"]
  },
  {
    name: 28,
    type: 'oll',
    group: 'Corners Oriented',
    probability: 4,
    algs: ["r U R' U' r' R U R U' R'"]
  },
  {
    name: 29,
    type: 'oll',
    group: 'Awkward Shape',
    probability: 4,
    algs: ["R U R' U' R U' R' F' U' F R U R'"]
  },
  {
    name: 30,
    type: 'oll',
    group: 'Awkward Shape',
    probability: 4,
    algs: ["F R' F R2 U' R' U' R U R' F2", "F U (R U2 R' U') R U2 R' U' F'"]
  },
  {
    name: 31,
    type: 'oll',
    group: 'P Shape',
    probability: 4,
    algs: ["R' U' F U R U' R' F' R"]
  },
  {
    name: 32,
    type: 'oll',
    group: 'P Shape',
    probability: 4,
    algs: ["L U F' U' L' U L F L'", "y2 S R U R' U' R F R f'"]
  },
  {
    name: 33,
    type: 'oll',
    group: 'T Shape',
    probability: 4,
    algs: ["R U R' U' R' F R F'"]
  },
  {
    name: 34,
    type: 'oll',
    group: 'C Shape',
    probability: 4,
    algs: ["R U R2 U' R' F R U R U' F'", "R U R' U' B' R' F R F' B"]
  },
  {
    name: 35,
    type: 'oll',
    group: 'Fish Shape',
    probability: 4,
    algs: ["R U2 R' R' F R F' R U2 R'"]
  },
  {
    name: 36,
    type: 'oll',
    group: 'W Shape',
    probability: 4,
    algs: ["L' U' L U' L' U L U L F' L' F", "y2 R' U' R U' R' U R U R B' R' B"]
  },
  {
    name: 37,
    type: 'oll',
    group: 'Fish Shape',
    probability: 4,
    algs: ["F R' F' R U R U' R'", "F R U' R' U' R U R' F'"]
  },
  {
    name: 38,
    type: 'oll',
    group: 'W Shape',
    probability: 4,
    algs: ["R U R' U R U' R' U' R' F R F'"]
  },
  {
    name: 39,
    type: 'oll',
    group: 'Big Lightning Bolt',
    probability: 4,
    algs: ["L F' L' U' L U F U' L'", "y2 R B' R' U' R U B U' R'"]
  },
  {
    name: 40,
    type: 'oll',
    group: 'Big Lightning Bolt',
    probability: 4,
    algs: ["R' F R U R' U' F' U R"]
  },
  {
    name: 41,
    type: 'oll',
    group: 'Awkward Shape',
    probability: 4,
    algs: ["R U R' U R U2 R' F R U R' U' F'"]
  },
  {
    name: 42,
    type: 'oll',
    group: 'Awkward Shape',
    probability: 4,
    algs: ["R' U' R U' R' U2 R F R U R' U' F'"]
  },
  {
    name: 43,
    type: 'oll',
    group: 'P Shape',
    probability: 4,
    algs: ["F' U' L' U L F", "R' U' F R' F' R U R"]
  },
  {
    name: 44,
    type: 'oll',
    group: 'P Shape',
    probability: 4,
    algs: ["F U R U' R' F'", "y2 f R U R' U' f'"]
  },
  {
    name: 45,
    type: 'oll',
    group: 'T Shape',
    probability: 4,
    algs: ["F R U R' U' F'"]
  },
  {
    name: 46,
    type: 'oll',
    group: 'C Shape',
    probability: 4,
    algs: ["R' U' R' F R F' U R"]
  },
  {
    name: 47,
    type: 'oll',
    group: 'Small L Shape',
    probability: 4,
    algs: [
      "R' U' R' F R F' R' F R F' U R",
      "F' L' U' L U L' U' L U F",
      "y' F U R U' R' F' R U R' U R U2 R'"
    ]
  },
  {
    name: 48,
    type: 'oll',
    group: 'Small L Shape',
    probability: 4,
    algs: ["F R U R' U' R U R' U' F'"]
  },
  {
    name: 49,
    type: 'oll',
    group: 'Small L Shape',
    probability: 4,
    algs: ["r U' r2 U r2 U r2 U' r"]
  },
  {
    name: 50,
    type: 'oll',
    group: 'Small L Shape',
    probability: 4,
    algs: ["r' U r2 U' r2 U' r2 U r'"]
  },
  {
    name: 51,
    type: 'oll',
    group: 'I Shape',
    probability: 4,
    algs: ["F U R U' R' U R U' R' F'", "y2 f R U R' U' R U R' U' f'"]
  },
  {
    name: 52,
    type: 'oll',
    group: 'I Shape',
    probability: 4,
    algs: [
      "R U R' U R U' B U' B' R'",
      "R' F' U' F U' (R U R' U) R",
      "R U R' U R U' y R U' R' F'"
    ]
  },
  {
    name: 53,
    type: 'oll',
    group: 'Small L Shape',
    probability: 4,
    algs: [
      "l' U2 L U L' U' L U L' U l",
      "y2 r' U2 (R U R' U') R U R' U r",
      "y r' U' R U' R' U R U' R' U2 r"
    ]
  },
  {
    name: 54,
    type: 'oll',
    group: 'Small L Shape',
    probability: 4,
    algs: ["(r U2 R' U') R U R' U' R U' r'", "y r U R' U R U' R' U R U2 r'"]
  },
  {
    name: 55,
    type: 'oll',
    group: 'I Shape',
    probability: 2,
    algs: [
      "R' F R U R U' R2 F' R2 U' R' U R U R'",
      "y R U2 R2 U' R U' R' U2 F R F'"
    ]
  },
  {
    name: 56,
    type: 'oll',
    group: 'I Shape',
    probability: 2,
    algs: [
      "(r' U' r) U' R' U R U' R' U R r' U r",
      "(r U r') U R U' R' U R U' R' (r U' r')",
      "(r U r') U R U' R' U R U' M' U' r'"
    ]
  },
  {
    name: 57,
    type: 'oll',
    group: 'Corners Oriented',
    probability: 2,
    algs: ["R U R' U' M' U R U' r'"]
  },
  // ---------------------------------------
  // PLL CASES
  {
    name: 'H',
    type: 'pll',
    group: 'Edges Only',
    probability: 1,
    algs: ['M2 U M2 U2 M2 U M2', "M2 U' M2 U2 M2 U' M2"]
  },
  {
    name: 'Z',
    type: 'pll',
    group: 'Edges Only',
    probability: 2,
    algs: [
      "M' U M2 U M2 U M' U2 M2",
      "y M' U' M2 U' M2 U' M' U2 M2",
      "y M2 U M2 U M' U2 M2 U2 M'",
      "M2 U' M2 U' M' U2 M2 U2 M'"
    ]
  },
  {
    name: 'Ua',
    type: 'pll',
    group: 'Edges Only',
    probability: 4,
    algs: [
      "M2 U M U2 M' U M2",
      "R U' R U R U R U' R' U' R2",
      "y2 R2 U' R' U' R U R U R U' R"
    ]
  },
  {
    name: 'Ub',
    type: 'pll',
    group: 'Edges Only',
    probability: 4,
    algs: [
      "M2 U' M U2 M' U' M2",
      "R2 U (R U R' U') R' U' R' U R'",
      "y2 R' U R' U' R' U' (R' U R U) R2",
      "y2 R' U R' U' R3 U' (R' U R U) R2"
    ]
  },
  {
    name: 'Aa',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: [
      "x L2 D2 L' U' L D2 L' U L'",
      "y' x' L' U L' D2 L U' L' D2 L2",
      "y x R' U R' D2 R U' R' D2 R2",
      "y2 x' R2 D2 R' U' R D2 R' U R'"
    ]
  },
  {
    name: 'Ab',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: [
      "x' L2 D2 L U L' D2 L U' L",
      "y x L U' L D2 L' U L D2 L2",
      "y2 x R2 D2 R U R' D2 R U' R",
      "y' x' R U' R D2 R' U R D2 R2"
    ]
  },
  {
    name: 'E',
    type: 'pll',
    group: 'Diagonal Corner Swap',
    probability: 2,
    algs: [
      "x' L' U L D' L' U' L D L' U' L D' L' U L D",
      "x' R U' R' D R U R' D' R U R' D R U' R' D'"
    ]
  },
  {
    name: 'F',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: ["R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"]
  },
  {
    name: 'Ja',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: [
      "x R2 F R F' R U2 r' U r U2",
      "y2 L' U' L F L' U' L U L F' L2 U L",
      "y' R' U L' U2 R U' R' U2 R L"
    ]
  },
  {
    name: 'Jb',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: ["R U R' F' R U R' U' R' F R2 U' R'"]
  },
  {
    name: 'Ra',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: [
      "R U' R' U' R U R D R' U' R D' R' U2 R'",
      "R U R' F' R U2 R' U2 R' F R U R U2 R'",
      "y' L U2 L' U2 L F' L' U' L U L F L2"
    ]
  },
  {
    name: 'Rb',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: [
      "R2 F R U R U' R' F' R U2 R' U2 R",
      "y' R' U2 R U2 R' F R U R' U' R' F' R2",
      "R' U2 R' D' R U' R' D R U R U' R' U' R"
    ]
  },
  {
    name: 'T',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: ["R U R' U' R' F R2 U' R' U' (R U R') F'"]
  },
  {
    name: 'Y',
    type: 'pll',
    group: 'Diagonal Corner Swap',
    probability: 4,
    algs: [
      "F R U' R' U' R U R' F' R U R' U' R' F R F'",
      "F R' F R2 U' R' U' R U R' F' R U R' U' F'"
    ]
  },
  {
    name: 'V',
    type: 'pll',
    group: 'Diagonal Corner Swap',
    probability: 4,
    algs: [
      "R' U R' U' y R' F' R2 U' R' U R' F R F",
      "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2",
      "z D' R2 D R2 U R' D' R U' R U R' D R U' z'",
      "R U2 R' D R U' R U' R U R2 D R' U' R D2",
      "x' R' F R F' U R U2 R' U' R U' R' U2 R U R' U'"
    ]
  },
  {
    name: 'Na',
    type: 'pll',
    group: 'Diagonal Corner Swap',
    probability: 1,
    algs: [
      "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
      "z U R' D R2 U' R D' U R' D R2 U' R D'"
    ]
  },
  {
    name: 'Nb',
    type: 'pll',
    group: 'Diagonal Corner Swap',
    probability: 1,
    algs: [
      "R' (U R U' R') F' U' F R U R' F R' F' R U' R",
      "z D' R U' R2 D R' U D' R U' R2 D R' U"
    ]
  },
  {
    name: 'Ga',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: [
      "R2 U R' U R' U' R U' R2 (U' D) R' U R D'",
      "R2 u R' U R' U' R u' R2 y' R' U R"
    ]
  },
  {
    name: 'Gb',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: [
      "R' U' R (U D') R2 U R' U R U' R U' R2 D",
      "y F' U' F R2 u R' U R U' R u' R2"
    ]
  },
  {
    name: 'Gc',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: [
      "R2 U' R U' R U R' U R2 (U D') R U' R' D",
      "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2",
      "R2 u' R U' R U R' u R2 y R U' R'"
    ]
  },
  {
    name: 'Gd',
    type: 'pll',
    group: 'Adjacent Corner Swap',
    probability: 4,
    algs: [
      "R U R' (U' D) R2 U' R U' R' U R' U R2 D'",
      "R U R' y' R2 u' R U' R' U R' u R2"
    ]
  }
];
