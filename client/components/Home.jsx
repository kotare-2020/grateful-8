import React from "react"

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="backball">
          <div className="center_white">
            <svg height="220" width="220" class="content">
              <polygon points="10,10 110,210 210,10" class="triangle" />
              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
              >
                8
              </text>
            </svg>
          </div>
        </div>
      </>
    )
  }
}

export default Home
