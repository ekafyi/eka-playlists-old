import React, { Component } from 'react';
import styled, { css, keyframes } from "react-emotion";

const topGap = 4;
const line1 = 20;
const line1Width = 220;
const middleGap = 10;
const line2 = 14;
const line2Width = 170;

const PlaceholderItem = styled('div')
`
	/**
	* Placeholder animation effect
	* from https://codepen.io/nurulishlah/pen/beEGVE
	*/
  margin: 0 0 1rem;

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
const Content = styled('div')``

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`
const animatedBg = css`
	animation-duration: 1.5s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-name: ${shimmer};
	background: #4A51A8;
	background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
	background-size: 800px 104px;
	height: ${topGap + line1 + middleGap + line2}px;
	position: relative;
`

class Placeholder extends Component {
  render() {
    return (
      <PlaceholderItem>
        <div className={animatedBg}>
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