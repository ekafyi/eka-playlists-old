const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 1,
      //transform: `translateY(1rem)`,
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      //transform: `translateY(0)`,
    },
    exiting: {
      transition: `opacity ${timeout*2}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      //transform: `translateY(1rem)`,
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle;