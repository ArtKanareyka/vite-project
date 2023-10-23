import { Button, Stack, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

// СТРАНИЦА С ИНПУТАМИ

export const Questions = (questionItem) => {
  // function logId() {
  //   console.log(`${questionItem.storageItem.id}${questionItem.id}`)
  //   console.log(
  //     document.getElementById(
  //       `${questionItem.storageItem.id}${questionItem.id}`
  //     ).value
  //   )
  // }
  return (
    <ul className="question__list">
      <li className="question__questionItem" key={questionItem.id}>
        <Stack spacing={2} alignItems="center">
          <h2 className="question__title">
            {questionItem.storageItem.typeRoof}
          </h2>

          <img
            className="question__image"
            width={330}
            height={330}
            src={questionItem.image}
            alt="схема крыши"
          />
          <TextField
            required
            id={`'outlined-basic'${questionItem.storageItem.id}${questionItem.id}`}
            label={questionItem.question}
            defaultValue=""
            type="number"
          />
          <Link to={`../${questionItem.storageItem.id + questionItem.link}`}>
            <Button variant="outlined">
              {questionItem.link !== 'result' ? 'Следующий' : 'Рассчитать'}
            </Button>
          </Link>
        </Stack>
      </li>
    </ul>
  )
}
