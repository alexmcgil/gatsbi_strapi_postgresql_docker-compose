import * as React from "react"
import {graphql} from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <title>GatsbiJS</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      {data.allStrapiArticle.edges.map(article => <p key={article.node.id}>{article.node.id} - {article.node.content}</p>)}
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
  `;
