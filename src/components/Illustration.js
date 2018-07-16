import React, { Component } from 'react';
import styled, { css, keyframes } from "react-emotion";
import mq from "../utils/mq";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`
const Disc = styled('svg')`
  color: ${props => props.theme.primary.color};
  transition: all .2s ease-in-out;
  position: absolute;
  width: calc(50% - 2vw);
  height: auto;
  right: 0;
  top: -1px;
  margin-right: -27%;
  path {
    fill: currentColor !important;
  }
  circle {
    fill: ${props => props.theme.secondary.color};
    opacity: 0;
  }
  /**
   *  MQ 
   */
  @media only screen and (max-width: 479px) {
    transform: rotate(0deg);
  }
  ${mq.small(css`
    width: calc(33% - 3vw);
    height: 33vw;
    margin-top: calc(33vw / -2);
    margin-right: 0;
  `)};
  ${mq.medium(css`
  `)};
  ${mq.large(css`
    position: fixed;
    .is-single & {
      z-index: 2;
      circle {
        opacity: 1;
      }
    }
    .is-single &,
    &.is-animated {
      top: -1.5rem;
      animation: ${spin} 7s .5s infinite linear;
    }
  `)};
  ${mq.xl(css`
    width: calc(25% - 2vw);
    height: 25vw;
    margin-top: calc(25vw / -2);
  `)};
  @media only screen and (min-width: 1440px) {
    position: absolute;
    width: 21rem;
    height: 21rem;
    margin-top: -10.5rem;
  }
`

export default class Illustration extends Component {
  render() {
    return (
      <Disc className={'disc-illustration ' + (this.props.animate ? ' is-animated ' : '')}
        transform="rotate(180)" enable-background="new 0 0 32.009 32.009" viewBox="0 0 32.009 32.009" xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Circular icon resembling record or CD</title>
        <circle
           cx="16" cy="16" r="16"
        />
        <g>
          <path d="m21.951 1.151c-8.202-3.284-17.515.702-20.8 8.905-3.286 8.204.702 17.518 8.905 20.802 8.203 3.285 17.516-.702 20.801-8.905 3.286-8.204-.703-17.516-8.906-20.802zm-11.151 27.851c-7.166-2.87-10.662-11.034-7.793-18.201 2.87-7.166 11.035-10.663 18.202-7.792 7.166 2.869 10.662 11.034 7.793 18.2-2.871 7.167-11.035 10.662-18.202 7.793z"
          />
          <path d="m18.234 10.436c-3.076-1.232-6.568.264-7.8 3.339-1.232 3.076.264 6.568 3.339 7.8 3.076 1.232 6.568-.263 7.8-3.339s-.262-6.569-3.339-7.8zm-3.716 9.282c-2.048-.819-3.046-3.153-2.227-5.2.82-2.047 3.152-3.046 5.199-2.227 2.049.82 3.047 3.154 2.229 5.201-.821 2.047-3.154 3.047-5.201 2.226z"
          />
          <path className="line1" fillOpacity="0.25" d="m23.432 18.979c.102-.256-.023-.547-.279-.649-.256-.104-.547.021-.65.278v-.001c-.719 1.796-2.098 3.129-3.744 3.834-.252.108-.371.402-.262.655.109.255.402.372.656.264.01-.004.014-.012.021-.015 1.873-.81 3.439-2.327 4.256-4.366z"
          />
          <path className="line3" fillOpacity="0.75" d="m26.865 19.815c-.256-.103-.547.022-.65.278-1.129 2.82-3.295 4.915-5.883 6.023-.252.108-.371.402-.262.656.109.255.402.371.656.263.012-.006.021-.017.033-.022 2.809-1.213 5.16-3.49 6.385-6.548.102-.256-.023-.547-.279-.65z"
          />
          <path className="line2" fillOpacity="0.5" d="m25.008 19.072c-.256-.103-.547.021-.65.278-.922 2.308-2.693 4.021-4.812 4.928h.002c-.254.109-.373.403-.264.657s.402.371.656.263c.01-.005.016-.014.027-.02 2.34-1.011 4.299-2.907 5.32-5.456.102-.256-.023-.547-.279-.65z"
          />
          {/* <path className="line1" fillOpacity="0.25" d="m13.513 8.913c-.109-.255-.403-.371-.657-.262-.009.003-.014.011-.021.014-1.873.81-3.44 2.328-4.256 4.366h-.001c-.103.257.022.547.278.65.257.103.548-.022.65-.278h.001c.718-1.794 2.097-3.128 3.743-3.832.254-.11.372-.403.263-.658z"
          />
          <path className="line3" fillOpacity="0.75" d="m11.938 5.236c-.109-.254-.403-.371-.657-.263-.012.005-.021.016-.031.021-2.81 1.214-5.16 3.49-6.385 6.548-.104.258.021.549.278.651.256.103.547-.021.65-.278 1.13-2.819 3.295-4.914 5.883-6.022.253-.11.371-.403.262-.657z"
          />
          <path className="line2" fillOpacity="0.5" d="m12.463 7.73c.253-.108.372-.401.263-.656-.109-.253-.403-.371-.657-.262-.01.004-.016.014-.026.018-2.341 1.012-4.3 2.91-5.32 5.458-.104.257.022.547.277.651.256.102.547-.021.65-.278.923-2.308 2.695-4.022 4.812-4.928v-.003z"
          /> */}
        </g>
      </Disc>
    );
  }
} 