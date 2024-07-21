import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div>©2024 Hexashop. All rights reserved.</div>
        <div className={styles.social}>
          <Link href="https://www.facebook.com/" target="blank">
            <Image
              src="/images/icons/facebook.png"
              width={30}
              height={30}
              alt="facebook"
              className={styles.icon}
            />
          </Link>
          <Image
            src="/images/icons/instagram.png"
            width={30}
            height={30}
            alt="instagram"
            className={styles.icon}
          />
          <Image
            src="/images/icons/linkedin.png"
            width={30}
            height={30}
            alt="linkedin"
            className={styles.icon}
          />
          <Image
            src="/images/icons/youtube.png"
            width={30}
            height={30}
            alt="youtube"
            className={styles.icon}
          />
          <Image
            src="/images/icons/social.png"
            width={30}
            height={30}
            alt="whatsapp"
            className={styles.icon}
          />
        </div>
      </div>
    </footer>
  );
}
