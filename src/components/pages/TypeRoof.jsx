import { Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import '../../data/index.css'
// СТРАНИЦА В ВЫБОРОМ КРЫШ

export const TypeRoof = (storageItem) => {
  return (
    <div className="type-roof">
      <h1 className="type-roof__title">Выберите тип кровли</h1>
      <ul className="type-roof__list">
        <Stack direction="row" spacing={3} justifyContent="center">
          {storageItem.storage.map((storageItem) => (
            <li key={storageItem.id} className="type-roof__item">
              <Link to={storageItem.id + storageItem.path}>
                <Button variant="outlined">
                  {storageItem.typeRoof}
                  <img
                    className="type-roof__image"
                    width={100}
                    height={100}
                    src={storageItem.image}
                    alt={storageItem.alt}
                  />
                </Button>
              </Link>
            </li>
          ))}
        </Stack>
      </ul>
    </div>
  )
}
