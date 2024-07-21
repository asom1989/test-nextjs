import Image from "next/image";
import styles from "./page.module.css";
import hero from "../../public/images/icons/hero.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop Destination!</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          deleniti veritatis hic, laborum placeat earum.
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image src={hero} alt="hexa shop" />
      </div>
    </div>
  );
}
