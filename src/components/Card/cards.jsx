import { Link } from "react-router-dom";
import styles from "./card.module.css";


export default function Card({ src, title, router }) {
  return (
    <Link to={`/tecnologies/${router}`} className={styles.card}>

      <div className={styles.containerLogo}>
          <div className={styles.containerImg}>
            <img src={src}></img>
          </div>
      </div>
        <h1>{title}</h1>

    </Link>
  );
}
