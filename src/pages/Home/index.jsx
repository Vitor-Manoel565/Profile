import ContainerCards from "../../components/containerCard";

import Header from "../../components/Header/header";
import styles from "./home.module.css";



export default function Home() {
  return (
    <div className={styles.containerMain}>
      <main>
        <Header
          name="Vitor Manoel Alves de Souza"
          profession="Desenvolvedor JavaScript"
        />
        <ContainerCards/>

      </main>
    </div>
  );
}
