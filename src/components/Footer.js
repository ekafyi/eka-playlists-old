import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import { rhythm } from "../utils/typography";
import { SmallerText, TextLink } from "./Text";

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
          <p>
          Original content by <TextLink href="#">Eka</TextLink> under <TextLink rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</TextLink>. Powered by <TextLink href="#">Gatsby</TextLink> and <TextLink href="#">Netlify</TextLink>, hosted on <TextLink href="#">Github</TextLink>. Icon by <TextLink href="#">Flaticon</TextLink>.
          </p> 
          <p>
            Find me on <TextLink href="#">Twitter</TextLink>, <TextLink href="#">Medium</TextLink>, and/or check out my bands <TextLink href="#">Nerv.ous</TextLink> and <TextLink href="#">Brilliant at Breakfast</TextLink>.
          </p>
        </Credits>
      </StyledFooter>
    );
  }
} 