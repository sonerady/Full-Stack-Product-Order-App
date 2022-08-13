import styles from "./productCard.module.scss";
import Image from "next/image";

const ProductCard = ({ item, key }) => {
  return (
    <div key={key} className={styles.container}>
      <Image src={item.img} width="250" height="250" />
      <h1 className={styles.title}>{item.title}</h1>
      <span className={styles.price}>{item.price}</span>
      <p className={styles.desc}>{item.description}</p>
    </div>
  );
};

export default ProductCard;
