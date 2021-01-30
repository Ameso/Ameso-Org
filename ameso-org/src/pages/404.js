import React from 'react'

import Layout from '../layouts'
import SEO from '../components/seo'

const NotFoundPage = props => (
  <Layout path={props.location.pathname}>
    <SEO title="404: Not found" path={props.location.pathname} />
    <div style={{ maxWidth: 1440, padding: 32, margin: 'auto' }}>
      <p>Page doesn&#39;t exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage
