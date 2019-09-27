import React from 'react';
import axios from 'axios';
// Component
import QuestionsCard from './QuestionsCard';
// Stlye
import './Card.scss'

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: '',
    };
  }

  // Handler Functions Below \\

  // GET REQUEST
  getMovie = id => {
    axios
    .get(`https://advice-giver-backend.herokuapp.com/messages/${id}`)
    .then(res => this.setState({ question: res.data }))
    .catch(err => console.log('GET REQ CAUGHT AND ERROR ',err))
  };

  // DELETE REQUEST
  deleteQuestion = () => {
    axios.delete(`https://advice-giver-backend.herokuapp.com/messages/${this.props.match.params.id}`)
    .then(res => {
      console.log(res)
      this.props.history.push('/messages');
    })
    .catch(err => console.log("error when deleting", err.response))
  };

  // SAVE Question
  saveQuestion = () => {
    const addSaved = this.props.addSaved;
    addSaved(this.state.question);
  }

render() {

  // Watch for NO state - conditionally
  if(!this.state.question) {
    return <h3>Loading Questions...</h3>
  }

  return (
  <div className="card-wrapper">
    <QuestionsCard question={this.state.question} />
            <button
              onClick={() =>
                this.props.history.push(
                  `/messages/${this.props.match.params.id}`
                )
              }
              className="edit-btn"
            >
              Edit
            </button>

            <button
              onClick={this.deleteQuestion}
            >
              Delete
            </button>

            <button
              onClick={this.saveQuestion}
            >
              Save
            </button>
            </div>
          )
  };
}

export default Card;
