import styles from "../../components/Container/Container.module.scss";

const Container = ({children, className}) => {
    return (
      <div className={styles.wrapper}>
        {children}
      </div>
    )
  }
  
  export default Container;