import React from "react"
import { Link } from "react-router-dom"

class MyForm extends React.Component {
  state = {
    question: "",
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log("submit", this.state)

    this.props.setQuestion(this.state.question)
  }

  handleChange = (event) => {
    const question = event.target.name

    console.log("change!", event.target.question)

    this.setState({
      [question]: event.target.value,
    })
  }
  // get it so that when they hit submit it responds with random answer
  // random answer generator will come later

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Question:
          <input type="text" name="question" onChange={this.handleChange} />
        </label>

        {/* Best to have a button here.. but how to get it not to be underlined as link? */}
        {/* Is there a way to sumbit and get the data from question? Do we need it? */}
        {/* Just to remind me removinh type=submit still gets us the answer just not the Q data we could proably get it from a nested function that runs if we do want */}
        <button>
          <Link type="submit" to={`/Fate`}>
            Decide my fate
          </Link>
        </button>
        {/* <input type="submit" value={<Link to={`/Fate`}>Decide my fate</Link>} /> */}
      </form>
    )
  }
}

export default MyForm
