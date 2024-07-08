import Image from "next/image";
import Link from "next/link";
import { UserInput } from "./input";

export default function Header() {
  return (
    <div>
      <section className="flex gap-5 justify-between items-center py-3 sm:pt-2">
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image
              src="/ibharat.jpg"
              alt="iBharat"
              width={120}
              height={120}
              className="rounded-md"
            />
          </div>
        </Link>
        <div className="hidden sm:block max-w-[800px] w-full">
          <UserInput />
        </div>
      </section>
      <div className="sm:hidden">
        <UserInput />
      </div>
    </div>
  );
}

