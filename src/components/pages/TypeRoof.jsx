import { Link } from 'react-router-dom'
// СТРАНИЦА В ВЫБОРОМ КРЫШ

export const TypeRoof = (storageItem) => {
  return (
    <div className="type-roof__wrapper">
      <h1 className="type-roof__title">Выберите тип кровли</h1>
      <ul className="type-roof__list">
        {storageItem.storage.map((storageItem) => (
          <li key={storageItem.id} className="type-roof__item">
            <Link to={storageItem.id + storageItem.path}>
              <button className="type-roof__button" type="button" value="START">
                <img
                  className="type-roof__image"
                  width={60}
                  height={60}
                  src={storageItem.image}
                  alt={storageItem.alt}
                />
                {storageItem.typeRoof}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
