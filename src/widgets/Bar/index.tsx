import style from './styles.module.css'

type TBarItemProps = {
 icon?: string
}

const BarItem = (props: TBarItemProps) => {
 return (
  <li><i class={props.icon}></i></li>
 )
}

const Bar = () => {
 return (
  <div className={style.bar}>
   <ul className={style.barList}>
    <BarItem icon='fa-solid fa-house'/>
   </ul>
  </div>
 )
}

export default Bar
