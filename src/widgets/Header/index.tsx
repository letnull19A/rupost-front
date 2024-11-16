import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Container} from './../'
import style from './styles.module.css'

const Header = () => {

  const navigate = useNavigate()

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerContent}>
          <Link className={style.headerTitle}>ruPost</Link>
          <div className={style.headerControls}>
            <span onClick={() => navigate('/login')}>Войти</span>
            <span onClick={() => navigate('/registration')}>Регистрация</span>
          </div>
        </div>
      </Container>
    </header>
  )
}


export default Header
