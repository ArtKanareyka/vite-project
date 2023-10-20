import { Questions } from '../pages/Questions'
import { Result } from '../pages/Result'
import { TypeRoof } from '../pages/TypeRoof'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'

function PageWrapper(storageItem) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TypeRoof storage={storageItem.storage} />} />
        {storageItem.storage.map((element) => {
          return element.questions.map((item) => (
            <Route
              path={element.id + item.path}
              key={item.id}
              element={<Questions element={element} {...item} />}
            />
          ))
        })}
        {storageItem.storage.map((element) => {
          return (
            <Route
              path={element.id + 'result'}
              key={element.id}
              element={<Result {...element} />}
            />
          )
        })}

        <Route path="*" element={<div>404 page not found</div>} />
      </Route>
    </Routes>
  )
}
export default PageWrapper
