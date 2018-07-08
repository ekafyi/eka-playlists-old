import React, { Component } from "react";
import Link from "gatsby-link";
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";
import { H1 } from "./Text";

const StyledMainTitle = styled(H1)`
  padding-left: ${props => props.theme.pagePadding.small};
  margin: ${rhythm(3)} 0 ${rhythm(1)};
  max-width: 9ch;
  height: ${rhythm(7.5)}; // maintain vertical rhythm despite custom lineheight
  line-height: .9 !important; 
  word-spacing: -.025em;
  a {
    font-size: calc(1em + 1vw);
    &>span {
      display: inline-block;
      font-size: 35%;
      letter-spacing: -0.5px;
      word-spacing: 0;
      line-height: .9;
      &>span:first-child {
        display: block;
        border-bottom: 2px solid currentColor;
        padding-bottom: .1em;
        margin-bottom: .05em;
      }
    }
  }
  /**
   *  MQ 
   */
  @media only screen and (max-width: 359px) {
    //margin-bottom: ${rhythm(1)};
    line-height: .8 !important;
    a {
      font-size: calc(1em - 3vw);
    }
  }
  ${mq.small(css`
    margin: ${rhythm(2)} 0 0;
    max-width: 15ch;
    font-size: ${typography.toJSON().h1xs.fontSize};
    line-height: ${typography.toJSON().h1xs.lineHeight};
  `)};
  ${mq.medium(css`
    margin-top: 0;
    margin-bottom: ${rhythm(2)};
    padding-top: ${rhythm(2)}; /* workaround: make sidebar sticky */
    max-width: 12ch;
    height: ${rhythm(9.5)}; /* add padding to total height */
    font-size: ${typography.toJSON().h1.fontSize};
    line-height: .8 !important;
    letter-spacing: -.02em;
    word-spacing: -.025em;
    a {
      font-size: calc(.75em + 2vw);
    }
  `)};
  ${mq.large(css`
    padding-top: ${rhythm(3)}; /* workaround: make sidebar sticky */
    /* harusnya paddingLarge from themeObject */
    padding-left: 1rem;
  `)};
  ${mq.xl(css`
    padding-top: ${rhythm(6)}; /* workaround: make sidebar sticky */
    margin-bottom: ${rhythm(3)};
    max-width: initial;
    height: ${rhythm(10)}; /* add padding to total height */
    a {
      font-size: calc(.9em + 1vw);
    }
  `)};
`

export default class MainTitle extends Component {
  render() {
    return (
      <StyledMainTitle role="header">
        <Link to="/">
          eka <span><span>is / was /</span> <span>has been</span></span> listening to...
        </Link>
      </StyledMainTitle>
    );
  }
} 