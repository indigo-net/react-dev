import { Outlet } from 'react-router-dom'
import Styles from './screen-layout.module.scss'

export default function ScreenLayout() {
  return (
    <div className={Styles['main-layout']}>
      <div className={Styles['main-box']}>
        <Outlet />
      </div>
    </div>
  )
}
