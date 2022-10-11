import styles from "./header.module.css";
import perfil from "../../assets/perfil.jpg";

export default function Header({name, profession}) {
  return (
    <div className={styles.header}>
      <div className={styles.containerImg}>
        <img src={perfil}></img>
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>
          {name}: <span>{profession}</span>
        </h1>
      </div>
    </div>
  );
}
