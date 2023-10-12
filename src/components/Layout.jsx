import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="container">
      <h1 className="test-title">Рассчет количества шифера</h1>
      <Outlet />
    </div>
  )
}

export { Layout }
