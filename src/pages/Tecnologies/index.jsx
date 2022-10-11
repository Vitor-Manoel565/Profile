import styles from "./node.module.css";
import ContentPages from "../../components/contentPages";
import { TecnologiesData } from "../../functions/Tecnologies";
import { useParams } from "react-router-dom";
export default function Tecnologies() {
 const {tecnology} = useParams()
 const data = TecnologiesData.find(item=> item.router === tecnology)
console.log(tecnology);

  if(!tecnology || !data)return <h1 style={{color: '#FFF'}}>Tecnlogia não informada</h1>

  return (
    <div className={styles.containerMain}>
      <ContentPages
        title={data.title}
        src={data.src}
        description={data.description}
      />
    </div>
  );
}
