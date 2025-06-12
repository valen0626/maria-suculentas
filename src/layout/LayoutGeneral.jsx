import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu'
import { Outlet } from 'react-router-dom';

const LayoutGeneral = () => {
  return (
    <>
      <Menu />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid gap-6">
          <Outlet />
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default LayoutGeneral