import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

//Component(s)
import QuestionsCard from '../QuestionsCard/QuestionsCard';

class QuestionsList extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                question: []
        };
    };

    axiosWithAuth() {
        axios
        .get(`https://advice-giver-backend.herokuapp.com/messages`)
        .then(res => this.setState({ question: res.data }))
        .catch(err => console.log(err))
    };

    render() {
    return (
        <div className="questionsList">
            <h1>Question List</h1>
            {this.state.question.map(question => (
                <QuestionDetails key={question.id} question={question} />
            ))}
        </div>
    )}
};

function QuestionDetails({ question }) {
    return (
        <QuestionsCard question={question} />
    )
}

export default QuestionsList;
