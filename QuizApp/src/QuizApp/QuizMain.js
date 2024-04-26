import React, { useState } from 'react';
import QuizQuestions from './QuizQuestions';

function QuizMain() {
  const [Question, setQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [Result, setResult] = useState(false);
  const [score, setScore] = useState(0);

  const nextQuestion = () => {
    if (selectedAnswers[Question] !== undefined) {
      if (selectedAnswers[Question] === QuizQuestions[Question].answer) {
        setScore(score + 1);
      }
      setQuestion(Question + 1);
    }
  };

  const prevQuestion = () => {
    setQuestion(Question - 1);
  };

  const showScore = () => {
    if (selectedAnswers[Question] !== undefined) {
      if (selectedAnswers[Question] === QuizQuestions[Question].answer) {
        setScore(score + 1);
      }
    }
    setResult(true);
  };

  const handleSelectAnswer = (index) => {
    const updatedSelectedAnswers = { ...selectedAnswers };
    const currentQuestion = Question; 
    updatedSelectedAnswers[currentQuestion] = index;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  return (
    <div className="container">
      {Result ? (
        <div>
          <h2>Result</h2>
          <p>
            You scored {score} out of {QuizQuestions.length} questions.
          </p>
        </div>
      ) : (
        <div className="sub_container">

          <h2>Quiz</h2>

          <p>
            Question {Question + 1} of {QuizQuestions.length}
          </p>

          <p className="question">{QuizQuestions[Question].question}</p>

          {QuizQuestions[Question].options.map((answer, index) => (
            <div key={index}>
              <button
                className={`option-button ${
                  selectedAnswers[Question] === index ? 'active' : ''}`}
                onClick={() => handleSelectAnswer(index)}
              >
                {answer}
              </button>
            </div>
          ))}

          <div className="question_Btns">
            {Question > 0 && (
              <button className="prev_Btn" onClick={prevQuestion}>
                Prev
              </button>
            )}

            {Question < QuizQuestions.length - 1 ? (
              <button className="next_Btn" onClick={nextQuestion}>
                Next
              </button>
            ) : (
              <button className="submit_Btn" onClick={showScore}>
                Submit
              </button>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default QuizMain;
