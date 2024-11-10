
import React from 'react'
import { Container } from './../'
import style from './styles.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerContent}>
          ruPosts
          <div className={style.headerControls}>
            <span>Войти</span>
            <span>Регистрация</span>
          </div>
        </div>
      </Container>
    </header>
  )
}


export default Header
