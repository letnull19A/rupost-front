import {Link} from 'react-router-dom'
import {Panel} from './../../widgets'
import './styles.module.css'

const Registration = () => {
 return (
  <Panel>
  <h2>Регистрация</h2>
   <form>
    <input
     type='text' 
     placeholder='Ник нейм'/>
    <input
     type='text'
     placeholder='Введите логин'/>
    <input
     type='password'
     placeholder='Введите пароль'/>
    <input 
     type='password' 
     placeholder='Подтвердите пароль'/>
    <input
     type='submit'
     value='Регистрация'/>
   </form>
   <Link to='/login'>Есть аккаунт</Link>
  </Panel>
 )
}

export default Registration
