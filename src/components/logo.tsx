import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.ComponentProps<"h1">) => {
  return (
    <h1
      className={cn("font-serif text-[32px] font-bold text-[#111]", className)}
      {...props}
    >
      Craft<span className="text-accents">ed</span>
    </h1>
  );
};
