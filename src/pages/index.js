import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
        
          `}
        >
          
          <p>RAVAGE. It's a farce. An inside-the-head assessment of reality goes up against call scripts. 
</p>
        </h1>
        <h4>HD/SD/digital 35mm, color. 25', 20' </h4>
        <div class="videoWrapper">
        <iframe width="800" height="570" frameborder="0" src="https://player.vimeo.com/video/545734234?h=f6b45ef67a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="gouche_intro"></iframe>
        </div>
        <p> <Footer /> </p>
        <p>
        </p>
        <h2>On What</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link 
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
              >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
              
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
     
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 240)
        }
      }
    }
  }
`

/* <p>Worthington and Chesterfield are fighting a war, while telecom companies keep their call centers open with contractors. The ransacking of the mind results in its own artistry. Ravage is a 75-minute performance art narrative. 
</p>

css={css`
            display: inline-block;
         *border-bottom: 1px solid;


         <h4>{data.allMarkdownRemark.totalCount}On What</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (

          <span
                css={css`
                  color: #bbb;
                `}
              >
              — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
*/
  