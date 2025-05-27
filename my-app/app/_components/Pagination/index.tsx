
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link"; 			// import 文の末尾に追加
import styles from "./index.module.css";


type Props = {
    totalCount: number;
    current?: number; // 追 加
    basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
    const pages = Array.from(
        { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },	// 追 加
        (_, i) => i + 1
    );

//   return <nav></nav>;
  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            {/* <Link href={`/news/p/${p}`} className={styles.item}>
              {p}
            </Link> */}
            {current !== p ? (
            // <Link href={`/news/p/${p}`} className={styles.item}>
            <Link href={`${basePath}/p/${p}`} className={styles.item}> 
                {p}
            </Link>
            ) : (
            <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );

}
