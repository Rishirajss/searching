import Image from "next/image";
import Link from "next/link";
import { UserInput } from "./input";
import { Button } from "@/components/ui/button";
import { DropdownNavigationMenu } from "./dropdown-menu";

export default function Header() {
  return (
    <div className="flex flex-col gap-2 py-0 md:py-6 px-2 sm:px-6 md:px-20">
      <section className="flex gap-5 justify-between items-center py-3 sm:pt-2">
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image src="/ibharat.jpg" width={120} height={40} alt="logo" />
          </div>
        </Link>
        <div className="hidden sm:block max-w-[800px] w-full">
          <UserInput />
        </div>
        <Button className="hidden sm:flex">
          <Link href="/submiturl">
            <span className="font-bold">Submit URL</span>
          </Link>
        </Button>
        <div className="flex sm:hidden">
          <DropdownNavigationMenu />
        </div>
      </section>
      <div className="sm:hidden">
        <UserInput />
      </div>
    </div>
  );
}
