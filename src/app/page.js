import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Clinica do Fabricio</h1>
      <Image className={styles.img} src='/' alt="imagem não pensada" width={400} height={200} />
    </div>
  );
}