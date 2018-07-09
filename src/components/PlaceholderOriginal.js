import React, { Component } from 'react';
import styled, { css, keyframes } from "react-emotion";

const PlaceholderItem = styled('div')
`
	/**
	* Placeholder animation effect
	* from https://codepen.io/nurulishlah/pen/beEGVE
	*/
  margin: 0 auto 1rem;

	&>*>* {
		background-color: ${props => props.theme.secondary.color};
		position: absolute;
	}

	.h__top,
	.h__bottom,
	.s__bottom {
    top: 0;
    left: 40px;
    right: 0;
    height: 10px;
	}

	.h__left,
	.h__right,
	.s__left,
	.s__right {
    top: 10px;
    left: 40px;
    height: 8px;
    width: 10px;
	}

	.h__bottom {
    top: 18px;
    height: 6px;
	}

	.s__left,
	.s__right {
    top: 24px;
    height: 6px;
	}

	.h__right,
	.s__right {
    width: auto;
    left: 300px;
    right: 0;
	}

	.s__right {
		left: 230px;
	}

	.s__bottom {
		top: 30px;
		height: 10px;
	}

	.h__top,
	.h__bottom,
	.s__bottom {
    top: 0;
    left: 40px;
    right: 0;
    height: 10px;
	}

	.h__left,
	.s__left,
	.h__right,
	.s__right {
    top: 10px;
    left: 40px;
    height: 8px;
    width: 10px;
	}

	.h__bottom {
    top: 18px;
    height: 6px;
	}

	.s__left,
	.s__right {
    top: 24px;
    height: 6px;
	}

	.h__right,
	.s__right {
    width: auto;
    left: 300px;
    right: 0;
	}

	.s__right {
    left: 230px;
	}

	.s__bottom {
    top: 30px;
    height: 10px;
	}

	.c__top,
	.c__2--line,
	.c__3--line,
	.c__2--end,
	.c__3--end,
	.c__1--end {
    top: 40px;
    left: 0;
    right: 0;
    height: 6px;
	}

	.c__top {
    height:20px;
	}

	.c__1--end,
	.c__2--end,
	.c__3--end{
    width: auto;
    left: 380px;
    right: 0;
    top: 60px;
    height: 8px;
	}

	.c__2--line  {
    top: 68px;
	}

	.c__2--end {
    left: 420px;
    top: 74px;
	}

	.c__3--line {
    top: 82px;
	}

	.c__3--end {
    left: 300px;
    top: 88px;
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
	background: #f6f7f8;
	background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
	background-size: 800px 104px;
	height: 96px;
	position: relative;
`

class Placeholder extends Component {
  render() {
    return (
      <PlaceholderItem>
        <div className={animatedBg}>
          <Header className="h__top"></Header>
          <Header className="h__left"></Header>
          <Header className="h__right"></Header>
          <Header className="h__bottom"></Header>
          <Subheader className="s__left"></Subheader>
          <Subheader className="s__right"></Subheader>
          <Subheader className="s__bottom"></Subheader>
          <Content className="c__top"></Content>
          <Content className="c__1--end"></Content>
          <Content className="c__2--line"></Content>
          <Content className="c__2--end"></Content>
          <Content className="c__3--line"></Content>
          <Content className="c__3--end"></Content>
        </div>
      </PlaceholderItem>
    );
  }
}

export default Placeholder;