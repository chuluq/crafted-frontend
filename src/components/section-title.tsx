import { Separator } from "@/components/ui/separator";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-fit">
      <h1 className="font-serif text-[42px] font-bold capitalize text-[#272343]">
        {title}
      </h1>
      <Separator className="h-1 w-1/2 bg-accents" />
    </div>
  );
};
