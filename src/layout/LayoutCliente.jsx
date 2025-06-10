import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import Footer from '../components/Footer/Footer'

const LayoutCliente = () => {
  const { usuario } = useContext(AuthContext)
  return (
    <>
      <Menu />
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">👋 Hola, {usuario.Nombres}</h2>
        <div className="grid gap-6">
          <Outlet/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default LayoutCliente