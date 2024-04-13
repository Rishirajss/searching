import { UserInput } from "@/app/input";
import Link from "next/link";
import { DropdownNavigationMenu } from "@/components/custom/dropdown-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 py-0 md:py-6 px-2 sm:px-6 md:px-20">
      <section className="flex gap-5 justify-between items-center py-3 sm:pt-2">
        <Link href="/">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent ml-1">
              iBharat
            </h1>
          </div>
        </Link>
        <div className="hidden sm:block max-w-[800px] w-full">
          <UserInput />
        </div>
        <DropdownNavigationMenu />
      </section>
      <div className="sm:hidden">
        <UserInput />
      </div>
      <section className="mt-2 sm:mt-6">{children}</section>
    </div>
  );
}

