import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import Link from "gatsby-link";
import { H2, BoxLabel, H4, SmallText } from "./Text";
import typography, { rhythm } from "../utils/typography";
import TransitionContainer from "../components/TransitionContainer";

const StyledTrack = styled('li')`
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
  &:hover {
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
      font-size: 1.80203rem;
    }
    .track--artist {
      font-size: 1rem;
    }
  }
  ${mq.small(css`
    margin-bottom: 0;
  `)};
}
`
const Title = H4.withComponent('div');
const Artist = SmallText.withComponent('div');

export default class Track extends Component {
  render() {
    return (
      <StyledTrack>
        <Link to={this.props.slug ? this.props.slug : '/test'}>
          <Title className="track--title">{this.props.title}</Title>
          <Artist className="track--artist">{this.props.artist}</Artist>
        </Link>
      </StyledTrack>
    );
  }
}

const StyledTrackGroup = styled('section')`
  margin-bottom: ${rhythm(1.5)};
  ul {
    margin-top: -1px; /* fix bug to maintain vertical rhythm */
    margin-left: 0;
  }

  /**
   *  MQ 
   */
  ${mq.small(css`
    ul {
      display: grid;
      grid-gap: ${rhythm(0.5)};
      grid-template-columns: repeat(2, 1fr);
    }
  `)};
  ${mq.medium(css`
  `)};
  ${mq.large(css`
      ul {
        grid-template-columns: repeat(4, 1fr);
      }
  `)};
`

export class TrackGroup extends Component {
  render() {
    return (
      <StyledTrackGroup>
        <BoxLabel className="track-group--date">{this.props.date}</BoxLabel>
        <ul>
          {this.props.children}
        </ul>
      </StyledTrackGroup>
    );
  }
}

{/*
*/}
const StyledTrackDetail = styled('div')`
  background: ${props => props.theme.primary.color};
  overflow: auto;
  * {
    color: ${props => props.theme.secondary.color};
  }
  .track-detail__h {
    max-width: 75%;
    margin-bottom: 3rem;
    h1 {
      padding-top: ${rhythm(0.5)};
    }
  }
  /**
   *  MQ 
   */
  ${mq.small(css`
  `)};
  ${mq.medium(css`
    border-top: ${rhythm(0.5)} solid #4A51A8;
    border-bottom: ${rhythm(0.5)} solid #4A51A8;
    padding: ${rhythm(1)};
    height: 87.5vh;
  `)};
  ${mq.large(css`
  `)};
`
export class TrackDetail extends Component {
  render() {
    return (
      <StyledTrackDetail className="track-detail">
        <div className="track-detail__h">
          {this.props.heading && (<h1>{this.props.heading}</h1>)}
          {this.props.subheading && (<H2>{this.props.subheading}</H2>)}
        </div>
        {this.props.children}
      </StyledTrackDetail>
    );
  }
}