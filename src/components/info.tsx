import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

export const Info = ({
  date,
  readingTime,
  className,
  ...props
}: {
  date: string;
  readingTime: number; // in minutes
} & React.ComponentProps<"div">) => {
  return (
    <div className={cn("flex items-center gap-x-1", className)} {...props}>
      <p className="text-base font-normal leading-6 text-[#6D7280]">{date}</p>
      <Dot color="#6D7280" />
      <p className="text-base font-normal leading-6 text-[#6D7280]">
        {readingTime} min read
      </p>
    </div>
  );
};
