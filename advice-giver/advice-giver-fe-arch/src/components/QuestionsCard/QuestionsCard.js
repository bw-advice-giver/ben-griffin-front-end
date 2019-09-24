import React from 'react';

const QuestionsCard = props => {
    const { title, question } = props;
    return (
        <div className="question-card">
        <h2>Title: {title}</h2>
        <p>Question: {question}</p>
        </div>
    )
}

export default QuestionsCard;