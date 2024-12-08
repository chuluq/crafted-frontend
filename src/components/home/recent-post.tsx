import Link from "next/link";
import { MoveRight } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Category } from "@/components/category";
import { Info } from "@/components/info";

export const RecentPost = () => {
  return (
    <div className="container mx-auto max-w-screen-xl bg-white pb-[100px] pt-[180px]">
      <div className="flex flex-col space-y-12">
        <div className="w-fit">
          <h1 className="font-serif text-[42px] font-bold capitalize text-[#272343]">
            Recent Post
          </h1>
          <Separator className="h-1 w-1/2 bg-accents" />
        </div>
        <div className="flex gap-x-6">
          <RecentCard
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <RecentCard
            category="travel"
            title="Top 10 beautiful Place in Bangladesh"
            date="March 25, 2021"
            readingTime={4}
            link="/#"
          />
          <RecentCard
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

type TRecent = {
  category: string;
  title: string;
  date: string;
  readingTime: number;
  link: string;
};

const RecentCard = ({ category, title, date, readingTime, link }: TRecent) => {
  return (
    <div className="flex w-[424px] flex-col bg-off-white p-6">
      <Category category={category} />
      <h2 className="font-serif text-[28px] font-bold text-[#272343]">
        {title}
      </h2>
      <Info date={date} readingTime={readingTime} className="mt-[10px]" />
      <Link
        href={link}
        className="mt-5 flex items-center gap-x-2 text-base font-medium leading-6 text-[#272343] hover:text-accents"
      >
        Read Article
        <MoveRight size={24} />
      </Link>
    </div>
  );
};
