import React from 'react';

const QuestionCard = props => {
    const { title, question } = props;
    return (
        <div className="question-card">
        <h2>Title: {title}</h2>
        <p>Question: {question}</p>
        </div>
    )
}

export default QuestionCard;