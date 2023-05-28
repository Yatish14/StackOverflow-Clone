import Questions from "../models/Questions.js"
import mongoose from "mongoose"

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Questions({...postQuestionData, userId: req.userId});
    try
    {
        await postQuestion.save();
        res.status(200).json({message: "Posted a question succesfully"})
    }
    catch(err)
    {
        console.log(err)
        res.status(409).json({message: "Could not post a new question"})
    }
}