import { PostInfo } from "@/components/post-info";
import { SectionTitle } from "@/components/section-title";

export const RecentPost = () => {
  return (
    <div className="container mx-auto max-w-screen-xl bg-white pb-[100px] pt-[180px]">
      <div className="flex flex-col space-y-12">
        <SectionTitle title="Recent Post" />
        <div className="flex gap-x-6">
          <PostInfo
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <PostInfo
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <PostInfo
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
        </div>
      </div>
    </div>
  );
};
