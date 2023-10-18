import styles from "../styles/comp/HeroBanner.module.css";
import Link from "next/link";

import hero1 from "../img/hero.png";
export default function HeroBanner({
  bannerImg,
  link,
  line1,
  line2,
}: {
  bannerImg: any;
  link: any;
  line1: any;
  line2: any;
}) {
  function linkCheck() {
    if (link) {
      return (
        <Link className={styles.nameLink} href="/">
          <h1 className={styles.name}>Connor Turner.</h1>
        </Link>
      );
    } else {
      return <h1 className={styles.name}>Connor Turner.</h1>;
    }
  }
  function ImgSelector() {
    if (bannerImg === 1) {
      return (
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${hero1.src})` }}
        ></div>
      );
    } else {
      return <></>;
    }
  }
  return (
    <>
      <div className={styles.main}>
        <section className={styles.text}>
          {linkCheck()}
          <h3 className={styles.two}>{line1}</h3>
          <h2 className={styles.one}>{line2}</h2>
        </section>
        <section>{ImgSelector()}</section>
      </div>
    </>
  );
}
