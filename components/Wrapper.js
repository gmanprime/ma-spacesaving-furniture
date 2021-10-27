import styles from "../styles/Wrapper.module.css";

function wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default wrapper;
