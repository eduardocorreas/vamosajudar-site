import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
