import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import getRandomAnswer from '../../server/js/getRandomAnswer'

import MyForm from "./Form"
import Fate from "./Fate"

class App extends React.Component {
  state = {
    question: "",
  }

  setQuestion = question => this.setState({ question: question })

  shootFire = () => {}

  // set div that updates state to be around cursor
  // on context click, set state to flame

  render() {
    let randomAnswer = getRandomAnswer().answer
    return (
      <>
        <Router>
          <h1>Grateful 8</h1>
          <div className="container">
            <MyForm setQuestion={this.setQuestion} />
            <h1>{randomAnswer}</h1>

            <Route exact path="/Fate" component={Fate} />
            <div onDragEnter={this.shootFire} >Shoot Fire animation</div>
           

            {/* <Route exact path="/" component={Home} /> */}

            {/* Do we still need/want this  if not we can get rid of a lot of code */}
            <h1>Your fate is: {this.state.question}</h1>
          </div>
        </Router>
      </>
    )
  }
}

export default App


{/* <iframe src="https://giphy.com/embed/6wpHEQNjkd74Q" width="480" height="253" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/6wpHEQNjkd74Q">via GIPHY</a></p> */}
