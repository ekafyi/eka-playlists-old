import React, { Component } from 'react';
import styled, { css, keyframes } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";

class LoadingIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const barFloat = keyframes`
      0%, 100% {
        transform: translateY(4px);
      }
      50% {
        transform: translateY(-4px);
      }
    `
    const StyledLoadingIcon = styled('div')`
      position: absolute !important; // override sticky
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      text-align: center;
      .bars {
        margin: 0 auto;
        display: inline-block;
      }
      .bars li {
        height: 28px;
        width: 5px;
        background: ${props => props.theme.secondary.color};
        float: left;
        margin: 3px;
        animation: ${barFloat} 1.8s infinite;
        &:nth-child(1) {
          height: 18px;
          margin-top: 7px;
          animation-delay: .1s;
        }
        &:nth-child(2) {
          height: 22px;
          margin-top: 5px;
          animation-delay: .2s;
        }
        &:nth-child(3) {
          animation-delay: .3s;
        }
        &:nth-child(4) {
          animation-delay: .4s;
        }
        &:nth-child(5) {
          height: 22px;
          margin-top: 5px;
          animation-delay: .5s;
        }
        &:nth-child(6) {
          height: 18px;
          margin-top: 7px;
          animation-delay: .6s;
        }
      }
    `
    return (
      <StyledLoadingIcon aria-hidden="true">
        <ul className="bars">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </StyledLoadingIcon>
    );
  }
}

export default LoadingIcon;