import Link from "next/link";
import styles from "./Navbar.module.css";
import Button from "../button/Button";
import { Lobster } from "next/font/google";
const logoFont = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={`${styles.logo} ${logoFont.className}`}>
        HEXASHOP
      </Link>
      <div className={styles.links}>
        <Link href={"/about"} className={styles.link}>
          About
        </Link>
        <Link href={"/blog"} className={styles.link}>
          Blog
        </Link>
        <Link href={"/portfolio"} className={styles.link}>
          Portfolio
        </Link>
        <Link href={"/contact"} className={styles.link}>
          Contact
        </Link>
        <Button />
      </div>
    </div>
  );
}
