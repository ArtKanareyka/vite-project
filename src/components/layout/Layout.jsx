import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>Хедер</header>
      <main className="layout__wrapper">
        <Outlet />
      </main>
      <footer>Футер</footer>
    </>
  )
}

export { Layout }
