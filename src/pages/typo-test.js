import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { H1, H2, H3, H4, H5, BodyText, SmallText, SmallerText } from "../components/Text"

// const CustomH1 = H1.withComponent('div'); // example of custom element

export default ({ data }) => (
  <Layout debugMode>
    <Helmet
      title="Typography Test Page"
    />
    <section style={{ gridColumn: 'maxcontent', maxWidth: 300, overflow: 'scroll' }}>
      {/* // example of custom element
      <CustomH1 className="h1">Typography test</CustomH1> 
      */}
      <H1>H1 Typography test</H1>
      <H2>H2 Typography test</H2>
      <H3>H3 Typography test</H3>
      <H4>H4 Typography test</H4>
      <H5>H5 Typography test</H5>
      <BodyText>Body Typography test</BodyText>
      <SmallText>Small Typography test</SmallText>
      <SmallerText oddLine>Smaller Typography test</SmallerText>
      <hr/>
      <h1>Longer heading text</h1>
      <H2>I'll start this off without any words</H2>
      <H3>I got so high, I scratched til I bled</H3>
      <H4>I love myself better than you. I know it's wrong but what should I do?</H4>
      <hr/>
      <H2>Paragraph heading</H2>
      <BodyText>The quick brown fox jumped over the lazy dog.</BodyText>
      <BodyText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo, recusandae, optio accusamus molestiae repellendus reprehenderit tempore culpa repudiandae cupiditate necessitatibus a laborum quia non reiciendis aliquam? Ab, numquam repellat.</BodyText>
      <H2>An even longer paragraph heading</H2>
      <SmallerText oddLine>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo, recusandae, optio accusamus molestiae repellendus reprehenderit tempore culpa repudiandae cupiditate necessitatibus a laborum quia non reiciendis aliquam? Ab, numquam repellat.</SmallerText>
    </section>
  </Layout>
)

