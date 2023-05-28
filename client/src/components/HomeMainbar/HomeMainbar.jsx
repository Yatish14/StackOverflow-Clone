import React from 'react';
import "./HomeMainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionList from './QuestionList';

const HomeMainbar = () => {
  var questionsList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is CPP?",
      questionBody: "It is meant to be",
      questionTags: ["javascript","R","python"],
      userPosted: "yatish",
      userId: 1,
      askedOn: "may 25"
    },
    {
      _id: 2,
      upVotes: 2,
      downVotes: 1,
      noOfAnswers: 0,
      questionTitle: "What is CPP?",
      questionBody: "It is meant to be",
      questionTags: ["javascript","R","python"],
      userPosted: "ram",
      userId: 2,
      askedOn: "may 25"
    },
    {
      _id: 3,
      upVotes: 5,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is CPP?",
      questionBody: "It is meant to be",
      questionTags: ["javascript","R","python"],
      userPosted: "sam",
      userId: 3,
      askedOn: "may 25"
    }
  ];
  const location = useLocation();
  const user = 1
  const navigate = useNavigate()
  const checkAuth = () => {
    if(user === null)
    {
        alert("Login or Signup to ask a question!")
        navigate('/Auth')
    }
    else
    {
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
          {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
          }
          <button onClick = {checkAuth} className='ask-btn'>Ask Question</button>
        </div>
        <div>
            {
              questionsList === null ?
              <h1>Loading...</h1> :
              <>
                <p>{questionsList.length} questions</p>
                <QuestionList questionsList={questionsList}/>
              </>
            }
        </div>
    </div>
  )
}

export default HomeMainbar