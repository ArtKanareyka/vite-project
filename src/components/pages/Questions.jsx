import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// СТРАНИЦА С ИНПУТАМИ

export const Questions = (questionItem) => {
  function logId() {
    console.log(`${questionItem.storageItem.id}${questionItem.id}`)
    console.log(
      document.getElementById(
        `${questionItem.storageItem.id}${questionItem.id}`
      ).value
    )
  }
  return (
    <ul className="question__list">
      <li className="question__questionItem" key={questionItem.id}>
        <h2 className="question__title">{questionItem.storageItem.typeRoof}</h2>
        <img
          className="question__image"
          width={330}
          height={330}
          src={questionItem.image}
          alt="схема крыши"
        />
        <input
          className="question__input"
          type="number"
          placeholder={questionItem.question}
          id={`${questionItem.storageItem.id}${questionItem.id}`}
        />
        <Link to={`../${questionItem.storageItem.id + questionItem.link}`}>
          <input
            className="question__next-button"
            type="button"
            onClick={logId}
            value={questionItem.link !== 'result' ? 'Следующий' : 'Рассчитать'}
          />
        </Link>
      </li>
    </ul>
  )
}
