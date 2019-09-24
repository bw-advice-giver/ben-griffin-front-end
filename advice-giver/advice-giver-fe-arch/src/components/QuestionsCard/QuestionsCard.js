import React from 'react';
import Stylediv from './Stylediv';
import { Link } from 'react-router-dom';
import Box from './Styleh2';

const QuestionsCard = props => {

    const { title, question, user } = props
    
    return (
        <div>
        <Stylediv className="one-card">
            <div>
            <h2>Title: {title}</h2>
            <p>Question: {question}</p>
            </div>
         </Stylediv>
        </div>
    )
}


export default QuestionsCard;