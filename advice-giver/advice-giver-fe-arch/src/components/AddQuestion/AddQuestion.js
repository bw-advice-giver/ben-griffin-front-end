import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";


const StyledLabel = styled.label`
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 2%;
    margin-top: 1%;
`

const StyledTitle = styled(Field)`
    width: 15%;
    padding: .8%;
    border-radius: 3px;
    margin-bottom: 2%;
    border: 1px solid grey;
    font-size: .8rem;
`

const StyledButton = styled.button`
    display: flex;
    // justify-content: center;
    margin-left: 47%;
    margin-top: 3%;
    padding: 1%;
    border-radius: 3px;
    font-weight: bold;
`

const StyledDiv = styled.div`

    background-color: lightgrey;
    padding-bottom: 4%;
    box-sizing: border-box;
    width: 70%;
    margin-left: 16%;
    margin-bottom: 10%;
    padding-top: 4%;
`

const StyledHead = styled.h1`
    text-decoration: underline;

`

const StyledBody = styled(Field)`
    width: 40%;
    padding-bottom: 20%;
    resize: none;
    border: 1px solid grey;
    border-radius: 3px;
    font-size: .8rem;
`

const StyledDrop = styled(Field)`
    cursor: pointer;
    margin-bottom: 2%;
    background-color: whitesmoke;
`





const AddQuestion = ({values, errors, touched, status}) => {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        if (status) {
            setQuestions([...questions, status])
        }
    }, [status])

    return (

        <StyledDiv>

        <StyledHead>Need advice? Submit a question!</StyledHead>

        <Form>

            <StyledLabel>Title</StyledLabel>
            <StyledTitle
            type = "text"
            name = "title"
            placeholder = "Type Your Title Here"
            />

            {touched.title && errors.title && (
                <p>{errors.title}</p>
            )}

            <StyledLabel>Please Select Your Question Type</StyledLabel>
            <StyledDrop
            component = "select"
            name = "type"
            className = "type-select"
            // placeholder = "i.e. Business, Career Advice, Personal Development"
            >
                <option>Please Choose An Option</option>
                <option value = "business">Business</option>
                <option value = "career">Career Advice</option>
                <option value = "personal">Personal Development</option>
                <option value = "other">Other</option>


            </StyledDrop>
            

            {touched.type && errors.type && (
                <p>{errors.type}</p>
            )}

            <StyledLabel>Question</StyledLabel>    
            <StyledBody
            component = "textarea"
            type = "text"
            name = "body"
            placeholder = "Type Your Question Here"
            />

           {touched.body && errors.body&& (
                <p>{errors.body}</p>
            )}

            <StyledButton type = "submit">Submit</StyledButton>

        </Form>

        </StyledDiv>
    );
};

const FormikAddQuestion = withFormik ({

    mapPropsToValues({title, type, body}) {

        return{

            title: title || "",

            type: type || "",

            body: body || ""
        }
    },

    validationSchema: Yup.object().shape({

        title: Yup.string()
        .required("Please enter a title"),

        type: Yup.string()
        .required("Please choose a type"),

        body: Yup.string()
        .required("Please type a question")
    })

    //add axios call here




})(AddQuestion)




export default FormikAddQuestion 