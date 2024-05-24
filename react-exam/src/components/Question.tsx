import React from "react";

interface QuestionProps {
  questionNumber: number;
  question: string;
  answers: string[];
  onAnswerSelect: (questionNumber: number, answer: string) => void;
  selectedAnswer: string | null;
}

const Question: React.FC<QuestionProps> = ({
  questionNumber,
  question,
  answers,
  onAnswerSelect,
  selectedAnswer,
}) => {
  return (
    <div>
      <h2>
        {questionNumber}. {question}
      </h2>
      {answers.map((answer, index) => (
        <button
          style={{
            backgroundColor: selectedAnswer === answer ? "lightgray" : "",
            color: selectedAnswer === answer ? "black" : "",
            margin: 5,
          }}
          key={index}
          onClick={(e) => {
            onAnswerSelect(questionNumber, answer);
            e.currentTarget.blur();
          }}
          disabled={selectedAnswer !== null}
        >
          {index + 1}. {answer}
        </button>
      ))}
    </div>
  );
};

export default Question;
