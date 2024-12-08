import Link from "next/link";

import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-[#272343] pt-[100px]">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col">
          <div className="flex items-start justify-between">
            <div className="max-w-[336px] space-y-4">
              <Logo className="text-white" />
              <p className="text-base leading-6 text-white/60">
                Phasellus porttitor sapien a purus venenatis condimentum. Nunc
                lectus ipsum, laoreet ut efficitur.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="font-serif text-2xl text-white">Category</h4>
              <div className="flex flex-col space-y-[10px]">
                <Link href={"/#"} className="text-white/60 hover:text-white">
                  Travel
                </Link>
                <Link href={"/#"} className="text-white/60 hover:text-white">
                  Food
                </Link>
                <Link href={"/#"} className="text-white/60 hover:text-white">
                  Lifestyle
                </Link>
                <Link href={"/#"} className="text-white/60 hover:text-white">
                  Fashion
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-serif text-2xl text-white">Follow us</h4>
              <div className="flex flex-col space-y-[10px]">
                <Link href={"/#"} className="text-white/60 hover:text-white">
                  Facebook
                </Link>
                <Link href={"/#"} className="text-white/60 hover:text-white">
                  Twitter
                </Link>
                <Link href={"/#"} className="text-white/60 hover:text-white">
                  Instagram
                </Link>
                <Link href={"/#"} className="text-white/60 hover:text-white">
                  YouTube
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-serif text-2xl text-white">Newsletter</h4>
              <div className="flex items-center gap-x-2">
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="h-12 rounded-none border-none bg-white bg-opacity-5 px-5 py-4 text-base text-white shadow-none placeholder:text-base placeholder:text-white/60 focus-visible:ring-0"
                />
                <Button className="h-12 w-fit gap-[10px] rounded-none bg-accents px-5 py-4 text-base leading-6 hover:bg-accents/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <Separator className="mt-16 bg-white/20 drop-shadow" />
          <div className="my-5 flex items-center justify-between">
            <p className="text-white/60">&copy; 2024 - Crafted</p>
            <p className="text-white/60">Developed by Chuluq</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
