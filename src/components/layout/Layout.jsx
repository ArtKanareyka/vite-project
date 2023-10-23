import { Outlet } from 'react-router-dom'
import Header from './Header'
import '../../data/index.css'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="layout__wrapper">
        <Outlet />
      </main>
    </>
  )
}

export { Layout }
