import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { YMaps, Map } from 'react-yandex-maps';

const IndexPage = () => (
  <Layout>
    <SEO title="Rostok" />

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}

<YMaps>
    <div>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </div>
  </YMaps>
  </Layout>
)

export default IndexPage
