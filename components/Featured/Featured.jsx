import React, { useEffect, useState } from "react";
import styles from "./featured.module.scss";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Image from "next/image";
import Slider1 from "../../public/assets/img/slider_1.jpg";
import Slider2 from "../../public/assets/img/slider_2.jpg";
import Slider3 from "../../public/assets/img/slider_3.jpg";

const Featured = () => {
  const images = [Slider1, Slider2, Slider3];

  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleArrow("r");
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <IoIosArrowDropleft />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <IoIosArrowDropright />
      </div>
    </div>
  );
};

export default Featured;
