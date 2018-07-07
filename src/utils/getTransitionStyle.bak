const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
      transform: `translateY(6rem)`,
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout*0.75}ms ease-in-out`,
      //transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0)`,
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout*1.5}ms ease-in-out`,
      //transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateY(6rem)`,
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle;