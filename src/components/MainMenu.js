import React, { useContext } from 'react';
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

export default function MainMenu() {
    const context = useContext(QuizContext);
    const { gameState, setGameState, setScore1, setScore2, setPlayer1Name, setPlayer2Name, player1Name, player2Name } = context;

    const handleStartQuiz = () => {
        // Check if both player names are entered
        if (!player1Name || !player2Name) {
            alert("Please enter names for both players before starting the quiz.");
            return;
        }
        setGameState("quiz1");
    };

    return (
        <div className='Menu'>
            <div>
                Enter the names of Players
            </div>
            <div>
                <input
                    type="text"
                    value={player1Name}
                    onChange={(e) => setPlayer1Name(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={player2Name}
                    onChange={(e) => setPlayer2Name(e.target.value)}
                />
            </div>
            <button onClick={handleStartQuiz}>
                Start Quiz
            </button>
        </div>
    );
}
