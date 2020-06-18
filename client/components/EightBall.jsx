import React from "react"

import getRandomAnswer from "../../server/js/getRandomAnswer"

class EightBall extends React.Component {
  
  render() {
    let randomAnswer = getRandomAnswer().answer

    return (
      <>
        <div className="backball">
          <div className="center_white">
            <h1>{randomAnswer}</h1>
          </div>
        </div>
      </>
    )
  }
}

export default EightBall
