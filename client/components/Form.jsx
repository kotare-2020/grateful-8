import React from "react"
import { Link } from "react-router-dom"

class MyForm extends React.Component {
  state = {
    question: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log("submit", this.state)

    this.props.setQuestion(this.state.question)
  }

  handleChange = (e) => {
    const name = e.target.name
    const question = e.target.value

    console.log("change!", e.target.question)

    this.setState({
      [name]: question,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="formElement formLabel">
          You know you want too:
          <input className="formElement" type="text" name="question" onChange={this.handleChange} />
        </label>

        <Link to={`/Fate`}><button className="formElement">Decide my Fate</button></Link>
        
      </form>
    )
  }
}

export default MyForm
