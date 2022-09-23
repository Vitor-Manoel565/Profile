import styles from "./home.module.css";
import perfil from "../../assets/perfil.jpg";

export default function Home() {
  return (
    <div className={styles.containerMain}>
      <main>
        <div className={styles.header}>
          <div className={styles.containerImg}>
            <img src={perfil}></img>
          </div>
          <div className={styles.description}>
            <h1 className={styles.title}>
              Vitor Manoel: <span>Desenvolvedor web FullStack js</span>
            </h1>
          </div>
          <div className={styles.containerButton}></div>
        </div>
      </main>
    </div>
  );
}
