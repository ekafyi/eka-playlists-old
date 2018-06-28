import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import { rhythm } from "../utils/typography";
import { H4, SmallerText, TextLink } from "./Text";
//import Link from "gatsby-link";

const StyledSidebar = styled('div')`
  grid-column: 1/17;
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
  ${mq.small(css`
    .sidebar--intro {
      width: 75%;
    }
  `)};
  ${mq.medium(css`
    grid-column: 1/5;
    padding-right: calc(1.5rem + 1vw);
    & + .posts {
      grid-column: 5/17;
    }
    .sticky {
      top: ${rhythm(0.5)};
    }
    .sidebar--intro {
      width: 100%;
      margin-top: ${rhythm(1.5)};
    }
    .sidebar--siteinfo {
      display: block;
      max-width: 24ch;
      margin-top: calc(100vh - 25rem - 1vw);
    }
  `)};
  ${mq.large(css`
    grid-column: 1/4;
    padding-left: 1rem;
    padding-right: 0;
    & + .posts {
    }
    .sticky {
      top: ${rhythm(1)};
    }
    .sidebar--siteinfo {
      margin-top: calc(100vh - 22.5rem - 1vw);
    }
  `)};
  ${mq.xl(css`
    grid-column: 1/3;
    margin-right: calc(-2vw);
    & + .posts {
      grid-column: 4/16;
    }
    .sidebar--siteinfo {
      margin-top: calc(100vh - 25rem - 1vw);
    }
  `)};
  @media screen and (min-width: 768px) and (orientation: portrait) {
    .sidebar--siteinfo {
      margin-top: calc(102vh - 31.5rem - 1vw);
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
    .sidebar--siteinfo {
      margin-top: inherit;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) and (max-height: 499px) {
    .sidebar--intro {
      font-size: 1em;
      line-height: 1.325rem;
    }
  }
`
const IntroText = H4.withComponent('div');
const Credits = SmallerText.withComponent('div');

export default class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar role="contentinfo">
        <div className="sticky">
          <IntroText className="sidebar--intro">
            Hi! <span role="img" aria-label="Emoji: Happy person raising one hand">🙋🏽</span> I <TextLink href="#">built this site</TextLink> to keep track of songs I like and the occasional playlists (“mixtapes”) I make. Have a look and enjoy!
          </IntroText>
          <Credits className="sidebar--siteinfo">
            <p>
            Original content by <TextLink href="">Eka</TextLink> under <TextLink rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</TextLink>. Powered by <TextLink href="">Gatsby</TextLink> and <TextLink href="">Netlify</TextLink>, hosted on <TextLink href="">Github</TextLink>. Icon by <TextLink href="">Flaticon</TextLink>.
            </p> 
            <p>
              Find me on <TextLink href="">Twitter</TextLink>, <TextLink href="">Medium</TextLink>, and/or check out my bands <TextLink href="">Nerv.ous</TextLink> and <TextLink href="">Brilliant at Breakfast</TextLink>.
            </p>
          </Credits>
        </div>
      </StyledSidebar>
    );
  }
} 
