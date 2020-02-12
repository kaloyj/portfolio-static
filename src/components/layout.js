import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import Header from "./header"
import useSiteMetadata from "../hooks/useSiteMetadata"

export const COLOR_SCHEME = {
  darkBlue: "#101D42",
}
const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            font-family: "DM Sans", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }
          }
        `}
      ></Global>
      <Header siteTitle={title} />
      <div>
        <main
          css={css`
            margin: 0 4%;
            min-height: 85vh;
          `}
        >
          {children}
        </main>
        <footer
          css={css`
            background-color: ${COLOR_SCHEME.darkBlue};
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 15vh;
          `}
        >
          © {new Date().getFullYear()} Carlo Janea
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
