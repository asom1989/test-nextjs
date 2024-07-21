import Link from "next/link";
import styles from "./Navbar.module.css";
import Button from "../button/Button";
import { Lobster } from "next/font/google";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
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
        <DarkModeToggle />
        <Link href={"/about"} className={styles.link}>
          About
        </Link>
        <Link href={"/products"} className={styles.link}>
          Products
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
