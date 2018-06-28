import Typography from "typography"

// https://kyleamathews.github.io/typography.js
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: ["inherit"],
  headerLineHeight: 1.2,
  scaleRatio: 1.125,
  bodyFontFamily: [
    "Helvetica Neue", 
    "system-ui", 
    "-apple-system", 
    "BlinkMacSystemFont", 
    "Segoe UI",
    "Arial", 
    "sans-serif"
  ],
  // googleFonts: [
  //   {
  //     name: 'Roboto',
  //     styles: [ '400', '700' ],
  //   }
  // ],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      textDecoration: 'none'
    },
    h1: {
      ...scale(15),
      lineHeight: rhythm(14 / 4),
      letterSpacing: '-0.01em',
      wordSpacing: '-0.05em',
    },
    h1xs: {
      ...scale(11),
      lineHeight: rhythm(10 / 4),
    },
    h2: {
      ...scale(8),
      lineHeight: rhythm(6 / 4),
      paddingBottom: rhythm(2 / 4),
      marginBottom: rhythm(1),
    },
    h3: {
      ...scale(5),
      paddingBottom: rhythm(2 / 4),
      marginBottom: rhythm(1),
    },
    h4: {
      ...scale(2),
      lineHeight: rhythm(4 / 4),
      marginBottom: 0,
    },
    h5: {
      ...scale(0),
      marginBottom: 0,
    },
    h6: {
      ...scale(-1),
      marginBottom: 0,
    },
    small: {
      ...scale(-2),
      lineHeight: rhythm(3 / 4),
      marginBottom: rhythm(1 / 4),
    },
    p: {
      marginBottom: rhythm(2 / 4),
    }
  }),
});

export default typography
export const rhythm = typography.rhythm

// scale 1 : 1.125 (major second)
// console.log(typography.scale(-1)); // 14.22px
// console.log(typography.scale(1)); // 18px
// console.log(typography.scale(2)); // 20.25px
// console.log(typography.scale(4)); // 25.62px
// console.log(typography.scale(7)); // 36.49px
// console.log(typography.scale(12)); // 65.75px
// console.log(typography.scale(15)); // 93.62px
