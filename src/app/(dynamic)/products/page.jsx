import Link from "next/link";
import styles from "./Shop.module.css";
import Image from "next/image";

export const metadata = {
  title: "Hexashop-Products",
  description:
    "Explore a wide range of beauty products, latest smartphones, and exquisite perfumes at StoreX. Enjoy great deals and fast shipping on all orders!",
};

const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }
  return res.json();
};

export default async function Products() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContanier}>
      {products.map((product) => (
        <Link
          href={`/products/${product.id}`}
          className={styles.post}
          key={product.id}
        >
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
