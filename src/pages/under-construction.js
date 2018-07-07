import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Link from "gatsby-link";
import TransitionContainer from  "../components/TransitionContainer"

export default ({ data }) => (
  <Layout>
    <Helmet
      title="Under Construction"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <TransitionContainer className="full-width" style={{ padding: '1rem' }}>
      {/* example of calling graphql data 
      <h3>This site is called: {data.site.siteMetadata.title}</h3>
      */}
      <h4>Under Construction</h4>
      <p>This feature is under construction.</p>
      <Link to="/">Go back</Link>
    </TransitionContainer>
  </Layout>
)

// export const query = graphql`
//   query TestQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `