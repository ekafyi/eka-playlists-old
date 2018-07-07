import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import Link from "gatsby-link";
import { BoxLabel, H4, SmallText } from "./Text";
import typography, { rhythm } from "../utils/typography";
import { CloseBtn } from './Button';
import MediaQuery from 'react-responsive';

// 1. Track

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
      <StyledTrack>
        <Link to={this.props.slug ? this.props.slug : '/test'} activeClassName="active">
          <Title className="track--title">{this.props.title}</Title>
          <Artist className="track--artist">{this.props.artist}</Artist>
        </Link>
      </StyledTrack>
    );
  }
}

// 2. TrackGroup

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
      <StyledTrackGroup>
        <BoxLabel className="track-group--date">{this.props.date}</BoxLabel>
        {this.props.children}
        {/* <ul> {this.props.children} </ul> */}
      </StyledTrackGroup>
    );
  }
}

// 3. TrackDetail 

const boxHeight = 12; // 12 * 1.5rem
const StyledTrackDetail = styled('article')`
  background: #4A51A8;
  color: #F3E8B9;
  margin-bottom: ${rhythm(1.5)};
  height: auto;
  overflow-y: auto;
  position: relative;
  box-shadow: .75rem .75rem #313886;
  .pattern-box {
    background-color: ${props => props.theme.primary.color};
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 1.5rem;
  }
  .track-detail__text {
    display: flex;
    flex-flow: column;
    &>*:nth-child(2) {
      flex-grow: 1;
    }
  }

  /**
   *  MQ 
   */
  @media only screen and (max-width: 479px) {
    position: fixed;
    top: 8vh;
    bottom: 8vh;
    left: 1rem;
    right: 2rem;
    z-index: 9;
    margin-bottom: 0;
  }
  ${mq.medium(css`
    height: ${rhythm(boxHeight)};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    &>* {
      position: relative;
      flex-grow: 1;
      width: 50%;
      max-width: 50%;
    }
  `)};
  ${mq.large(css`
    height: ${rhythm(boxHeight)};
  `)};
`
const TrackMedia = styled('div')`
  &>* {
    height: ${rhythm(boxHeight)};
    position: sticky;
    top: 0;
  }
  iframe {
    border: 0;
    width: 100%;
    margin-bottom: -.5rem; /* gap bugfix */
  }
  .track-media__container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .track-media__icon {
    width: ${rhythm(4)};
    height: ${rhythm(4)};
    line-height: ${rhythm(4)};
    font-size: 3rem;
    text-align: center;
  }
  .track-media__text {
    font-size: ${typography.toJSON().h4.fontSize};
    font-weight: 700;
    transform: rotate(-90deg);
    transform-origin: top left;
    left: -2rem;
    margin-bottom: -2rem;
    position: relative;
  }
  a {
    .track-media__icon,
    .track-media__text {
      color: ${props => props.theme.secondary.color};
    }
    &:hover .track-media__icon {
      color: ${props => props.theme.primary.color};
      background: ${props => props.theme.secondary.color};
    }
  }
`
const TrackHead = styled('div')`
  min-height: ${rhythm(boxHeight / 2)};
  box-shadow: inset 0px ${rhythm(-1.5)} ${props => props.theme.primary.color};
  blockquote {
    white-space: pre-line;
    padding-top: ${rhythm(2.5)};
    padding-right: 2rem;
    padding-left: calc(2rem - ${rhythm(0.25)});
    margin-bottom: ${rhythm(1)};
    &>* {
      display: inline;
      font-weight: 400;
      box-decoration-break: clone;
      line-height: 1.33;
      padding: 0 ${rhythm(0.25)};
      color: ${props => props.theme.secondary.color};
      background: ${props => props.theme.primary.color};
    }
  }

  /**
   *  MQ 
   */
  ${mq.medium(css`
    &.has-quote {
      margin-bottom: ${rhythm(1)};
    }
  `)};
  ${mq.large(css`
  `)};
`
const TrackBody = styled('div')`
  padding: 0 2rem ${rhythm(2 / 3)};
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: end;
  .track-detail__body {
    font-size: ${typography.toJSON().h6.fontSize};
    margin-bottom: ${rhythm(1)};
    a {
      color: ${props => props.theme.secondary.color};
      border-bottom: ${rhythm(0.125)} solid #313886;
      padding: 0 2px;
      &:hover {
        border-bottom-color: transparent;
        background: ${props => props.theme.secondary.color};
        color: ${props => props.theme.primary.color};
      }
    }
    p {
      margin-bottom: ${rhythm(0.25)};
      &:first-child:before {
        content: "💭";
        margin-right: .3em;
      }
    }
  }
  .track-detail__h { /* xs only */
    margin-bottom: ${rhythm(1.5)};
    * {
      color: ${props => props.theme.secondary.color};
    }
    h2 {
      margin-bottom: 0;
    }
  }
  .track-detail__meta {
    width: 100%;
    margin-left: calc(-2rem + 1px);
    font-size: ${typography.toJSON().h6.fontSize};
    &-item {
      span {
        background: ${props => props.theme.secondary.color};
        font-weight: 700;
        padding: 0 ${rhythm(0.25)} 0 2rem;
        box-decoration-break: clone;
        &, a {
          color: ${props => props.theme.primary.color};
        }
        a:hover {
          box-shadow: 0 -0.25rem 0 #fff inset;
        }
      }
    }
    .tags {
      margin: initial;
      display: inline;
      &__tag {
        display: inline;
        &:not(:last-child) {
          &:after {
            content: ", ";
            margin-right: .25ch;
          }
        }
      }
    }
  }

  /**
  *  MQ 
  */
  @media only screen and (max-width: 479px) {
  }
  ${mq.medium(css`
    .track-detail__body {
      padding-right: 25%;
      &.has-cols {
        padding-right: 0;
        margin-bottom: ${rhythm(2)};
        column-count: 2;
        column-gap: ${rhythm(1.5)};
      }
    }
    .track-detail__meta {
      font-size: 1rem;
    }
  `)};
`
const StyledCloseBtn = styled(CloseBtn)`
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
  z-index: 1;
  color: ${props => props.theme.secondary.color};
  width: 3rem;
  height: 3rem;
  font-size: 3rem;
`
export class TrackDetail extends Component {
  constructor(props) {
    super(props);
    this.testFunction = this.testFunction.bind(this);
  }
  testFunction(url) {
    let embedUrl = false;

    // 1. Identify source site based on URL, and get ID from URL    

    const youtubeRegex = /youtube\.com\/watch\?v=(.*)/;
    const spotifyRegex = /spotify\.com\/track\/(.*)/;
    
    // NOTE: Soundcloud & Bandcamp URLs do not contain track ID, so
    // embed URL has to be pasted in `songUrl` field. If this field 
    // does not contain embed URL, treat as regular link (ie. return false).
    //
    // Embed URL examples:
    // https://bandcamp.com/EmbeddedPlayer/size=large/album=2526125338/track=3698007299/
    // https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/416439411&color=%23ff5500&visual=true

    const bandcampRegex = /bandcamp\.com\/EmbeddedPlayer\/(.*)/;
    const soundcloudRegex = /w\.soundcloud\.com\/player\/(.*)/;

    // 2. Create embed URL based on ID and source

    if (url.match(youtubeRegex)) {
      const youtubeSongId = url.match(youtubeRegex)[1];
      embedUrl = 'https://www.youtube.com/embed/' + youtubeSongId;
    } 
    else if (url.match(spotifyRegex)) {
      const spotifySongId = url.match(spotifyRegex)[1];
      embedUrl = 'https://open.spotify.com/embed/track/' + spotifySongId;
    } 
    else if (url.match(bandcampRegex) || url.match(soundcloudRegex)) {
      embedUrl = url;
    }

    // 3. Return embed URL to put in iframe

    if (embedUrl) {
      return embedUrl
    }
  }
  render() {
    let track = {}
    track = this.props.data;
    return (
      <StyledTrackDetail className="track-detail">
        <MediaQuery query="(min-device-width: 768px)">
          <TrackMedia>
            {track.frontmatter.songUrl && this.testFunction(track.frontmatter.songUrl) ? (
                <iframe src={this.testFunction(track.frontmatter.songUrl)} frameBorder="0" allow="encrypted-media" allowFullScreen allowtransparency />
              ) : (
                track.frontmatter.songUrl ? (
                  <div className="track-media__container">
                    <a href={track.frontmatter.songUrl} 
                      target="_blank" 
                      title={'Listen to ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                    >
                      <div className="track-media__icon pattern-box">▶︎</div>
                      <div className="track-media__text">listen</div>
                    </a>
                  </div>
                ) : (
                  <div className="track-media__container">
                    <a href={'https://www.youtube.com/results?search_query=' + track.frontmatter.artist.split(' ').join('+') + '+' + track.frontmatter.title.split(' ').join('+')} 
                      target="_blank"
                      title={'Search for ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                    >
                      <div className="track-media__icon pattern-box">⦿</div>
                      <div className="track-media__text">search</div>
                    </a>
                  </div>
                )
              )
            }
          </TrackMedia>
        </MediaQuery>
        <div className="track-detail__text">
          <TrackHead 
            className={(track.frontmatter.quote && ' has-quote ') + ' pattern-box '}
          >
            <StyledCloseBtn to="/">&#x2715;</StyledCloseBtn>
            {track.frontmatter.quote && <blockquote><h4>{track.frontmatter.quote}</h4></blockquote>}
          </TrackHead>
          <TrackBody>
            <MediaQuery query="(max-device-width: 767px)" component="header" className="track-detail__h">
              <h2>{track.frontmatter.title}</h2>
              <h4>{track.frontmatter.artist}</h4>
            </MediaQuery>
            {track.html && 
              <div 
                className={((track.html.length > 400) && ' has-cols ') + ' track-detail__body '}
                dangerouslySetInnerHTML={{__html: track.html}}
              />
            }
            <aside className="track-detail__meta">
              <div className="track-detail__meta-item">
                <span>
                  <a href={'https://www.discogs.com/search/?q=' + track.frontmatter.artist.split(' ').join('+')} target="_blank">
                    more by {track.frontmatter.artist}
                  </a>
                  {/* <Link to="/under-construction">more by {track.frontmatter.artist}</Link> */}
                </span>
              </div>
              {track.frontmatter.tag && (
                <div className="track-detail__meta-item">
                  <span>
                    {/* more in&nbsp; */}
                    tags:&nbsp;
                    <ul className="tags">
                      {track.frontmatter.tag.map((tag) => (
                        <li className="tags__tag">
                          <em>{tag}</em>
                          {/* <Link key={tag} to="/under-construction"> <em>{tag}</em> </Link> */}
                        </li>
                      ))}
                    </ul>
                  </span>
                </div> 
              )}
            </aside>
          </TrackBody>
        </div>
      </StyledTrackDetail>
    );
  }
}