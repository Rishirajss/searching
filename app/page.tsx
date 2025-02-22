import { UserInput } from "@/components/custom/input";
import Image from "next/image";
import GetNews from "./get-news";
import ScrollDownButton from "@/components/custom/scrolldown";
import Additional from "@/components/custom/additional";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen max-w-screen flex-col justify-start md:justify-center gap-10 p-2 sm:p-6 md:p-24 md:py-12 mt-32 sm:mt-auto">
        <section className="flex justify-center">
          <Image
            src="/ibharat.png"
            alt="logo"
            height={100}
            width={320}
            className="w-[160px] md:w-[320px]"
          ></Image>
        </section>
        <section>
          <UserInput btnText="Go" />
        </section>
        <p className="text-center text-xl">भारत का अपना स्वदेशी सर्च इंजन™</p>
        <div>
          <ScrollDownButton />
        </div>
      </main>

      <section className="gap-10 p-2 sm:p-6 md:p-24 md:py-12 mt-32 sm:mt-auto">
        <GetNews />
      </section>
      <Additional />
    </>
  );
}
