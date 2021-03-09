import Image from "next/image";
import styles from "@/styles/carousel.module.scss";

const BookCarousel = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-lg w-11/12 mt-8 mx-auto">
      <h2 className="text-2xl text-text_header_color">Book Recommendations</h2>

      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src="https://i.imgur.com/HRpwpZb.jpg"
            width={203}
            height={311}
            layout="intrinsic"
            alt="Book description here"
          ></Image>
        </div>
        <div className={`${styles.card}`}>
          <Image
            src="https://i.imgur.com/whlhaKp.jpg"
            width={203}
            height={311}
            layout="intrinsic"
            alt="Book description here"
          ></Image>
        </div>
        <div className={`${styles.card}`}>
          <Image
            src="https://i.imgur.com/GQ07Bag.jpg"
            width={203}
            height={311}
            layout="intrinsic"
            alt="Book description here"
          ></Image>
        </div>
        <div className={`${styles.card} object-contain`}>
          <Image
            src="https://i.imgur.com/xzOPmv4.jpg"
            width={203}
            height={311}
            layout="intrinsic"
            alt="Book description here"
          ></Image>
        </div>
        <div className={`${styles.card}`}>
          <Image
            src="https://i.imgur.com/S0CuSLB.jpg"
            width={203}
            height={311}
            layout="intrinsic"
            alt="Book description here"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;
