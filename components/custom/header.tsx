import Image from "next/image";
import Link from "next/link";
import { UserInput } from "./input";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex flex-col gap-2 py-0 md:py-6 px-2 sm:px-6 md:px-20">
      <section className="flex gap-5 justify-between items-center py-3 sm:pt-2">
        <div className="flex items-center justify-center sm:justify-between gap-10 w-full sm:w-3/4">
          <Link href="/">
            <div className="flex justify-center items-center">
              <Image
                src="/ibharat.jpg"
                width={120}
                height={40}
                alt="logo"
                className="w-[140px] sm:w-[150px] h-auto"
              />
            </div>
          </Link>
          <div className="hidden sm:block max-w-[800px] w-full">
            <UserInput btnText="Search" />
          </div>
        </div>
        <Button className="hidden sm:flex bg-blue-500 hover:bg-blue-600">
          <Link href="/submiturl">
            <span className="font-bold">Submit URL</span>
          </Link>
        </Button>
      </section>
      <div className="sm:hidden">
        <UserInput btnText="Search" />
      </div>
    </div>
  );
}
