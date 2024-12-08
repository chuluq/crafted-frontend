export const Category = ({ category }: { category: string }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="h-[2px] w-6 bg-accents" />
      <p className="text-base font-normal capitalize leading-6 text-[#272343]">
        {category}
      </p>
    </div>
  );
};
