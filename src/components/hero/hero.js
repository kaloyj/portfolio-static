import React from "react"
import { css } from "@emotion/core"
import Background from "./assets/mobile-hero-bg.svg"
import TechOverview from "./tech-overview"

const Hero = () => (
  <div
    css={css`
      width: 100%;
      height: 120vh;
      position: relative;
    `}
  >
    <Background
      viewBox="500 270 400 600"
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      `}
    ></Background>
    <div
      css={css`
        margin-top: 20vh;
        margin-left: 4%;
      `}
    >
      <h1
        css={css`
          font-size: 1.8rem;
          color: white;
          letter-spacing: 0.1rem;
        `}
      >
        Carlo Janea
      </h1>
      <h3
        css={css`
          font-size: 1.2em;
          color: white;
          letter-spacing: 0.125rem;
        `}
      >
        Front End Engineer
      </h3>
      <TechOverview></TechOverview>
    </div>
  </div>
)

export default Hero
