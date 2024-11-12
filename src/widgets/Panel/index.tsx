import {Element} from 'react'
import style from './styles.module.css'

type TPanelProps = {
 children?: Element
}

const Panel = (ptops: TPanelProps) => {

  const {children} = props

  return (
   <div className={style.panel}>
    {children}
   </div>
  )
}

export default Panel
