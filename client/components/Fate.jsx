import React from "react"
import data from "../../data/data"

const Fate = (props) => {
  console.log(data)
  console.log(data[0].answer)
  // Chuck in random generator and boom we're away

  return (
    <>
      <div>
        <h1>{data[0].answer}</h1>
      </div>
    </>
  )
}

export default Fate
