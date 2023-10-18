import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout__wrapper">
      <h1 className="test-title">РАСЧЕТ КОЛИЧЕСТВА ЛИСТОВ ШИФЕРА</h1>
      <Outlet />
    </div>
  )
}

export { Layout }
