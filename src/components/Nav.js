import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import typography, { rhythm } from "../utils/typography";

export const NavBottomContainer = styled('nav')`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9;
`
const navBtnStyles = css`
  font-size: ${typography.toJSON().h3.fontSize};
  font-weight: 700;
  a {
    display: block;
    padding: ${rhythm(0.75)} ${rhythm(1)};
    text-align: center;
  }
  &:last-child {
    margin-top: ${rhythm(0.5)};
  }
`
export class NavBtn extends Component {
  render() {
    return (
      <div className={navBtnStyles + ' nav--btn '}>
        {this.props.children}
      </div>
    );
  }
}
