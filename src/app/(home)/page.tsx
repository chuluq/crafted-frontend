import { Hero } from "@/components/home/hero";
import { LatestPost } from "@/components/home/latest-post";
import { RecentPost } from "@/components/home/recent-post";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPost />
      <LatestPost />
    </>
  );
}
