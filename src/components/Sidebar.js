import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";
import { H4, SmallerText, TextLink } from "./Text";

const StyledSidebar = styled('div')`
  padding: 0 ${props => props.theme.pagePadding.small};
  * {
    color: ${props => props.theme.primary.color};
  }
  .sidebar--intro {
    margin-bottom: ${rhythm(1.5)};
  }
  .sidebar--siteinfo {
    display: none; /* hide for xs, ❗TODO: figure out where to put credits */
  }

  /**
   *  MQ 
   */
  @media only screen and (max-width: 767px) {
    .sidebar--intro {
      font-size: ${typography.toJSON().h5.fontSize};
    }
  }
  ${mq.small(css`
    .sidebar--intro {
      width: 75%;
    }
  `)};
  ${mq.medium(css`
    padding-right: calc(1rem + 2vw);
    padding-top: ${rhythm(1.5)};
    .sticky {
      top: ${rhythm(0.5)};
      height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto ${rhythm(0.5)};
    }
    .sidebar--intro {
      width: 100%; /* override small style */
    }
    .sidebar--siteinfo {
      display: block; /* override small style */
      grid-row: 3/4;
    }
  `)};
  ${mq.large(css`
    padding-left: 1rem;
  `)};
  ${mq.xl(css`
  padding-right: calc(2rem + 2vw);
  `)};
  @media screen and (min-width: 768px) and (max-width: 1023px) and (max-height: 499px) { /* smallish landscape screen */
    .sidebar--intro {
      font-size: 1em; /* make text smaller so entire sidebar fits screen height */
      line-height: 1.325rem;
    }
  }
`
const IntroText = H4.withComponent('div');
const Credits = SmallerText.withComponent('div');

export const CreditsText = (
  <React.Fragment>
    <p>
      © Eka 2018 under <TextLink rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</TextLink>. Powered by <TextLink href="">Gatsby</TextLink>, <TextLink href="">Netlify</TextLink>, and <TextLink href="">Github</TextLink>. Icon by <TextLink href="">Flaticon</TextLink>.
    </p> 
    <p>
      Find me on <TextLink href="https://twitter.com/ekaoddlass">Twitter</TextLink> and/or check out my bands <TextLink href="http://yellowmgmt.com/artist/nervous/">Nerv.ous</TextLink> and <TextLink href="https://gerpfastkolektif.bandcamp.com/album/split-album-15">Brilliant at Breakfast</TextLink>.
    </p>
  </React.Fragment>
)

export default class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar role="contentinfo">
        <div className="sticky">
          <IntroText className="sidebar--intro">
            Hi! <span role="img" aria-label="Emoji: Happy person raising one hand">🙋</span> I’m <TextLink href="#">Eka</TextLink> and I <TextLink href="#">made this site</TextLink> to keep track of songs I like and the occasional thematic playlists I make. Feel free to look around!
          </IntroText>
          <Credits className="sidebar--siteinfo">
            {CreditsText}
          </Credits>
        </div>
      </StyledSidebar>
    );
  }
} 