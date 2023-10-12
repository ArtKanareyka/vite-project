import { NavLink, Routes, Route } from 'react-router-dom'

export const Question = ({
  id,
  questionNumber,
  questions,
  var1,
  var2,
  var3,
  path,
  link,
  next,
}) => {
  return (
    <div key={id} className="test-wrapper">
      <h2 className="question-title">
        <span>{questionNumber}</span>
        {questions}
      </h2>
      <div className="question-inputs">
        <input className="question-input" type="radio" id="q1" name="q1" />
        <label htmlFor="q1">{var1}</label>
      </div>
      <div className="question-inputs">
        <input className="question-input" type="radio" id="q2" name="q2" />
        <label htmlFor="q2">{var2}</label>
      </div>
      <div className="question-inputs">
        <input className="question-input" type="radio" id="q3" name="q3" />
        <label htmlFor="q3">{var3}</label>
      </div>
      <NavLink to={link}>
        <input className="question-button" type="button" value={next} />
      </NavLink>
    </div>
  )
}
