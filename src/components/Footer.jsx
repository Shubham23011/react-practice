import styles from './footer.module.css'
const Footer = ({totalTodos, completedTodos}) => {
  return (
    <div className={styles.footer}>
        <span className={styles.item}>Total Todos : {totalTodos}</span>
        <span className={styles.item}>Completed Todos : {completedTodos}</span>
    </div>
  )
}

export default Footer