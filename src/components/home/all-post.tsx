import Image from "next/image";
import Link from "next/link";
import { TPostInfo } from "@/types";

import { cn } from "@/lib/utils";
import { PostInfo } from "@/components/post-info";
import { SectionTitle } from "@/components/section-title";

export const AllPost = () => {
  return (
    <div className="bg-off-white">
      <div className="container mx-auto flex max-w-screen-xl flex-col space-y-12 py-[100px]">
        <SectionTitle title="All Post" />
        <div className="flex gap-x-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-[30px]">
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
          <div className="flex flex-1 flex-col gap-y-6">
            <div className="flex flex-col space-y-4">
              <h4 className="font-serif text-xl font-bold text-[#272343]">
                Featured Category
              </h4>
              <CategoryCard
                title="Travel"
                bgImage="https://images.unsplash.com/photo-1496950866446-3253e1470e8e"
              />
              <CategoryCard
                title="Food"
                bgImage="https://images.unsplash.com/photo-1482049016688-2d3e1b311543"
              />
              <CategoryCard
                title="Lifestyle"
                bgImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="font-serif text-xl font-bold text-[#272343]">
                All Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={"/#"}
                  className="bg-[#272343] bg-opacity-5 px-4 py-2 capitalize"
                >
                  Journey
                </Link>
                <Link
                  href={"/#"}
                  className="bg-[#272343] bg-opacity-5 px-4 py-2 capitalize"
                >
                  Life
                </Link>
                <Link
                  href={"/#"}
                  className="bg-[#272343] bg-opacity-5 px-4 py-2 capitalize"
                >
                  Food
                </Link>
                <Link
                  href={"/#"}
                  className="bg-[#272343] bg-opacity-5 px-4 py-2 capitalize"
                >
                  Fashion
                </Link>
                <Link
                  href={"/#"}
                  className="bg-[#272343] bg-opacity-5 px-4 py-2 capitalize"
                >
                  UI
                </Link>
                <Link
                  href={"/#"}
                  className="bg-[#272343] bg-opacity-5 px-4 py-2 capitalize"
                >
                  Interior
                </Link>
                <Link
                  href={"/#"}
                  className="bg-[#272343] bg-opacity-5 px-4 py-2 capitalize"
                >
                  Minimalistic
                </Link>
                <Link
                  href={"/#"}
                  className="bg-[#272343] bg-opacity-5 px-4 py-2 capitalize"
                >
                  Design
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({
  title,
  bgImage,
}: {
  title: string;
  bgImage: string;
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-[75px] max-w-[424px] bg-cover bg-center p-5"
    >
      <div className="w-fit bg-white px-[18px] py-2">
        <p className="text-sm capitalize text-[#272343]">{title}</p>
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
