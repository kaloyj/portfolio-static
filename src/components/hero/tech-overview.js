import React, { useState, useEffect, useRef } from "react"
import { css } from "@emotion/core"

const TechOverview = () => {
  const [index, setIndex] = useState(0)
  const tech = ["React", "UI/UX", "Accessibility", "GraphQL"]
  useInterval(() => setIndex((index + 1) % 4), 2000)
  console.log({ index, ee: tech.length })
  return (
    <>
      <div
        css={css`
          color: white;
        `}
      >
        {tech[index]}
      </div>
    </>
  )
}

export default TechOverview

const useInterval = (callback, interval) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (interval !== null) {
      const tickId = setInterval(tick, interval)
      return () => clearInterval(tickId)
    }
  }, [interval])
}
