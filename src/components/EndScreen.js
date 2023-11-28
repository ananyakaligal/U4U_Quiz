import React, { useContext } from 'react';
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

export default function EndScreen() {
    const { score1, setScore1, chosenAnswers1, chosenAnswers2, setGameState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore1(0);
        setGameState("menu");
    };

    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3>
                Chosen Answers of player 1: {JSON.stringify(chosenAnswers1)}
            </h3>
            <h3>
                Chosen Answers of player 2: {JSON.stringify(chosenAnswers2)}
            </h3>
            <button onClick={restartQuiz}> Restart Quiz</button>
        </div>
    );
}
