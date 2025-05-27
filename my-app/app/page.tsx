import styles from "./page.module.css";
import Image from "next/image";

import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from '@/app/_components/ButtonLink';
//komennto

// import { News } from "@/app/_libs/microcms";

// type News = {
//   id: string;
//   title: string;
//   category: {
//     name: string;
//   };
//   publishedAt: string;
//   createdAt: string;
// };
// const data: {
//   contents: News[];
// } = {
//   contents: [
//     {
//       id: "1",
//       title: "渋谷にオフィスを移転しました",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2023/05/19",
//       createdAt: "2023/05/19",
//     },
//     {
//       id: "2",
//       title: "当社CEOが業界リーダーTOP30に選出されました",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2023/05/19",
//       createdAt: "2023/05/19",
//     },
//     {
//       id: "3",
//       title: "テストの記事です",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2023/04/19",
//       createdAt: "2023/04/19",
//     },
//   ],
// };

export default async function Home() {
  // const sliceData = data.contents.slice(0, 2);
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  })

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルカンパニーです。
          </p>
        </div>
        {/* <img className={styles.bgimg} src="/img-mv.jpg" alt="" /> */}
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        {/* { sliceData }  →  { data.contents } 	// 変更修正 */}

        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
