import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Leaderboard from "./components/Leaderboard";
import "./App.css";
import questionsData from "./questions.json";
interface QuestionType {
  question: string;
  answers: string[];
  correct: string;
}

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>([]);
  const [score, setScore] = useState<number>(0);
  const [leaderboard, setLeaderboard] = useState<
    { name: string; score: number }[]
  >([]);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  useEffect(() => {
    const generatedQuestions = generateRandomQuestions();
    setQuestions(generatedQuestions);
    setSelectedAnswers(new Array(generatedQuestions.length).fill(null));
  }, []);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newQuestions = generateRandomQuestions();
    setQuestions(newQuestions);
    setSelectedAnswers(new Array(newQuestions.length).fill(null));
    setScore(0);
    setGameFinished(false);
  };
  const generateRandomQuestions = (): QuestionType[] => {
    // Shuffle questions
    const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());

    // Shuffle answers for each question
    shuffledQuestions.forEach((question) => {
      question.answers = question.answers.sort(() => 0.5 - Math.random());
    });

    return shuffledQuestions.slice(0, 20);
  };

  const handleAnswerSelect = (
    questionNumber: number,
    selectedAnswer: string
  ) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionNumber - 1] = selectedAnswer;
    setSelectedAnswers(updatedAnswers);

    const isCorrect = questions[questionNumber - 1].correct === selectedAnswer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Check if all questions are answered
    if (updatedAnswers.every((answer) => answer !== null)) {
      const finalScore = isCorrect ? score + 1 : score; // Update final score
      setGameFinished(true);
      const playerName = prompt("Enter your name for the leaderboard:");
      if (playerName) {
        setLeaderboard((prevLeaderboard) => [
          ...prevLeaderboard,
          { name: playerName, score: finalScore },
        ]);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
      </header>
      <div className="content">
        <div className="leaderboard">
          <Leaderboard scores={leaderboard} />
        </div>
        <hr />
        <div className="questions">
          {questions.map((question, index) => (
            <Question
              key={index}
              questionNumber={index + 1}
              question={question.question}
              answers={question.answers}
              onAnswerSelect={handleAnswerSelect}
              selectedAnswer={selectedAnswers[index]}
            />
          ))}
        </div>
      </div>
      <br />
      {gameFinished && <button onClick={startNewGame}>New Game</button>}
    </div>
  );
};

export default App;
