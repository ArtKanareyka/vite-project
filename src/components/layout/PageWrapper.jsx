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
        {storageItem.storage.map((storageItem) => {
          return storageItem.questions.map((questionItem) => (
            <Route
              path={storageItem.id + questionItem.path}
              key={questionItem.id}
              element={
                <Questions storageItem={storageItem} {...questionItem} />
              }
            />
          ))
        })}
        {storageItem.storage.map((storageItem) => {
          return (
            <Route
              path={storageItem.id + 'result'}
              key={storageItem.id}
              element={<Result {...storageItem} />}
            />
          )
        })}

        <Route path="*" element={<div>404 page not found</div>} />
      </Route>
    </Routes>
  )
}
export default PageWrapper
