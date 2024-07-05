import { UserInput } from "@/components/custom/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen flex-col justify-center gap-10 p-2 sm:p-6 md:p-24 md:py-12">
      <section className="flex justify-center">
        <Image src="/ibharat.jpg" alt="logo" height="200" width="350"></Image>
      </section>
      <section>
        <UserInput />
      </section>
      <p className="text-center text-xl">भारत का अपना स्वदेशी सर्च इंजन™</p>
    </main>
  );
}
