import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

export default function Quiz() {
    const { setGameState, player1Name, score1, setScore1,chosenAnswers1, setChosenAnswers1 } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState(null); // Track the currently selected option

    const handleOptionClick = (option) => {
        setOptionChosen(option);
    };

    const nextQuestion = () => {
        if (optionChosen === null) {
            alert("Please choose an option before proceeding to the next question.");
            return;
        }

        // Save the chosen answer
        setChosenAnswers1([...chosenAnswers1, { questionIndex: currQuestion, answer: optionChosen }]);

        // Reset the optionChosen for the next question
        setOptionChosen(null);

        // Move to the next question
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (optionChosen === null) {
            alert("Please choose an option before finishing the quiz.");
            return;
        }

        // Save the chosen answer for the last question
        setChosenAnswers1([...chosenAnswers1, { questionIndex: currQuestion, answer: optionChosen }]);

        setGameState('quiz2');
    };

    return (
        <div className="Quiz">
            <h2>{`${player1Name}'s Turn`}</h2>
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => handleOptionClick('A')}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => handleOptionClick('B')}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => handleOptionClick('C')}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => handleOptionClick('D')}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}>Next Question</button>
            )}
            {/* Debugging: Display chosen answers */}
            <div>
                Chosen Answers: {JSON.stringify(chosenAnswers1)}
            </div>
        </div>
    );
}
