import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {FaBlackTie} from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h3><FaBlackTie/> Gatsby's Restaurant</h3>
  </Layout>
)

export default IndexPage
