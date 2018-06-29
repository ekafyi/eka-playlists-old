import React, { Component } from "react";
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import Track, { TrackGroup, TrackDetail } from "../components/Track";
import { Link } from "gatsby";
import { H2 } from "../components/Text";
import { CloseBtn } from "../components/Button";
import TransitionContainer from "../components/TransitionContainer";
import Route from "react-router-dom/Route";
import styled, { injectGlobal } from 'react-emotion'
import moment from 'moment';
import { rhythm } from "../utils/typography";

const AllPosts = ({node}) => {
  let postsByDate = node
  return (
    <React.Fragment>
      {postsByDate.map((trackGroup) => (
        <TrackGroup
          key={trackGroup.fieldValue}
          date={moment(trackGroup.fieldValue).format('D MMMM YYYY')}
        >
          {trackGroup.edges.map((track) => (
            <Track
              key={track.node.fields.slug}
              slug={track.node.fields.slug}
              title={track.node.frontmatter.title}
              artist={track.node.frontmatter.artist} 
            />
          ))}
        </TrackGroup>
      ))}
    </React.Fragment>
  )
}

const SinglePost = ({node}) => {
  let track = node
  const StyledTransitionContainer = styled(TransitionContainer)`
    position: fixed;
    z-index: 2; /* over Track cards */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 12.5vh; // temp
  `
  return (
    <React.Fragment>
      <Helmet>
        <html className="has-overlay" />
        <body className="is-single" />
      </Helmet>
      {/* !TODO: make accessible */}
      <CloseBtn to="/">&#x2715;</CloseBtn>
      <StyledTransitionContainer>
        <TrackDetail
          heading={track.frontmatter.title}
          subheading={track.frontmatter.artist}
        >
          <div style={{ width: 320 }}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam eos et iste ducimus deleniti nulla distinctio necessitatibus libero debitis quos exercitationem alias, placeat omnis laborum impedit, molestiae accusantium eligendi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam eos et iste ducimus deleniti nulla distinctio necessitatibus libero debitis quos exercitationem alias, placeat omnis laborum impedit, molestiae accusantium eligendi?</p>
          </div>
        </TrackDetail>
      </StyledTransitionContainer>
    </React.Fragment>
  )
}

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }
  render() {
    let siteTitle = 'ekamak.es/playlist';
    let postsByDate = [];
    if (this.props.data) {
      siteTitle = this.props.data.site.siteMetadata.title + ' | ekamak.es/playlists';
      postsByDate = this.props.data.allMarkdownRemark.group.reverse();
    }
    return (
      <Layout>
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Sidebar />
        <div className="posts">
          <AllPosts node={postsByDate} />
          {postsByDate.map((trackGroup) => 
            trackGroup.edges.map((track) => (
              <Route 
                key={track.node.fields.slug}
                path={track.node.fields.slug}
                render={() => (<SinglePost node={track.node} />)} 
                exact
              />
            ))
          )}
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      group(field: frontmatter___date) {
        fieldValue
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              artist
              date(formatString: "DD MMMM YYYY")
            }
            excerpt
          }
        }
      }
    }
  }
`