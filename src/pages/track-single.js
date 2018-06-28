import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      {/* example of injecting <head> meta tags */}
      <Helmet
        title="This is just a test page"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <section className="full-width">
        <h3>single track page</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Optio aliquam eos et iste ducimus deleniti nulla distinctio necessitatibus libero debitis quos exercitationem alias, placeat omnis laborum impedit.<br/><br/>Molestiae accusantium eligendi?</p> 
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SingleTrackQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`