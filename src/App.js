import "./App.css";
import React, { useState } from 'react';
import MainMenu from "./components/MainMenu";
import Quiz1 from "./components/Quiz1";
import Quiz2 from "./components/Quiz2";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./Helpers/Contexts";

function App() {
    const [gameState, setGameState] = useState("menu");
    const [score1,setScore1]=useState(0);
    const [score2,setScore2]=useState(0);
    const [player1Name, setPlayer1Name] = useState("Player 1"); // Define player1Name
    const [player2Name, setPlayer2Name] = useState("Player 2"); // Define player2Name
    const [chosenAnswers1, setChosenAnswers1] = useState([]); // Initialize chosenAnswers1
    const [chosenAnswers2, setChosenAnswers2] = useState([]); // Initialize chosenAnswers2

    return (
        <div className="app">
            <h1>Quiz App</h1>
            <QuizContext.Provider value={{ gameState, setGameState, score1, setScore1,score2,setScore2,player1Name,player2Name,chosenAnswers1,setChosenAnswers1,chosenAnswers2,setChosenAnswers2, }}>
                {gameState === "menu" && <MainMenu />}
                {gameState === "quiz1" && <Quiz1/>}
                {gameState === "quiz2" && <Quiz2 />}
                {gameState === "endScreen" && <EndScreen />}
            </QuizContext.Provider>
        </div>
    );
}

export default App;

