
import React from 'react'
import {Link} from 'react-router-dom'
import { Container } from './../'
import style from './styles.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerContent}>
          <span className={style.headerTitle}>ruPosts</span>
          <div className={style.headerControls}>
            <Link to='/login'>Войти</Link>
            <span>Регистрация</span>
          </div>
        </div>
      </Container>
    </header>
  )
}


export default Header
