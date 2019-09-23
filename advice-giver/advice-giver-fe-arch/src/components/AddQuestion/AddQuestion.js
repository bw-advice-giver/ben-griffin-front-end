import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik"
import * as Yup from 'yup';
import styled from "styled-components";


const StyledLabel = styled.label`
    font-size: 3rem;
    display: flex;
    justify-content: center;

`


const AddQuestion = ({values, errors, touched, status}) => {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        if (status) {
            setQuestions([...questions, status])
        }
    }, [status])

    return (

        <div className = "questionBox">

        <Form>

            <StyledLabel>Title: </StyledLabel>
            <Field
            type = "text"
            name = "title"
            placeholder = "Type Your Title Here"
            />

            {touched.title && errors.title && (
                <p>{errors.title}</p>
            )}

            <StyledLabel>Please Select Your Question Type</StyledLabel>
            <Field
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


            </Field>
            

            {touched.type && errors.type && (
                <p>{errors.type}</p>
            )}

            <StyledLabel>Question: </StyledLabel>    
            <Field
            component = "textarea"
            type = "text"
            name = "body"
            placeholder = "Type Your Question Here"
            />

           {touched.body && errors.body&& (
                <p>{errors.body}</p>
            )}

            <button type = "submit">Submit</button>

        </Form>

        </div>
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