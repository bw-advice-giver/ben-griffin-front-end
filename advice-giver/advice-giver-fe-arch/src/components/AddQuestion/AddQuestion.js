import React, { useState } from 'react';



// const AddQuestion = props =>{

//     const [question, setQuestion] = useState({

//         title: '',
//         questiontype: '',
//         body: ''
//     })


//     const handleChanges = event => {

//         setQuestion({
//             ...question, 
//             [event.target.title]: event.target.value
//         })
//     }

//     const submitQuestion = event => {
//         event.preventDefault();

//         props.addNewQuestion(question);

//         setQuestion({
//             title: '',
//             questiontype: '',
//             body: ''
//         });
//     }

//     return(

//         <div className = "questionBox">
//         <form onSubmit = {submitQuestion}>

//             <label htmlFor = "title">Title: </label>
//             <input
//             id = "title"
//             type = "text"
//             name = "title"
//             placeholder = "Type Your Title Here"
//             onChange = {handleChanges}
//             value = {question.title}
//             />

//             <label htmlFor = "qustiontype">Type of Question: </label>
//             <input
//              id = "typeofquestion"
//              type = "text"
//              name = "typeofquestion"
//              placeholder = "i.e. Business, Career Advice, Personal Development"
//              onChange = {handleChanges}
//              value = {question.typeofquestion}  
//             />

//             <label htmlFor = "question">Type Your Question Here</label>
//             <textarea
//              id = "body"
//              name = "body" 
//              rows = "10"
//              cols = "70"
//              onChange = {handleChanges}
//              value = {question.body}
//              />


//         </form>





//         </div>

//     )





// }





export default AddQuestion 