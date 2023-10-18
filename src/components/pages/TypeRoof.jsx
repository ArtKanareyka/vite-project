import { NavLink } from 'react-router-dom'

// СТРАНИЦА В ВЫБОРОМ КРЫШ

export const TypeRoof = (storageList) => {
  return (
    <div className="type-roof__wrapper">
      <h1 className="type-roof__title">Выберите тип кровли</h1>

      <ul className="type-roof__list">
        {storageList.storage.map((item) => (
          <li key={item.id} className="type-roof__item">
            <NavLink to={item.path}>
              <button className="type-roof__button" type="button" value="START">
                <img
                  className="type-roof__image"
                  width={60}
                  height={60}
                  src={item.image}
                  alt={item.alt}
                />
                {item.typeRoof}
              </button>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
