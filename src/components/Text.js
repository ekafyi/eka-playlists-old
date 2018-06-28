import React, { Component } from "react";
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";
import PropTypes from 'prop-types';

const StyledFoo = css`
  color: red;
  /*
  font-size: ${typography.toJSON().h1.fontSize};
  line-height: ${typography.toJSON().h1.lineHeight};
  */
`
export class Foo extends Component {
  render() {
    return (
      <div className={StyledFoo}>
        {this.props.children}
      </div>
    );
  }
}

// Basic typography 

export const H1 = styled('h1')`
  font-size: ${typography.toJSON().h1.fontSize};
  line-height: ${typography.toJSON().h1.lineHeight};
  margin-bottom: ${typography.toJSON().h1.marginBottom};
  font-weight: ${typography.toJSON().h1.fontWeight};
  @media only screen and (max-width : 479px) {
    font-size: ${typography.toJSON().h1xs.fontSize};
    line-height: ${typography.toJSON().h1xs.lineHeight};
  }
`
export const H2 = styled('h2')`
  font-size: ${typography.toJSON().h2.fontSize};
  line-height: ${typography.toJSON().h2.lineHeight};
  margin-bottom: ${typography.toJSON().h2.marginBottom};
  font-weight: ${typography.toJSON().h2.fontWeight};
`
export const H3 = styled('h3')`
  font-size: ${typography.toJSON().h3.fontSize};
  line-height: ${typography.toJSON().h3.lineHeight};
  margin-bottom: ${typography.toJSON().h3.marginBottom};
  font-weight: ${typography.toJSON().h3.fontWeight};
`
export const H4 = styled('h4')`
  font-size: ${typography.toJSON().h4.fontSize};
  line-height: ${typography.toJSON().h4.lineHeight};
  margin-bottom: ${typography.toJSON().h4.marginBottom};
  font-weight: ${typography.toJSON().h4.fontWeight};
  word-spacing: -.01em;
`
export const H5 = styled('h5')`
  font-size: ${typography.toJSON().h5.fontSize};
  line-height: ${typography.toJSON().h5.lineHeight};
  margin-bottom: ${typography.toJSON().h5.marginBottom};
  font-weight: ${typography.toJSON().h5.fontWeight};
`
export const SmallText = styled('h6')`
  font-size: ${typography.toJSON().h6.fontSize};
  line-height: ${typography.toJSON().h6.lineHeight};
  margin-bottom: ${typography.toJSON().h6.marginBottom};
  font-weight: ${typography.toJSON().h6.fontWeight};
`
export const BodyText = styled('p')`
  font-size: ${typography.toJSON().p.fontSize};
  line-height: ${typography.toJSON().p.lineHeight};
  margin-bottom: ${typography.toJSON().p.marginBottom};
  font-weight: ${typography.toJSON().p.fontWeight};
`
export const SmallerText = styled('small')`
  font-size: ${typography.toJSON().small.fontSize};
  line-height: ${typography.toJSON().small.lineHeight};
  margin-bottom: ${props => props.oddLine ? typography.toJSON().small.marginBottom : 0};
  font-weight: ${typography.toJSON().small.fontWeight};
  display: block;
`
SmallerText.propTypes = {
  oddLine: PropTypes.bool
}

// Misc text components 

export const BoxLabel = styled('h6')`
  background: ${props => props.theme.primary.color};
  color: ${props => props.theme.secondary.color};
  display: inline-block;
  padding: 0 ${rhythm(1 / 3)};
  margin-bottom: ${rhythm(0.5)};
`
export const TextLink = styled('a')`
  color: currentColor;
  font-weight: bold;
  //display: inline-block;
  border-bottom: .0625rem solid #fff;
  box-shadow: 0 -0.25rem 0 #fff inset;
  padding: 0 .125rem;
  position: relative;
  &:hover {
    background: ${props => props.theme.primary.color};
    color: ${props => props.theme.secondary.color};
    border-bottom-color: ${props => props.theme.primary.color};
    box-shadow:  0 -0.25rem 0 ${props => props.theme.primary.color} inset;
  }
`