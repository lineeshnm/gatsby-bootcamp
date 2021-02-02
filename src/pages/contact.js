import React from "react"
import Layout from '../components/layout'
import '../styles/index.scss'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>I am reachable<a href="mailto:lineesh2009@gmail.com">@lineesh2009@gmail.com</a></p>
    </Layout>
  )
}

export default AboutPage