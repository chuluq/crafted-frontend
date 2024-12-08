import Link from "next/link";
import { Search } from "lucide-react";

import { Logo } from "./logo";

export const MainNavigation = () => {
  return (
    <nav className="container mx-auto flex max-w-screen-xl items-center justify-between bg-white py-4">
      <Logo />
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-6">
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280]"
          >
            Home
          </Link>
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280]"
          >
            Travel
          </Link>
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280]"
          >
            Food
          </Link>
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280]"
          >
            Lifestyle
          </Link>
          <Link
            href={"/#home"}
            className="text-base font-normal capitalize text-[#6D7280]"
          >
            Fashion
          </Link>
        </div>
        <div className="bg-off-white focus-visible:ring-ring flex items-center gap-x-[10px] px-4 py-3">
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
