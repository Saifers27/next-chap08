

import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export const revalidate = 0;

export default async function Page() {
  // const { contents: news } = await getNewsList();
  const { contents: news, totalCount} = await getNewsList({	//追加
    limit: NEWS_LIST_LIMIT,
  });

  // return < NewsList news={news} />;
    return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );

}
