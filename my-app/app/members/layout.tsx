// import styles from "./page.module.css";
import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (	// 追加
      <>
        <Hero title="Members" sub="メンバー" />
        <Sheet>
          {children}
        </Sheet>
      </>
    );
  }
