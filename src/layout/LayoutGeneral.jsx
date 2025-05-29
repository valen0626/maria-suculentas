import './Layouts.css'
import Menu from '../components/Menu/Menu'
import { Outlet } from 'react-router-dom';

const LayoutGeneral = () => {
  return (
    <>
    <Menu/>
    <section className='layoutGeneral'>
        <Outlet/>
    </section>
    </>
  )
}

export default LayoutGeneral