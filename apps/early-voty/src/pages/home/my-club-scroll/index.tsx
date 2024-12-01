import Styles from './my-club-scroll.module.scss'

const MyClubScroll = () => {
  return (
    <div className={Styles.layout}>
      <div className={Styles.horizontalScroll}>
        <div className={Styles.club} />
        <div className={Styles.club} />
        <div className={Styles.club} />
      </div>
    </div>
  )
}
export default MyClubScroll
