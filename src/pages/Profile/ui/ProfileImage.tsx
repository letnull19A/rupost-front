import style from './styles.module.css'

type TProfileImage = {
 image?: string
}

const ProfileImage = (props: TProfileImage) => {

 const {image} = props

 return image ?
  <img src={image} className={style.image}/> : 
  (
   <div className={style.image}></div>
  )
}

export default ProfileImage
