import { css } from "react-emotion";

const breakpoints = {
  // Numerical values will result in a min-width query
  small: 480,
  medium: 768,
  large: 1024,
  xl: 1200,
  portraitMdUp: "screen and (min-width: 768px) and (orientation: portrait)",
}

const mq = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
    let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
    accumulator[label] = cls =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `
    return accumulator
  },
  {}
)

export default mq;