import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsCard from '../QuestionsCard/QuestionsCard';
import { Link } from 'react-router-dom';
import StyleCard from '../QuestionsCard/Stylediv';

const mockData = [
{
    id: 0,
    title: "what is that",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamre dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    user: 'Robert'
},
{
    id: 1,
    title: "what if you dislike icecream",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user: 'Martin'
},
{
    id: 2,
    title: "how to make eggs",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vellum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user: 'Megan'
}
]

function QuestionsList () {

//     const [list, setList] = useState([]);
// //place API in the useeffect below
//     useEffect(() => {
//         axios
//             .get('API GOES HERE')
//             .then(res => {
//                 console.log(res)
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     },[]);

return (
    <div className="questionsList">
        <h1>Question List</h1>
        {mockData.map(e => {
            return (
                <QuestionDetails key={e.id} mock={e}></QuestionDetails>
            )
        })}
    </div>
)
};


//in place of list is mockData because no API is available
function QuestionDetails ({ mock }){
    {console.log(mock)}
    const { id, title, question } = mock;
    return (
        <Link to={`/questions/${id}`}>
        <QuestionsCard className="questions-card"{...mock}/>
        </Link>
    )
}

export default QuestionsList;