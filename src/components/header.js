import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"
import Logo from "../assets/desktop-logo.svg"

const Header = () => (
  <header
    css={css`
      margin: 0 4%;
      width: 92%;
      position: absolute;
      top: 2vh;
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
        <Link to="/">
          <div
            css={css`
              height: 15vw;
              width: 15vw;
            `}
          >
            <Logo viewBox="0 0 90 90" height="100%" width="100%" />
          </div>
        </Link>
      </h1>
      <nav
        css={css`
          flex: 0 0 40%;
          display: flex;
          flex-flow: row wrap;
        `}
      >
        <ul
          css={css`
            flex: 0 0 100%;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
            padding: 0;

            li {
              list-style-type: none;
              font-size: 1.2rem;
            }
          `}
        >
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
