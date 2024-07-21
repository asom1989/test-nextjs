import Link from "next/link";
import styles from "./Shop.module.css";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }
  return res.json();
};

export default async function blog() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContanier}>
      {products.map((product) => (
        <Link href="/blog/id" className={styles.post} key={product.id}>
          <div className={styles.imageContanier}>
            <Image
              className={styles.Image}
              src={product.thumbnail}
              width={350}
              height={250}
              alt="post img"
            />
            <span className={styles.price}>{product.price}</span>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.text}>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
