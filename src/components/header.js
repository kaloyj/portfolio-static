import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

const Header = () => (
  <header
    css={css`
      margin: 0 4%;
      width: 92%;
      position: absolute;
      top: 0;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <h1>
        <Link to="/">logo</Link>
      </h1>
      <nav
        css={css`
          flex: 0 0 40%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div>Blog</div>
        <div>Contact</div>
      </nav>
    </div>
  </header>
)

export default Header
