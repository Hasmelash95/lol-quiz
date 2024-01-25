import { Header } from "../components/Header";
import { quizData } from '../utils/quizData'
import { useState } from "react";

export const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [score, setScore] = useState(0)
    const [showSubmit, setShowSubmit] = useState(true)
    const [showExplanation, setShowExplanation] = useState(false)
    const [isCorrect, setIsCorrect] = useState('Correct! ')

    const { question, answers, trueAnswer, explanation } = quizData[currentQuestion]

    const handleCorrect = () => {
        if (selectedAnswer === trueAnswer) {
            if (currentQuestion < quizData.length) {
                setScore(score + 1)
                setIsCorrect('Correct! ')
            }
            else {
                console.log(score)
            }
        } else {
            setIsCorrect('Incorrect! ')
        }
        setShowExplanation(true)
        setShowSubmit(false)
    }

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
        setShowExplanation(false) 
        setShowSubmit(true)   
    }
    return (
        <>
        <Header/>
        <div>
            <p>Score: {score}</p>
            <p>{question}</p>
            <ul>{Object.entries(answers).map(([key, ans]) => <li onClick={() => setSelectedAnswer(key)}>{ans}</li>)}</ul>
            {showSubmit && <button onClick={handleCorrect}>Submit Answer</button>}
            <p>{showExplanation && isCorrect + explanation}</p>
            {showExplanation && <button onClick={nextQuestion}>Next Question</button>}
        </div>
        </>
    )
}