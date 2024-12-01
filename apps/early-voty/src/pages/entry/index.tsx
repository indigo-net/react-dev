import Button from '../../components/button'
import Styles from './entry.module.scss'

const Entry = () => {
  return (
    <div className={Styles.layout}>
      <img className={Styles.logo} alt='Logo' />
      <div className={Styles.gapH20} />
      <p className={Styles.serviceName}>Service Name</p>
      <div className={Styles.gapH120} />
      <Button $width='big'>Kakao Login</Button>
    </div>
  )
}
export default Entry
