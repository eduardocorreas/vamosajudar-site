import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import ContactForm from '../components/contactForm'
import Contributors from '../components/contributors'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <ContactForm />
    <Contributors />
  </Layout>
)

export default IndexPage
