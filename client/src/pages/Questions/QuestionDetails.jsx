import React from 'react';
import { useParams } from 'react-router-dom';
import upVote from "../../assets/sort-up.svg"
import downVote from "../../assets/sort-down.svg"
import "./Questions.css";
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswer from './DisplayAnswer';

const QuestionDetails = () => {
    const { id } = useParams();
    console.log(id)
    var questionsList = [
        {
            _id: '1',
            upVotes: 3,
            downVotes: 2,
            noOfAnswers: 1,
            questionTitle: "What is CPP?",
            questionBody: "It is meant to be",
            questionTags: ["javascript","R","python"],
            userPosted: "yatish",
            userId: 1,
            askedOn: "may 25",
            answer: [{
                answerBody: "Answer",
                userAnswered: "Kumar",
                answeredOn: "may 26",
                userId: 2
            }]
        },
        {
            _id: '2',
            upVotes: 2,
            downVotes: 1,
            noOfAnswers: 1,
            questionTitle: "What is CPP?",
            questionBody: "It is meant to be",
            questionTags: ["javascript","R","python"],
            userPosted: "ram",
            userId: 2,
            askedOn: "may 25",
            answer: [{
                answerBody: "Answer",
                userAnswered: "Kumar",
                answeredOn: "may 26",
                userId: 2
            }]
        },
        {
            _id: '3',
            upVotes: 5,
            downVotes: 2,
            noOfAnswers: 1,
            questionTitle: "What is CPP?",
            questionBody: "It is meant to be",
            questionTags: ["javascript","R","python"],
            userPosted: "sam",
            userId: 3,
            askedOn: "may 25",
            answer: [{
                answerBody: "Answer",
                userAnswered: "Kumar",
                answeredOn: "may 26",
                userId: 2
            }]
        }
    ];
    return (
      <div className='question-details-page'>
        {
            questionsList === null ?
            <h1>Loading...</h1> :
            <>
              {
                questionsList.filter((question) => question._id === id).map((question) => {
                    return(
                    <div key = {question._id}>
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className="question-votes">
                                    <img src={upVote} alt='upvote' width="18" className='votes-icon'/>
                                    <p>{question.upVotes - question.downVotes}</p>
                                    <img src={downVote} alt='downvote' width="18" className='votes-icon'/>
                                </div>
                                <div style={{width: "100%"}}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="question-actions-user">
                                        <div>
                                            <button type='button'>Share</button>
                                            <button type='button'>Delete</button>
                                        </div>
                                        <div>
                                            <p>asked {question.askedOn} </p>
                                            <Link to = {`/User/${question.userId}`} className='user-link' style={{color: 'rgb(0, 157, 255)'}}>
                                                <Avatar backgroundColor="orange" px = "8px" py = "5px">{question.userPosted.charAt(0).toLocaleUpperCase()}</Avatar>
                                                <div>
                                                    {
                                                        question.userPosted
                                                    }
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !== 0 && (
                                <section>
                                    <h3>{question.noOfAnswers} answers</h3>
                                    <DisplayAnswer key={question._id} question={question}/>
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                            <form>
                                <label htmlFor='answer-input'>
                                    <h3>Your Answer</h3>
                                    <textarea id= "answer-input" cols="30" rows="10"></textarea><br/>
                                </label>
                                <input type="submit" className='post-ans-btn' value='Post Your Answer'></input>
                            </form>
                            <p>Browse other Question tagged 
                                {
                                    question.questionTags.map((tag) => (
                                        <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                    ))
                                } 
                                <Link to='/AskQuestion' style={{textDecoration: "none", color: "rgb(0, 157, 255)"}}>or ask your own question.</Link>
                            </p>
                        </section>
                    </div>
                    )
                })
              }
            </>
        }
      </div>
    )
}

export default QuestionDetails
