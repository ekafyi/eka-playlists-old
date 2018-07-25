import React, { Component } from 'react';
import { StaticQuery } from "gatsby";
import styled, { injectGlobal } from "react-emotion";
import themeObject from "../utils/colors";
import mq from "../utils/mq";
import "../utils/global-styles";
import { ThemeProvider } from "emotion-theming";
import { css } from "react-emotion";
import MainTitle from "./Title";
import Illustration from "./Illustration";
import Footer from "./Footer";
import { rhythm } from "../utils/typography";
//import TransitionContainer from './TransitionContainer';
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
const Content = styled('div')`
  .full-width {
    grid-column: 1/4;
  }
  .pattern-box {
    background-color: ${props => props.theme.primary.color};
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 1.5rem;
  }
  .invert-body-text a {
    color: ${props => props.theme.secondary.color};
    border-bottom: ${rhythm(0.125)} solid #313886;
    padding: 0 2px;
    &:hover {
      border-bottom-color: transparent;
      background: ${props => props.theme.secondary.color};
      color: ${props => props.theme.primary.color};
    }
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
              <a href="#main" className="sr-only">Skip to main content</a>
              <div className={wrapperStyles + ` wrapper`}>
                {!this.props.debugMode && <MainTitle />}
                <Content className='content'>
                  {this.props.children}
                </Content>
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