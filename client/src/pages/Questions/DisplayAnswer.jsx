import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {
            question.answer.map((ans) => {
                return (
                <div className='display-ans'>
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type="button">Share</button>
                            <button type="button">Delete</button>
                        </div>
                        <div>
                            <p>answered {ans.answeredOn}</p>
                            <Link to = {`/User/${question.userId}`} className='user-link' style={{color: 'rgb(0, 157, 255)'}}>
                                <Avatar backgroundColor="green" px = "8px" py = "5px">{ans.userAnswered.charAt(0).toLocaleUpperCase()}</Avatar>
                                <div>
                                    {
                                        ans.userAnswered
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                )
            })
      }
    </div>
  )
}

export default DisplayAnswer
