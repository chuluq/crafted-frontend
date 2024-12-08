import Image from "next/image";
import { TPostInfo } from "@/types";

import { cn } from "@/lib/utils";
import { PostInfo } from "@/components/post-info";
import { SectionTitle } from "@/components/section-title";

export const LatestPost = () => {
  return (
    <div className="bg-off-white">
      <div className="container mx-auto flex max-w-screen-xl flex-col space-y-12 py-[100px]">
        <SectionTitle title="Latest Post" />
        <div className="grid grid-cols-3 gap-x-6 gap-y-[30px]">
          <PostCard
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <PostCard
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <PostCard
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <PostCard
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <PostCard
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <PostCard
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

export const PostCard = ({
  category,
  title,
  date,
  readingTime,
  link,
  className,
  ...props
}: React.ComponentProps<"div"> & TPostInfo) => {
  return (
    <div className={cn("max-w-[424px]", className)} {...props}>
      <Image
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
        alt="hero"
        width={424}
        height={332}
      />
      <PostInfo
        category="travel"
        title="Top 10 beautiful Place in Bangladesh"
        date="March 25, 2021"
        readingTime={4}
        link="/#"
        className="-mb-8 max-w-[404px] -translate-y-8 bg-white"
      />
    </div>
  );
};
