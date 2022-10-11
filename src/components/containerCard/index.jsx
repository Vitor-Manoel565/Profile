import styles from "./container.module.css";
import Card from "../Card/cards";
import { TecnologiesData } from "../../functions/Tecnologies";

export default function ContainerCards() {

  console.log(TecnologiesData);
  return (
    <div className={styles.containerCard}>
      {TecnologiesData?.map((tecnlogy,index) => {
        return (
          <Card
            src={tecnlogy.src}
            title={tecnlogy.title}
            router={tecnlogy.router}
            key={index}
          />
        );
      })}
    </div>
  );
}
