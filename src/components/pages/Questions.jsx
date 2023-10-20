import { Link } from 'react-router-dom'

// СТРАНИЦА С ИНПУТАМИ

export const Questions = (item) => {
  return (
    <ul className="question__list">
      <li className="question__item" key={item.id}>
        <h2 className="question__title">{item.element.typeRoof}</h2>
        <img
          className="question__image"
          width={330}
          height={330}
          src={item.image}
          alt="схема крыши"
        />
        <input
          className="question__input"
          type="number"
          placeholder={item.question}
          id={`${item.element.id}${item.id}`}
        />
        <Link to={`../${item.element.id + item.link}`}>
          <input
            className="question__next-button"
            type="button"
            value={item.link !== 'result' ? 'Следующий' : 'Рассчитать'}
          />
        </Link>
      </li>
    </ul>
  )
}
