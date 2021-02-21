import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyForm from "../components/myform"

const CantactPage = () => (
    <Layout>
        <SEO title="Contact Us"/>
        <MyForm />
    </Layout>
)

export default ContactPage