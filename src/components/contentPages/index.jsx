import styles from "./styles.module.css";

export default function ContentPages({ title, src, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerDescription}>
        <div className={styles.containerLogo}>
          <img src={src}></img>
        </div>
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
    </div>
  );
}
