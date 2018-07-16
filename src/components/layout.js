import React, { Component } from 'react';
import { StaticQuery } from "gatsby";
import { injectGlobal } from "react-emotion";
import themeObject from "../utils/colors";
import mq from "../utils/mq";
import "../utils/global-styles";
import { ThemeProvider } from "emotion-theming";
import { css } from "react-emotion";
import MainTitle from "./Title";
import Illustration from "./Illustration";
import Footer from "./Footer";
import { rhythm } from "../utils/typography";
import TransitionContainer from './TransitionContainer';
//import IsScrolling from "react-is-scrolling";

injectGlobal`
  html {
    background: ${themeObject.primary.color};
  }
  body {
    background: ${themeObject.secondary.color};
    border: solid ${themeObject.primary.color};
    border-width: ${rhythm(0.25)};
    ${mq.medium(css`
      border-width: ${rhythm(0.5)};
    `)};
  }
  h1, h2, h3,
  h1>*, h2>*, h3>*,
  .h1, .h2, .h3 {
    color: ${themeObject.primary.color};
  }
`
const wrapperStyles = css`
  position: relative; /* prevent Illustration stretching body in xs */
  overflow: hidden; /* prevent Illustration stretching body in xs */
  max-width: 100rem;
  margin: 0 auto;
  ${mq.medium(css`
    overflow: initial; /* return to initial to enable position: sticky */
  `)};
`
const contentStyles = css`
  .full-width {
    grid-column: 1/4;
  }

  /**
   *  MQ 
   */
  ${mq.medium(css`
    display: grid;
    grid-template-columns: minmax(13rem, 3fr) minmax(auto, 75%) 1fr;
  `)};

  /**
  *  SQ 
  */
  @supports not (display: grid) {
    ${mq.medium(css`
      display: flex;
    `)};
  }
`

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
        }
        render={data => (
          <ThemeProvider theme={themeObject}>
            <React.Fragment>
              <a href="#content" className="sr-only">Skip to main content</a>
              <div className={wrapperStyles + ` wrapper`}>
                {!this.props.debugMode && <MainTitle />}
                <div id="content" className={contentStyles + ` content`}>
                  {this.props.children}
                </div>
                {!this.props.debugMode && 
                  <React.Fragment>
                    <Illustration />
                    <Footer />
                  </React.Fragment>
                }
              </div>
            </React.Fragment>
          </ThemeProvider>
        )}
      />
    );
  }
}
{/* 
  to use scrolling detection:
  function Layout({ children, isScrolling }) {
    return ()
  }
  export default IsScrolling(Layout)
*/}
export default Layout;