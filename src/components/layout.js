/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import 'semantic-ui-css/semantic.min.css'

class Layout extends React.Component {
    render() {
//         const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

        return (
            <>
                <div
                    style={{
                        margin: `2rem auto`,
                        maxWidth: 960,
                        padding: `0px 1.0875rem 1.45rem`,
                        paddingTop: 0,
                    }}
                >
                    <main>{this.props.children}</main>
                </div>
            </>
        )
    }


}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
