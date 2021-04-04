const coral = '#d45656';
const mediumGrey = '#666666';
const pureBlack = '#000000';
const pureWhite = '#FFFFFF';
const darkGrey = '#404040';
const lightGrey = '#b0b0b0';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  primary: {
    contrastText: pureWhite,
    dark: darkGrey,
    main: pureBlack,
    light: mediumGrey
  },
  secondary: {
    contrastText: pureBlack,
    dark: darkGrey,
    main: pureWhite,
    light: coral
  },
  text: {
    primary: pureBlack,
    secondary: coral,
    link: pureWhite
  },
  link: mediumGrey,
  background: {
    default: pureWhite,
    paper: coral
  },
  divider: lightGrey
};
