import React, { Component } from "react";
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import Track, { TrackGroup, TrackContainer, PlaceholderGroup } from "../components/Track";
import TrackDetail from "../components/TrackDetail";
import TransitionContainer from "../components/TransitionContainer";
//import Route from "react-router-dom/Route";
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { css } from 'react-emotion'
import moment from 'moment';
import Placeholder from "../components/Placeholder";

const AllPosts = ({node}) => {
  let postsByDate = node
  return (
    // <BrowserRouter>
    <React.Fragment>
      {postsByDate.map((trackGroup) => (
        <TrackGroup
          key={trackGroup.fieldValue}
          date={moment(trackGroup.fieldValue).format('D MMMM YYYY')}
        >
          {trackGroup.edges.map((track) => (
            <Route 
              key={track.node.fields.slug}
              exact path={track.node.fields.slug}
              render={() => (<SinglePost node={track.node} />)} 
            />
          ))}
          <ul className="tracks">
            {trackGroup.edges.map((track) => (
              <Track
                key={track.node.fields.slug}
                slug={track.node.fields.slug}
                title={track.node.frontmatter.title}
                artist={track.node.frontmatter.artist} 
              />
            ))}
          </ul>
        </TrackGroup>
      ))}
    </React.Fragment>
    // </BrowserRouter>
  )
}

const SinglePost = ({node}) => {
  let track = node
  const StyledTransitionContainer = styled(TransitionContainer)``
  return (
    <div>
      <Helmet
        title={'Eka is listening to... ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
      >
        <html className="has-overlay--xs" />
        <body className="is-single" />
      </Helmet>
      <TrackDetail data={track} />
    </div>
  )
}

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingFinish: false,
      posts: []
    }
  }
  componentDidMount() {
    this.setState({ posts: this.props.data.allMarkdownRemark.group.reverse() })
    if(this.props.data.allMarkdownRemark) {
      this.setState({ loadingFinish: true })
    }
  }
  render() {
    let siteTitle = 'Eka is listening to... | Eka’s Playlists';
    let postsByDate = [];
    postsByDate = this.state.posts;
    return (
      <Layout>
        <Helmet
          title={siteTitle}
          // meta={[
          //   { name: 'description', content: 'Sample' },
          //   { name: 'keywords', content: 'sample, something' },
          // ]}
        >
           <html lang="en" />
        </Helmet>
        <Sidebar />
        <main role="main" className="posts" id="main">
          {this.state.loadingFinish ? (
            <AllPosts node={postsByDate} />
          ) : (
            <PlaceholderGroup />
          )}
        </main>
      </Layout>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
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
              quote
              tag
              songUrl
            }
            excerpt
            html
          }
        }
      }
    }
  }
`