import React from 'react';
// Style
import './QuestionCard.scss'

const QuestionsCard = props => {

    const { title, question } = props.question;
    
    return (
        <div className="card-wrapper">
         <h2 className="title">{title}</h2>
          <p className="question">{question}</p>
        </div>
    )
}


export default QuestionsCard;
