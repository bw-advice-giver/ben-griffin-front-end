import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import QuestionsCard from "./QuestionsCard";


const Card = (props) => {
  //mock data for now
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

  // const [movie, setMovie] = useState({});
 
  // useEffect(() => {
  //   //console.dir(props);
  //   const id = props.match.params.id;
  //   // change ^^^ that line and grab the id from the URL
  //   // You will NEED to add a dependency array to this effect hook

  //      axios
  //       .get(`http://localhost:5000/api/movies/${id}`)
  //       .then(response => {
  //         setMovie(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });

  // },[]);
  
  // Uncomment this only when you have moved on to the stretch goals

  // if (Object.keys(movie).length === 0) {
  //   return <div>Loading movie information...</div>;
  // }

  const { id, title, question, user} = mockData[0];
  return (
    <div className="card-wrapper">
      {console.log(mockData)}
      <h1>Question Details</h1>
      <h3>Poster: {user}</h3>
      <QuestionsCard {...mockData[0]}></QuestionsCard>
      {/* <div onClick={saveMovie} className="save-button">Save</div> */}
    </div>
  );
}

export default Card;
