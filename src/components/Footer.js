import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";
import { SmallerText, TextLink } from "./Text";
import { CreditsText } from "./Sidebar";
import MediaQuery from 'react-responsive';

const StyledFooter = styled('footer')`
  /** Small screen only */
  color: ${props => props.theme.primary.color};
  padding: 0 ${props => props.theme.pagePadding.small};
  margin-top: ${rhythm(2)};
  margin-bottom: ${rhythm(1)};
  font-size: ${typography.toJSON().small.fontSize};
  line-height: ${typography.toJSON().small.lineHeight};
  p {
    display: inline;
    margin-right: .5rem;
  }
`

export default class Footer extends Component {
  render() {
    return (
      <MediaQuery query="(max-device-width: 767px)">
        <StyledFooter role="contentinfo">
          {CreditsText}
        </StyledFooter>
      </MediaQuery>
    );
  }
} 