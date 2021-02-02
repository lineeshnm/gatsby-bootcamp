import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import '../styles/index.scss'


const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I am Lineesh, a full stack developer from Kerala. <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default AboutPage