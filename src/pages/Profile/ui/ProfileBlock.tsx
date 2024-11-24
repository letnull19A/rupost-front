import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'

const ProfileBlock = () => {
 
 const mockUser = {
  name: 'Alex',
  surname: 'Wolkow',
  email: 'alexvolkovdd@gmail.com',
  nickName: 'letnull19a',
  about: 'фанат горажданской обороны'
 }

return (
  <div>
   <ProfileImage/>
   <ProfileInfo {...mockUser}/>
  </div>
 )
}

export default ProfileBlock
