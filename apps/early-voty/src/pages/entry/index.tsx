import Button from '@/components/button'
import { usePageRoute } from '@/hooks/use-page-route'
import Styles from './entry.module.scss'

const Entry = () => {
  const { goHome } = usePageRoute()
  return (
    <div className={Styles.layout}>
      <img className={Styles.logo} alt='Logo' />
      <div className={Styles.gapH20} />
      <p className={Styles.serviceName}>Service Name</p>
      <div className={Styles.gapH140} />
      <Button $width='big' onClick={goHome}>
        카카오 로그인
      </Button>
    </div>
  )
}
export default Entry
