import React from "react";
import styles from "./productList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsData } from "../ProductCard/components/ProductsData";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>THE BEST FRUIT PLATFORM</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam odio
        quisquam nobis explicabo quia dignissimos illo in esse, ut dolore hic!
        Consectetur, rem quod dignissimos id a dolore provident iste! quisquam
        nobis explicabo quia dignissimos illo in esse, ut dolore hic!
      </p>
      <div className={styles.wrapper}>
        {ProductsData.map((item, i) => {
          return <ProductCard item={item} index={i} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
