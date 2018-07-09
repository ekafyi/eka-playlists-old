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
  ${mq.small(css`
    ul.tracks {
      display: grid;
      grid-gap: ${rhythm(0.5)};
      grid-template-columns: repeat(2, 1fr);
    }
  `)};
  ${mq.medium(css`
  `)};
  ${mq.large(css`
    ul.tracks {
      grid-template-columns: repeat(4, 1fr);
    }
  `)};
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
const PlaceholderTrackContainer = styled(TrackContainer)`
  height: ${rhythm(4)};
  &:hover {
    background-color: ${props => props.theme.secondary.color};
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${props => props.theme.bgAccent.color}' fill-opacity='0.7' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 1.5rem;
  }
`
const placeholderStyle = css`
  .track-group--date {
    background: #aaa;
    width: 14ch;
  }
`
export class PlaceholderGroup extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 
        <PlaceholderTrackGroup className={placeholderStyle + ' track-group--placeholder '}>
          <BoxLabel className="track-group--date">&nbsp; </BoxLabel>
          <ul className="tracks">
            <PlaceholderTrackContainer>
              <Placeholder />
            </PlaceholderTrackContainer>
            <PlaceholderTrackContainer>
              <Placeholder />
            </PlaceholderTrackContainer>
            <PlaceholderTrackContainer>
              <Placeholder />
            </PlaceholderTrackContainer>
          </ul>
        </PlaceholderTrackGroup> 
        */}
        <PlaceholderTrackGroup className={placeholderStyle}>
          <BoxLabel className="track-group--date">&nbsp; </BoxLabel>
          <ul className="tracks">
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
          </ul>
        </PlaceholderTrackGroup>
        <PlaceholderTrackGroup className={placeholderStyle}>
          <BoxLabel className="track-group--date">&nbsp; </BoxLabel>
          <ul className="tracks">
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
          </ul>
        </PlaceholderTrackGroup>
      </React.Fragment>
    );
  }
}