import React, { Component } from 'react';
import styled, { css, keyframes } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";
import { CloseBtn } from './Button';
import MediaQuery from 'react-responsive';

const boxHeight = 12; // 12 * 1.5rem
const contentPadding = 4/3; // 2rem
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
    &>* {
      flex-shrink: 0; /** Chrome bug */
    }
    &>*:nth-child(2) {
      flex-grow: 1;
    }
  }

  /**
   *  MQ 
   */
  @media only screen and (max-width: 479px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 8vh;
    margin-bottom: 8vh;
    margin-left: 1rem;
    margin-right: 2rem;
    z-index: 9;
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
  padding-left: ${rhythm(0.5)};
  &,
  &>* {
    height: calc(${rhythm(boxHeight)} - ${rhythm(0.5)});
    position: sticky !important;
    top: ${rhythm(0.5)};
  }
  iframe {
    border: 0;
    width: 100%;
    margin-bottom: -.5rem; /* gap bugfix */
    z-index: 1; /* over loading icon */
  }
  .track-media__action-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .media-action__text {
    transform: rotate(-90deg);
    transform-origin: top left;
    left: -2rem;
    margin-bottom: -2rem;
  }
`
const MediaAction = styled('a')`
  .media-action__icon,
  .media-action__text {
    color: ${props => props.theme.secondary.color};
  }
  .media-action__icon {
    width: ${rhythm(4)};
    height: ${rhythm(4)};
    line-height: ${rhythm(4)};
    font-size: 3rem;
    text-align: center;
  }
  .media-action__text {
    font-size: ${typography.toJSON().h4.fontSize};
    font-weight: 700;
    position: relative;
  }
  &:hover .media-action__icon {
    color: ${props => props.theme.primary.color};
    background: ${props => props.theme.secondary.color};
  }
`
const TrackHead = styled('div')`
  min-height: ${rhythm(boxHeight / 2)};
  box-shadow: inset 0px ${rhythm(-1.5)} ${props => props.theme.primary.color};
  &.has-quote {
    margin-bottom: ${rhythm(0.5)};
  }
  blockquote {
    white-space: pre-line;
    padding-top: ${rhythm(2)};
    padding-right: ${rhythm(contentPadding / 2)};
    padding-left: calc(${rhythm(contentPadding / 2)} - ${rhythm(0.25)});
    margin-left: 0; // reset
    margin-right: 0; // reset
    margin-bottom: ${rhythm(1)};
    &>* {
      display: inline;
      font-weight: 400;
      box-decoration-break: clone;
      line-height: 1.33;
      padding: 0 ${rhythm(0.25)};
      color: ${props => props.theme.secondary.color};
      background: ${props => props.theme.primary.color};
      font-size: ${typography.toJSON().h5.fontSize};
    }
  }

  /**
   *  MQ 
   */
  @media only screen and (max-width: 767px) {
    min-height: ${rhythm(boxHeight / 3)};
  }
  ${mq.medium(css`
    &.has-quote {
      margin-bottom: ${rhythm(1)};
    }
    blockquote {}
  `)};
  ${mq.large(css`
    blockquote {
      padding-right: ${rhythm(contentPadding)};
      padding-left: calc(${rhythm(contentPadding)} - ${rhythm(0.25)});
      &>* {
        font-size: ${typography.toJSON().h4.fontSize};
      }
    }
  `)};
`
const TrackBody = styled('div')`
  padding-top: 0;
  padding-bottom: ${rhythm(2 / 3)};
  padding-left: ${rhythm(contentPadding / 2)};
  padding-right: ${rhythm(contentPadding / 2)};
  position: relative;
  ${'' /* display: flex;
  flex-flow: column;
  justify-content: end; // Firefox
  justify-content: flex-end; // Chrome */}
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
    margin-bottom: ${rhythm(1)};
    * {
      color: ${props => props.theme.secondary.color};
    }
    h2 {
      margin-bottom: 0;
    }
  }
  .track-detail__media-action { /* xs only */
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(1.5)};
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .media-action__icon {
      width: ${rhythm(2.5)};
      height: ${rhythm(2.5)};
      line-height: ${rhythm(2.5)};
      font-size: ${rhythm(1)};
    }
    .media-action__text {
      transform: rotate(90deg);
      left: -.75rem;
      bottom: .75rem;
      margin-right: -1.5rem;
    }
  }
  .track-detail__meta {
    width: calc(100% + ${rhythm(contentPadding / 2)});
    margin-left: ${rhythm(contentPadding / -2)};
    font-size: ${typography.toJSON().h6.fontSize};
    &-item {
      span {
        background: ${props => props.theme.secondary.color};
        font-weight: 700;
        padding: 0 ${rhythm(0.25)} 0 ${rhythm(contentPadding / 2)};
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
  @media only screen and (max-width: 767px) {
  }
  ${mq.medium(css`
    .track-detail__body {
      margin-bottom: ${rhythm(3)};
    }
    .track-detail__meta {
      position: absolute;
      bottom: 1rem;
    }
  `)}
  ${mq.large(css`
    padding-left: ${rhythm(contentPadding)};
    padding-right: ${rhythm(contentPadding)};
    .track-detail__body { }
    .track-detail__meta {
      //width: calc(100% + ${rhythm(contentPadding)});
      width: 100%;
      margin-left: ${rhythm(contentPadding * -1)};
      font-size: 1rem;
      &-item {
        span {
          padding: 0 ${rhythm(0.25)} 0 ${rhythm(contentPadding)};
        }
      }
    }
  `)};
  ${mq.xl(css`
    .track-detail__body {
      padding-right: 25%;
      &.has-cols {
        padding-right: 0;
        margin-bottom: ${rhythm(2)};
        column-count: 2;
        column-gap: ${rhythm(1.5)};
      }
    }
  `)};
`
const StyledCloseBtn = styled(CloseBtn)`
  position: absolute;
  top: 0;
  right: 0;
  left: auto;
  color: ${props => props.theme.secondary.color};
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  line-height: ${rhythm(2)};
  font-size: ${rhythm(1.5)};
  /**
  *  MQ 
  */
  ${mq.medium(css`
    z-index: 1; // under Disc illustration
  `)};
  ${mq.large(css`
    font-size: ${rhythm(2)};
  `)};
`
const barFloat = keyframes`
  0%, 100% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(-4px);
  }
`
const LoadingIcon = styled('div')`
  position: absolute !important; // override sticky
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  text-align: center;
  .bars {
    margin: 0 auto;
    display: inline-block;
  }
  .bars li {
    height: 28px;
    width: 5px;
    background: ${props => props.theme.secondary.color};
    float: left;
    margin: 3px;
    animation: ${barFloat} 1.8s infinite;
    &:nth-child(1) {
      height: 18px;
      margin-top: 7px;
      animation-delay: .1s;
    }
    &:nth-child(2) {
      height: 22px;
      margin-top: 5px;
      animation-delay: .2s;
    }
    &:nth-child(3) {
      animation-delay: .3s;
    }
    &:nth-child(4) {
      animation-delay: .4s;
    }
    &:nth-child(5) {
      height: 22px;
      margin-top: 5px;
      animation-delay: .5s;
    }
    &:nth-child(6) {
      height: 18px;
      margin-top: 7px;
      animation-delay: .6s;
    }
  }
`
const loading = (
  <LoadingIcon aria-hidden="true">
    <ul className="bars">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </LoadingIcon>
);
class TrackDetail extends Component {
  constructor(props) {
    super(props);
    this.getEmbedUrl = this.getEmbedUrl.bind(this);
  }
  getEmbedUrl(url) {
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
      <StyledTrackDetail className="track-detail" aria-labelledby={track.frontmatter.title.split(' ').join('_')}>
        <MediaQuery query="(min-device-width: 768px)">
          <TrackMedia>
            {track.frontmatter.songUrl && this.getEmbedUrl(track.frontmatter.songUrl) ? (
              <React.Fragment>
                <iframe src={this.getEmbedUrl(track.frontmatter.songUrl)} frameBorder="0" allow="encrypted-media" allowFullScreen allowtransparency="true" title={track.frontmatter.title + 'by' + track.frontmatter.artist}/>
                {loading}
              </React.Fragment>
              ) : (
                track.frontmatter.songUrl ? (
                  <div className="track-media__action-container">
                    <MediaAction href={track.frontmatter.songUrl} 
                      target="_blank" 
                      title={'Listen to ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                    >
                      <div className="media-action__icon pattern-box">▶︎</div>
                      <div className="media-action__text">open</div>
                    </MediaAction>
                  </div>
                ) : (
                  <div className="track-media__action-container">
                    <MediaAction href={'https://www.youtube.com/results?search_query=' + track.frontmatter.artist.split(' ').join('+') + '+' + track.frontmatter.title.split(' ').join('+')} 
                      target="_blank"
                      title={'Search for ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                    >
                      <div className="media-action__icon pattern-box">⦿</div>
                      <div className="media-action__text">search</div>
                    </MediaAction>
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
            <StyledCloseBtn to="/" aria-label="Close">&#x2715;</StyledCloseBtn>
            {track.frontmatter.quote && <blockquote><span>{track.frontmatter.quote}</span></blockquote>}
          </TrackHead>
          <TrackBody>
            <h2 className="sr-only" id={track.frontmatter.title.split(' ').join('_')}>{track.frontmatter.title}</h2>
            <MediaQuery query="(max-device-width: 767px)">
              <header className="track-detail__h">
                <h2>{track.frontmatter.title}</h2>
                <h4>{track.frontmatter.artist}</h4>
              </header>
              {track.frontmatter.songUrl ? (
                <MediaAction href={track.frontmatter.songUrl} 
                  target="_blank" 
                  title={'Listen to ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                  className="track-detail__media-action"
                >
                  <div className="media-action__icon pattern-box">▶︎</div>
                  <div className="media-action__text">open</div>
                </MediaAction>
              ) : (
                <MediaAction href={'https://www.youtube.com/results?search_query=' + track.frontmatter.artist.split(' ').join('+') + '+' + track.frontmatter.title.split(' ').join('+')} 
                  target="_blank"
                  title={'Search for ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                  className="track-detail__media-action"
                >
                  <div className="media-action__icon pattern-box">⦿</div>
                  <div className="media-action__text">search</div>
                </MediaAction>
              )}
            </MediaQuery>
            {track.html && 
              <div 
                className={((track.html.length > 400) && ' has-cols ') + ' track-detail__body '}
                dangerouslySetInnerHTML={{__html: track.html}}
              />
            }
            <aside className="track-detail__meta">
              <h5 className="sr-only">Related to this track</h5>
              <div className="track-detail__meta-item">
                <span>
                  <a href={'https://www.discogs.com/search/?q=' + track.frontmatter.artist.split(' ').join('+')} target="_blank">
                    more by {track.frontmatter.artist}
                  </a>
                  {/* <Link to="/under-construction" rel="tag">more by {track.frontmatter.artist}</Link> */}
                </span>
              </div>
              {track.frontmatter.tag && (
                <div className="track-detail__meta-item">
                  <span>
                    {/* more in&nbsp; */}
                    tags:&nbsp;
                    <ul className="tags">
                      {track.frontmatter.tag.map((tag) => (
                        <li key={tag} className="tags__tag">
                          <em>{tag}</em>
                          {/* <Link key={tag} to="/under-construction" rel="tag"> <em>{tag}</em> </Link> */}
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

export default TrackDetail;