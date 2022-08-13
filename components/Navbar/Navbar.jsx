import React from "react";
import styles from "./navbar.module.scss";
import { BiPhoneCall } from "react-icons/bi";
import { MenuItemLeft, MenuItemRight } from "./components/MenuItem";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.call}`}>
        <div className={styles.callBtn}>
          <BiPhoneCall />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>90 553 677 8682</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          {MenuItemLeft.map((item, index) => {
            return (
              <li className={styles.listItem} key={index}>
                {item.name}
              </li>
            );
          })}
          <h3>SONER ADY.</h3>
          {MenuItemRight.map((item, index) => {
            return (
              <li className={styles.listItem} key={index}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <div className={styles.cartIcon}>
            <BsCart2 />
          </div>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
