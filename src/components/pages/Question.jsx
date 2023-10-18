import { NavLink } from 'react-router-dom'

export const Question = (item) => {
  return (
    <>
      <img width={330} height={330} src={item.image} alt="схема крыши" />
      <input className="question__input" type="number" id={item.id} />
      <span>{item.question}</span>

      <NavLink to={item.link}>
        <input className="question__next" type="button" value={item.link} />
      </NavLink>
    </>
  )
}
