import { Question } from './components/Question'
import { Result } from './components/Result'
import { Start } from './components/Start'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import store from './mocks/store'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Start />} />

        {store.map((question) => (
          <Route path={question.path} element={<Question {...question} />} />
        ))}
        <Route path="result" element={<Result />} />
        <Route path="*" element={<div>No page is selected.</div>} />
      </Route>
    </Routes>
  )
}

export default App
