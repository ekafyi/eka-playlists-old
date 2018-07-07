import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import { rhythm } from "../utils/typography";
import { SmallerText, TextLink } from "./Text";
import { CreditsText } from "./Sidebar";

const Credits = SmallerText.withComponent('div');
const StyledFooter = styled('aside')`
  color: ${props => props.theme.primary.color};
  padding: 0 ${props => props.theme.pagePadding.small};
  margin-top: ${rhythm(2)};
  margin-bottom: ${rhythm(1)};
  p {
    display: inline;
    margin-right: .5rem;
  }
  /**
   *  MQ 
   */
  ${mq.medium(css`
    display: none; // hide on medium-up
  `)};
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter role="presentation">
        <Credits>
          {CreditsText}
        </Credits>
      </StyledFooter>
    );
  }
} 