import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PostCard } from "@/components/home/featured-post";

export default function SearchPage() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-[30px] bg-off-white pb-[100px] pt-[150px]">
        <h1 className="font-serif text-[40px] font-bold text-[#272343]">
          ‘Travel’ here’s what we’ve got
        </h1>
        <div className="flex w-full max-w-4xl items-center gap-x-2">
          <div className="flex h-[66px] flex-1 items-center gap-x-[10px] bg-white px-[30px] py-[22px] focus-visible:ring-ring">
            <Search color="#272343" />
            <Input
              placeholder="Search here..."
              className="border-none bg-transparent p-0 text-base text-[#272343] shadow-none placeholder:text-base placeholder:text-[#6D7280] focus-visible:ring-0"
            />
          </div>
          <Button className="h-[66px] w-fit gap-[10px] rounded-none bg-accents px-10 py-6 text-base leading-6 hover:bg-accents/90">
            Search
          </Button>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-[30px] py-[100px]">
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
    </>
  );
}
