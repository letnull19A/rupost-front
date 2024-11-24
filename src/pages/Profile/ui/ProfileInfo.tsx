import ProfileActions from './ProfileActions'
import style from './styles.module.css'

type TProfileInfoProps = {
 name: string
 surname: string
 email?: string
 nickName?: string
 about?: string
}

const ProfileInfo = (props: TProfileInfoProps) => {

 const {name, surname, email, nickName, about} = props

 return (
  <div className={style.profileInfo}>
   <h2>{name} {surname}</h2>
   <ProfileActions/>
   <div className={style.profileForeignInfo}>
    {email ? <p>Email: {email}</p> : null}
    {nickName ? <p>Nick name: {nickName}</p> : null}
    {about ? <p>{about}</p> : null}
   </div>
  </div>
 )
}

export default ProfileInfo
