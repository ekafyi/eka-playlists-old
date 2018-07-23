import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

import TransitionContainer from  "../components/TransitionContainer"

export default ({ data }) => (
  <Layout>
    {/* example of injecting <head> meta tags */}
    <Helmet
      title="This is just a test page"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <TransitionContainer className="full-width" style={{ padding: '1rem' }}>
      {/* example of calling graphql data 
      <h3>This site is called: {data.site.siteMetadata.title}</h3>
      */}
      <h4>And now for something different</h4>
      <p>Here is a pic of pandas eating bamboo.</p>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
        width="400"
      />
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