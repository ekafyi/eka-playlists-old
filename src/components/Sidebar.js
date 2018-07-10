import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";
import { H4, SmallerText, TextLink } from "./Text";
import MediaQuery from 'react-responsive';

const StyledSidebar = styled('div')`
  padding: 0 ${props => props.theme.pagePadding.small};
  * {
    color: ${props => props.theme.primary.color};
  }
  .sidebar--intro {
    margin-bottom: ${rhythm(1.5)};
  }

  /**
   *  MQ 
   */
  @media only screen and (max-width: 767px) { }
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

  /**
  *  SQ 
  */
  @supports not (display: grid) {
    ${mq.medium(css`
      width: 25%;
      & + .posts {
        width: calc(75% - 1rem);
      }
    `)};
    ${mq.large(css`
      width: 18.75%;
      & + .posts {
        width: 75%;
      }
    `)};
  }
`
const IntroText = H4.withComponent('aside');
const Credits = SmallerText.withComponent('footer');

export const CreditsText = (
  <React.Fragment>
    <p>
      © Eka 2018 under <TextLink href="http://creativecommons.org/licenses/by/4.0/" rel="license">CC-BY 4.0</TextLink>. Powered by <TextLink href="https://www.gatsbyjs.org/" rel="external">Gatsby</TextLink>, <TextLink href="https://netlify.com/" rel="external">Netlify</TextLink>, and <TextLink href="https://github.com/ekaoddlass/eka-playlists" rel="external">Github</TextLink>. Icon by <TextLink href="http://flaticon.com/" rel="external">Flaticon</TextLink>.
    </p> 
    <p>
      Find me on <TextLink href="https://twitter.com/ekaoddlass" rel="external">Twitter</TextLink> and/or check out my bands <TextLink href="http://yellowmgmt.com/artist/nervous/" rel="external">Nerv.ous</TextLink> and <TextLink href="https://gerpfastkolektif.bandcamp.com/album/split-album-15" rel="external">Brilliant at Breakfast</TextLink>.
    </p>
  </React.Fragment>
)

export default class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar className="sidebar">
        <div className="sticky">
          <IntroText className="sidebar--intro" aria-labelledby="welcome">
            <h5 className="sr-only" id="welcome">Welcome message</h5>
            Hi! <span role="img" aria-label="Emoji: Happy person raising one hand">🙋</span> I’m <TextLink rel="author" href="https://ekamak.es">Eka</TextLink> and I made this site to keep track of songs I like and the occasional thematic playlists I make. Feel free to look around!
          </IntroText>
          <MediaQuery query="(min-device-width: 768px)">
            <Credits className="sidebar--siteinfo" role="contentinfo">
              {CreditsText}
            </Credits>
          </MediaQuery>
        </div>
      </StyledSidebar>
    );
  }
} 