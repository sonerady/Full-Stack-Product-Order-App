import styles from "./productCard.module.scss";
import Image from "next/image";

const ProductCard = ({ item, index }) => {
  return (
    <div className={styles.container}>
      <Image src={item.img} width="300" height="300" />
      <h1 className={styles.title}>{item.title}</h1>
      <span className={styles.price}>{item.price}</span>
      <p className={styles.desc}>{item.description}</p>
    </div>
  );
};

export default ProductCard;
