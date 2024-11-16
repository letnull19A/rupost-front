import {Panel} from './../../widgets'
import {Link} from 'react-router-dom'
import './styles.module.css'

const Login = () => {
 return (
 <Panel>
  <h2>Войти</h2>
   <form>
    <input 
     type='text' 
     placeholder='Введите логин'/>
    <input
     type='password' 
     placeholder='Введите пароль'/>
    <input 
     type='submit'
     value='Войти'/>
   </form>
   <Link to='/registration'>Создать аккаунт</Link>
  </Panel>
 )
}

export default Login
