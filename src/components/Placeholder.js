import React, { Component } from 'react';
import styled, { keyframes } from "react-emotion";
import { rhythm } from "../utils/typography";

const color1 = '#eee';
const color2 = '#ddd';
const topGap = 4;
const middleGap = 10;
const line1 = 20;
const line2 = 14;
let line1Width = 220;
let line2Width = 170;

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`
const PlaceholderItem = styled('div')
`
	/**
	* Placeholder animation effect
	* from https://codepen.io/nurulishlah/pen/beEGVE
	*/
  margin: 0;
	height: ${rhythm(4)};
	padding-top: ${rhythm(0.5)};

	.animated-bg {
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-name: ${shimmer};
		background-color: ${props => props.theme.secondary.color};
		background: linear-gradient(to right, ${color1} 8%, ${color2} 18%, ${color1} 33%);
		background-size: 800px 104px;
		height: ${topGap + line1 + middleGap + line2}px;
		position: relative;
	}

	&>*>* {
		background-color: ${props => props.theme.secondary.color};
		position: absolute;
	}

	.h__top,
	.h__bottom {
    top: 0;
    left: 0;
    right: 0;
    height: ${topGap}px;
	}

	.h__right,
	.s__right {
    top: ${topGap}px;
    left: 0;
    height: ${line1}px;
    width: ${topGap}px;
	}

	.s__right {
    top: 24px;
    height: 6px;
	}

	.h__right,
	.s__right {
    width: auto;
    left: ${line1Width}px;
    right: 0;
    top: ${topGap}px;
    left: 0;
    height: ${line1}px;
    width: ${topGap}px;
	}

	.s__right {
		left: ${line2Width}px;
    top: ${topGap + line1 + middleGap}px;
    height: ${line2}px;
	}

	.h__top,
	.h__bottom {
    top: 0;
    left: 0;
    right: 0;
    height: ${topGap}px;
	}

	.h__bottom {
    top: ${topGap + line1}px;
    height: ${middleGap}px;
	}

	.h__right,
	.s__right {
    width: auto;
    left: ${line1Width}px;
    right: 0;
	}

	.s__right {
    left: ${line2Width}px;
	}
`
const Header = styled('div')``
const Subheader = styled('div')``

class Placeholder extends Component {
  render() {
    return (
      <PlaceholderItem role="presentation">
        <div className="animated-bg">
          <Header className="h__top"></Header>
          <Header className="h__right"></Header>
          <Header className="h__bottom"></Header>
          <Subheader className="s__right"></Subheader>
        </div>
      </PlaceholderItem>
    );
  }
}

export default Placeholder;