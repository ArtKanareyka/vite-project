import { Link } from 'react-router-dom'

export const Result = (element) => {
  return (
    <div className="result-wrapper">
      <h2 className="result-title">{element.typeRoof}</h2>
      <div className="result-count">0</div>
      <Link to="/">
        <input className="result-button" type="button" value="Пересчитать" />
      </Link>
    </div>
  )
}
