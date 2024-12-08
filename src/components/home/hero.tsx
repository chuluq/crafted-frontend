import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Category } from "@/components/category";
import { Info } from "@/components/info";

export const Hero = () => {
  return (
    <div className="relative grid min-h-[calc(100vh_-_80px)] grid-cols-2 items-center bg-off-white">
      <div className="z-10 ml-[130px] min-w-[836px]">
        <div className="z-10 flex max-w-[648px] flex-col bg-white px-10 py-[60px] shadow">
          <Category category="Interior" />
          {/* title */}
          <h1 className="font-serif text-5xl font-bold leading-tight">
            How to Get Started With Interior Design
          </h1>
          <Info date="March 25, 2021" readingTime={4} className="mt-3" />
          {/* description */}
          <p className="mt-[10px] text-base font-normal leading-6 text-[#6D7280]">
            Nulla et commodo turpis. Etiam hendrerit ornare pharetra. Cras
            eleifend purus vitae lorem venenatis bibendum. Sed commodo mi quis
            augue finibus, ut feugiat erat aliquam.
          </p>
          {/* read more */}
          <Button className="mt-[26px] h-12 w-fit gap-[10px] rounded-none bg-accents px-7 py-3 text-base leading-6 hover:bg-accents/90">
            Read More
          </Button>
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
        alt="hero"
        width={1084}
        height={1000}
        className="absolute right-0 top-0"
      />
    </div>
  );
};
