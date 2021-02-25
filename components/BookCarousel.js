import styles from "@/styles/carousel.module.scss";

const BookCarousel = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-lg w-11/12 mt-8 mx-auto">
      <h2 className="text-2xl text-text_header_color">Book Recommendations</h2>

      <div className={styles.container}>
        <div className={styles.card}>
          <img src="https://i.imgur.com/HRpwpZb.jpg"></img>
        </div>
        <div className={`${styles.card}`}>
          <img src="https://i.imgur.com/whlhaKp.jpg"></img>
        </div>
        <div className={`${styles.card}`}>
          <img src="https://i.imgur.com/GQ07Bag.jpg"></img>
        </div>
        <div className={`${styles.card} object-contain`}>
          <img src="https://i.imgur.com/xzOPmv4.jpg"></img>
        </div>
        <div className={`${styles.card}`}>
          <img src="https://i.imgur.com/S0CuSLB.jpg"></img>
        </div>
        <div className={`${styles.card}`}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41H9ZCmjenL._SX331_BO1,204,203,200_.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;
