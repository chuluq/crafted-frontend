import Link from "next/link";
import { Search } from "lucide-react";

import { Logo } from "@/components/logo";

export const MainNavigation = () => {
  return (
    <nav className="container mx-auto flex max-w-screen-xl items-center justify-between bg-white py-4">
      <Logo />
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-6">
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280] hover:text-accents"
          >
            Home
          </Link>
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280] hover:text-accents"
          >
            Travel
          </Link>
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280] hover:text-accents"
          >
            Food
          </Link>
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280] hover:text-accents"
          >
            Lifestyle
          </Link>
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280] hover:text-accents"
          >
            Fashion
          </Link>
        </div>
        <div className="flex items-center gap-x-[10px] bg-off-white px-4 py-3 focus-visible:ring-ring">
          <Search color="#272343" />
          <input
            placeholder="Search here..."
            className="border-none bg-transparent p-0 text-base text-[#272343] shadow-none placeholder:text-base placeholder:text-[#6D7280] focus-visible:ring-0"
          />
        </div>
      </div>
    </nav>
  );
};
