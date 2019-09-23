import React, { useState } from 'react';



const AddQuestion = props =>{

    const [question, setQuestion] = useState({

        title: '',
        questiontype: '',
        question: ''
    })


    const handleChanges = event => {

        setQuestion({
            ...question, 
            [event.target.title]: event.target.value
        })
    }

    const submitQuestion = event => {
        event.preventDefault();

        props.addNewQuestion(question);

        setQuestion({
            title: '',
            questiontype: '',
            question: ''
        });
    }

    return(

        <div className = "questionBox"></div>

    )





}





export default AddQuestion 