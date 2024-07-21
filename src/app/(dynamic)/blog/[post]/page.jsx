import styles from "./post.module.css";
import Image from "next/image";
export default function Post() {
  return (
    <div className={styles.postContainer}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h2 className={styles.title}>jnfas</h2>
          <p className={styles.desc}>jnfas</p>
        </div>
        <div className={styles.imageContanier}>
          <Image
            className={styles.Image}
            src={
              "https://images.pexels.com/photos/26775381/pexels-photo-26775381/free-photo-of-ljus-hav-gryning-landskap.jpeg"
            }
            fill={true}
            alt="post img"
          />
          <span className={styles.author}>Motasem Zuhier</span>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          voluptatibus quae. Unde, nemo cum aliquid maxime culpa, error nobis
          consequuntur itaque, veritatis facilis maiores quos hic? Quia unde
          suscipit corporis tempora neque accusantium nulla obcaecati quidem,
          recusandae, culpa cum possimus nisi exercitationem non officiis,
          voluptates ducimus praesentium optio nesciunt dolorem.
        </p>
      </div>
    </div>
  );
}
