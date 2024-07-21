import styles from "./post.module.css";
import Image from "next/image";

const getData = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: `Hexashop-${product.title}`,
    description: product.description,
  };
}

export default async function Post({ params }) {
  const product = await getData(params.id);

  return (
    <div className={styles.postContainer}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.desc}>
            {product.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className={styles.imageContanier}>
          <Image
            className={styles.Image}
            src={product.thumbnail}
            fill={true}
            alt={product.title}
          />
          <span className={styles.category}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image, i) => (
            <Image
              key={i}
              src={image}
              width={100}
              height={100}
              alt={product.title}
            />
          ))}
        </div>
        <p className={styles.text}>{product.description}</p>
      </div>
    </div>
  );
}
