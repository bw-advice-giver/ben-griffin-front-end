import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard';

function QuestionList () {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get('API GOES HERE')
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.error(error);
            });
    },[]);
}

function QuestionDetails ({ list }){
    const { id } = list;
    return (
        <QuestionCard {...list}/>
    )
}