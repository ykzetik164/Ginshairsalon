import type { Metadata } from "next";
import { JoinForm } from "@/components/JoinForm";
import { salon } from "@/data/site";

export const metadata: Metadata = {
  title: "加入我們｜應徵表單",
  description: "GINS 金倪斯髮廊徵才：設計師、實習師，歡迎填寫應徵表單。",
  alternates: {
    canonical: "/join"
  }
};

export default function JoinPage() {
  return <JoinForm instagramUrl={salon.instagramUrl} siteUrl="/" />;
}
