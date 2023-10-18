import { Question } from './question'

// СТРАНИЦА С ИНПУТАМИ

export const Questions = (storageItem) => {
  return (
    <section className="questions__wrapper" key={storageItem.id}>
      <h2 className="questions__title">{storageItem.typeRoof}</h2>
      <ul>
        {storageItem.questions.map((item) => (
          <li className="question__item" key={item.id}>
            <Question {...item} />
          </li>
        ))}
        )
      </ul>
    </section>
  )
}
