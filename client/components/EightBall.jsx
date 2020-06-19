import React from "react"
import getRandomAnswer from "../../server/js/getRandomAnswer"

class EightBall extends React.Component {
  render() {

    let randomAnswer = getRandomAnswer().answer
    console.log(randomAnswer)

    return (
      <>
      {randomAnswer && 
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>}
        <div className="backball">
          <div className="center_black">
            <div className="center_white">
            <svg height="250" width="270" className="content">
                <polygon points="10,10 120,230 230,10" className="triangle" />
                <text
                  x="45%"
                  y="40%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text_color"
                >
                  {randomAnswer}
                </text>
              </svg>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default EightBall
