import { Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

export const Result = (storageItem) => {
  return (
    <div className="result-wrapper">
      <Stack spacing={5} alignItems="center" m={10}>
        <h2 className="result-title">{storageItem.typeRoof}</h2>
        <div className="result-count">0</div>
        <Link to="/">
          <Button variant="outlined">Пересчитать</Button>
        </Link>
      </Stack>
    </div>
  )
}
