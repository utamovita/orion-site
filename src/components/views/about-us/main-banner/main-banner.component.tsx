import styles from "./main-banner.module.scss";
import backgroundImage from "public/assets/images/aboutUs/aboutUsBanner.png";
import Image from "next/image";

function MainBanner() {
  return (
    <div className={styles.wrapper}>
      <Image
        alt="background image"
        src={backgroundImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export { MainBanner };
