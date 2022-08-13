import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            We dream of being the largest garden in the world
          </h2>
        </div>
        <div className={styles.card}>
          <div>
            <h1 className={styles.title}>FIND OUR SHOPING</h1>
            <p className={styles.text}>
              90 553 677 8682
              <br />
              Zemin Kat 34394
              <br />
              Zincirlikuyu/İstanbul
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h1>Working Hours</h1>
          <p>we are always working</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
