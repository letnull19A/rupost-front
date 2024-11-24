import style from './styles.module.css'

type TProfileActionsProps = {
 onAddFriend?: (id: string) => void
 onWriteMessage?: (id?: string) => void
}

const ProfileActions = 
 (props: TProfileActionProps) => {
 
 const {onAddFriend, onWriteMessage} = props

 return (
  <div className={style.profileActions}>
   <button>Add friend</button>
   <button>Message</button>
  </div>
 )
}

export default ProfileActions
