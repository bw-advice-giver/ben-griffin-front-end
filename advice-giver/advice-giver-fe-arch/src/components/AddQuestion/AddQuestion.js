import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import axios from 'axios';

const StyledLabel = styled.label`
    font-size: 1.7rem;
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 2%;
    margin-top: 1%;
    color: #BAB6CA
    
`

const StyledTitle = styled(Field)`
    width: 30%;
    padding: .8%;
    border-radius: 3px;
    margin-bottom: 2%;
    border: 1px solid grey;
    font-size: .9rem;
    background-color: whitesmoke;
    border: 1px solid #7990B1;
   
`

const StyledButton = styled.button`
    display: flex;
    // justify-content: center;
    margin-left: 47%;
    margin-top: 3%;
    padding: 1%;
    border-radius: 3px;
    font-weight: bold;
    background-color: #3A648C;
    color: white;
`

const StyledDiv = styled.div`

    background-color: #293341;
    padding-bottom: 4%;
    box-sizing: border-box;
    width: 70%;
    margin-left: 16%;
    margin-bottom: 10%;
    padding-top: 4%;
    border-radius: 4px;
    border: 3px solid #7990B1
`

const StyledHead = styled.h1`
    text-decoration: underline;
    color: #293341;
    margin-bottom: 8%;
    color: #BAB6CA
`

const StyledBody = styled(Field)`
    width: 40%;
    padding-bottom: 20%;
    resize: none;
    border: 1px solid grey;
    border-radius: 3px;
    font-size: .9rem;
    border: 1px solid #7990B1;
    background-color: whitesmoke;
`

const StyledDrop = styled(Field)`
    // cursor: pointer;
    // margin-bottom: 2%;
    // background-color: whitesmoke;
    // boder: 1px solid #7990B1;
    // width: 20%;
    // padding: 55%;
    // border: 1px solid #7990B1;
    width: 30%;
    padding: .8%;
    border-radius: 3px;
    margin-bottom: 2%;
    border: 1px solid grey;
    font-size: .9rem;
    background-color: whitesmoke;
    border: 1px solid #7990B1;
`
const StyledError = styled.p`
    color: #BAB6CA;
`



const AddQuestion = ({values, errors, touched, status, handleChange, handleSubmit}) => {

    const [questions, setQuestions] = useState({title: '', type: '', message:''})

    useEffect(() => {
        if (status) {
            setQuestions([...questions, status])
        }
    }, [status])

    


  

 

    // const request = axios
    // .create ({
    //     baseURL: 'https://advice-giver-backend.herokuapp.com',
    //         timeout: 1000,
    //         headers: {
    //             authorization: "axiosWithAuth"
    //         }
    // });
    // request.post('/questions', {
    //     message: "",
    //     private: false,
    //     title: "",
    //     isAnswered: false,
    // })

    
    return (

        <StyledDiv>

        <StyledHead>Need advice? Submit a question!</StyledHead>

        <Form onSubmit = {handleSubmit}>

           
            <StyledLabel>Title</StyledLabel>
            <StyledTitle
            type = "text"
            name = "title"
            placeholder = "Type Your Title Here"
            value = {values.title}
            onChange = {handleChange}
            />

            {touched.title && errors.title && (
                <StyledError>{errors.title}</StyledError>
            )}

            

            <StyledLabel>Please Enter Your Question Type</StyledLabel>
            <StyledDrop
            // component = "select"
            type = "text"
            name = "type"
            placeholder = "i.e. Business, Career Advice, Personal Development"
            value = {values.type}
            onChange = {handleChange}
            // >
            //     <option>Please Choose An Option</option>
            //     <option value = {business}>Business</option>
            //     <option value = {career}>Career Advice</option>
            //     <option value = {personal}>Personal Development</option>
            //     <option value = {other}>Other</option>
            />
            

            {touched.type && errors.type && (
                <StyledError>{errors.type}</StyledError>
            )}

            <StyledLabel>Question</StyledLabel>    
            <StyledBody
            component = "textarea"
            type = "text"
            name = "message"
            placeholder = "Type Your Question Here"
            value = {values.message}
            onChange = {handleChange}
            />

           {touched.body && errors.body&& (
                <StyledError>{errors.message}</StyledError>
            )}

            <StyledButton>Submit</StyledButton>

        </Form>

        </StyledDiv>
    );
           
};

const FormikAddQuestion = withFormik ({

    mapStateToValues({title, type, message}) {

        return{

            title: title || "",

            type: type || "",

            message: message || ""
        }
    },

    validationSchema: Yup.object().shape({

        title: Yup.string()
        .required("Please enter a title"),

        type: Yup.string()
        .required("Please enter a type"),

        message: Yup.string()
        .required("Please type a question")
    }),

    handleChange({setStatus}, event, values){
        event.preventDefault();
        setStatus({
            ...values, [event.target.name]: event.target.values
        })
    },

    handleSubmit(values, {props}){
        console.log(values)
        axiosWithAuth().post(`https://advice-giver-backend.herokuapp.com/messages`, values )
            .then(response => {
                console.log(response) 
                localStorage.setItem("token", response.data.token)  
            })
            .catch(error => {
                console.log("Sorry", error)
            })
    }
    //add axios call here




})(AddQuestion)




export default FormikAddQuestion 