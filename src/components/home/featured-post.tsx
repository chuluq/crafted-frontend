import Image from "next/image";
import { TPostInfo } from "@/types";

import { cn } from "@/lib/utils";
import { PostInfo } from "@/components/post-info";
import { SectionTitle } from "@/components/section-title";

export const FeaturedPost = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex max-w-screen-xl flex-col space-y-12 py-[100px]">
        <SectionTitle title="Featured Post" />
        <div className="grid grid-cols-2 gap-x-6">
          <PostCard
            category="travel"
            title="How to Get Started with UI/UX in Figma"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <PostCard
            category="travel"
            title="How to Get Started with UI/UX in Figma"
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
    <div className={cn("max-w-[648px]", className)} {...props}>
      <Image
        src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e"
        alt="hero"
        width={648}
        height={508}
      />
      <PostInfo
        category={category}
        title={title}
        date={date}
        readingTime={readingTime}
        link={link}
        className="-mb-14 max-w-[560px] -translate-y-14 bg-[#f7f7f7]"
      />
    </div>
  );
};
