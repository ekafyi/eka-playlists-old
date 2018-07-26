// reference:
// http://reactcommunity.org/react-transition-group/transition/

const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
      //transform: `translateY(1rem)`,
    },
    entered: {
      opacity: 1,
      transition: `opacity ${timeout}ms ease-in-out`,
      //transform: `translateY(0)`,
    },
    exiting: {
      opacity: 0,
      transition: `opacity ${timeout}ms ease-in-out`,
      //transform: `translateY(1rem)`,
    },
  }
}

const getTransitionStyle = ({ timeout, status }) => getTransitionStyles(timeout)[status]

export default getTransitionStyle;