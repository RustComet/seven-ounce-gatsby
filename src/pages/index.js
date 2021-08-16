import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import logoSVG from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img src={logoSVG} height="200px" />
        <h1>Seven Ounce Software</h1>
        <p>Coming soon</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
