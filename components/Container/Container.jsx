import styles from './Container.module.scss';

function Container({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default Container;
