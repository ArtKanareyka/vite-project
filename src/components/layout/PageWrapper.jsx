import { Questions } from '../pages/Questions'
import { Result } from '../pages/Result'
import { TypeRoof } from '../pages/TypeRoof'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'

function PageWrapper(storageList) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TypeRoof storage={storageList.storage} />} />

        {storageList.storage.map((item) => (
          <Route
            path={item.path}
            key={item.id}
            element={<Questions {...item} />}
          />
        ))}
        <Route path="result" element={<Result />} />
        <Route path="*" element={<div>404 page not found</div>} />
      </Route>
    </Routes>
  )
}
export default PageWrapper
