import { Element } from 'react'
import style from './styles.module.css'

type TContainerProps = {
  children: Array<Element>
  className?: string
}

const Container = (props: TContainerProps) => {
  const { children, className } = props

  return (
    <div className={style.container + ' ' + className}>
      {children}
    </div>
  )
}

export default Container
