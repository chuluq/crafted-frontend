import Link from "next/link";
import { TPostInfo } from "@/types";
import { MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Category } from "./category";
import { Info } from "./info";

export const PostInfo = ({
  category,
  title,
  date,
  readingTime,
  link,
  className,
  ...props
}: React.ComponentProps<"div"> & TPostInfo) => {
  return (
    <div
      className={cn("flex max-w-[424px] flex-col bg-off-white p-6", className)}
      {...props}
    >
      <Category category={category} />
      <h2 className="font-serif text-[28px] font-bold text-[#272343]">
        {title}
      </h2>
      <Info date={date} readingTime={readingTime} className="mt-[10px]" />
      <Link
        href={link}
        className="mt-5 flex w-fit items-center gap-x-2 text-base font-medium leading-6 text-[#272343] hover:text-accents"
      >
        Read Article
        <MoveRight size={24} />
      </Link>
    </div>
  );
};
