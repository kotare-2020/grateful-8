import React from "react"

import getRandomAnswer from "../../server/js/getRandomAnswer"

class EightBall extends React.Component {
  render() {
    let randomAnswer = getRandomAnswer().answer

    return (
      <>
        <div className="backball">
          <div className="center_white">
            <svg height="220" width="220" className="content">
              <polygon points="10,10 110,210 210,10" className="triangle" />
              <text
                x="50%"
                y="20%"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {randomAnswer}
              </text>
            </svg>
          </div>
        </div>
      </>
    )
  }
}

export default EightBall
