import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <Menu />
      {/* <nav className={styles.nav}>
        <ul className={styles.items}>
        <li>
          <Link href="/news">ニュース</Link>
        </li>
        <li>
          <Link href="/members">メンバー</Link>
        </li>
        <li>
          <Link href="/contact">お問い合わせ</Link>
        </li>
      </ul>
      </nav> */}
    </header>
  );
}
