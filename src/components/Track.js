import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import Link from "gatsby-link";
import { BoxLabel, H4, SmallText } from "./Text";
import typography, { rhythm } from "../utils/typography";
import Placeholder from "./Placeholder";

// 1. Track

export const TrackContainer = styled('li')`
  position: relative; /* over CD illustration */
  z-index: 1; /* over CD illustration */
  background-color: ${props => props.theme.secondary.color};
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${props => props.theme.bgAccent.color}' fill-opacity='0.7' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 1.5rem;
  margin-bottom: ${rhythm(0.5)};
  line-height: 1;
  * {
    color: ${props => props.theme.primary.color};
  }
  &:hover,
  .active {
    background: ${props => props.theme.primary.color};
    * {
      color: ${props => props.theme.secondary.color};
    }
  }
  &>a {
    display: block;
    height: 100%;
    text-decoration: none;
    padding: ${rhythm(1 / 2)} ${rhythm(1 / 3)};
  }
  /**
   *  MQ 
   */
  @media only screen and (max-width: 479px) {
    .track--title {
      font-size: 1.4238rem;
    }
    .track--artist {
      font-size: 1rem;
    }
  }
  ${mq.small(css`
    margin-bottom: 0;
  `)};

  /**
  *  SQ 
  */
  @supports not (display: grid) {
    display: flex; // Safari 10 fix
    flex-flow: column;
    &>a {
      flex-grow: 1;
    }
  }
}
`
const Title = H4.withComponent('div');
const Artist = SmallText.withComponent('div');
export default class Track extends Component {
  render() {
    return (
      <TrackContainer>
        <Link to={this.props.slug ? this.props.slug : '/test'} activeClassName="active">
          <Title className="track--title">{this.props.title}</Title>
          <small className="sr-only">by</small>
          <Artist className="track--artist">{this.props.artist}</Artist>
        </Link>
      </TrackContainer>
    );
  }
}

// 2. TrackGroup

const TrackContainerGroup = styled('section')`
  margin-bottom: ${rhythm(1.5)};
  ul {
    margin-top: -1px; /* fix bug to maintain vertical rhythm */
    margin-left: 0;
  }

  /**
   *  MQ 
   */
  @media only screen and (max-width: 767px) {
    .track-group--date {
      position: sticky;
      top: 0;
    }
  }
  ${mq.small(css`
    .tracks {
      display: grid;
      grid-gap: ${rhythm(0.5)};
      grid-template-columns: repeat(2, 1fr);
    }
  `)};
  ${mq.medium(css`
  `)};
  ${mq.large(css`
    .tracks {
      grid-template-columns: repeat(4, 1fr);
    }
  `)};

  /**
  *  SQ 
  */
  @supports not (display: grid) {
    ${mq.medium(css`
      .tracks {
        margin-top: calc(${rhythm(-0.25)} - 1px);
        margin-left: ${rhythm(-0.25)};
        margin-right: ${rhythm(-0.25)};
        display: flex;
        flex-wrap: wrap;
        &>* {
          margin: ${rhythm(0.5)} ${rhythm(0.25)};
          flex: 1 0 calc(50% - ${rhythm(0.5)});
          max-width: calc(50% - ${rhythm(0.5)});
        }
      }
    `)};
    ${mq.large(css`
      .tracks>* {
        flex: 1 0 calc(25% - ${rhythm(0.5)});
        max-width: calc(25% - ${rhythm(0.5)});
      }
    `)};
  }
`
export class TrackGroup extends Component {
  render() {
    return (
      <TrackContainerGroup>
        <BoxLabel className="track-group--date">
          {this.props.date}
        </BoxLabel>
        {this.props.children}
      </TrackContainerGroup>
    );
  }
}

// 3. Placeholder Group
const PlaceholderTrackGroup = TrackContainerGroup.withComponent('aside');
const placeholderStyle = css`
  position: relative;
  z-index: 1;
  .track-group--date {
    background: rgba(111,111,111,0.25);
    width: 14ch;
  }
  .tracks>* {
    opacity: .75;
  }

  /**
  *  SQ 
  */
  @supports not (display: grid) {
    ${mq.medium(css`
      .track-group--date {
        margin-bottom: ${rhythm(0.25)};
      }
    `)};
  }
`
export class PlaceholderGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <PlaceholderTrackGroup className={placeholderStyle}>
          <BoxLabel className="track-group--date">&nbsp; </BoxLabel>
          <div className="tracks">
            <Placeholder className="is-flex" />
            <Placeholder />
            <Placeholder />
          </div>
        </PlaceholderTrackGroup>
        <PlaceholderTrackGroup className={placeholderStyle}>
          <BoxLabel className="track-group--date">&nbsp; </BoxLabel>
          <div className="tracks">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </div>
        </PlaceholderTrackGroup>
        <PlaceholderTrackGroup className={placeholderStyle}>
          <BoxLabel className="track-group--date">&nbsp; </BoxLabel>
          <div className="tracks">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </div>
        </PlaceholderTrackGroup>
      </React.Fragment>
    );
  }
}

// // Generate random width
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }