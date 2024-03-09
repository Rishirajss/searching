import { UserInput } from "@/components/custom/input";
import { DropdownNavigationMenu } from "@/components/custom/dropdown-menu";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col gap-10 p-2 sm:p-6 md:p-24">
      <nav className="flex justify-end ">
        <DropdownNavigationMenu/>
      </nav>
      <section className="flex justify-center mt-10">
      <h1 className="text-4xl sm:text-6xl font-bold">
        <span className="bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">ibharat</span>
      </h1>
      </section>
      <section>
        <UserInput/>
      </section>
    </main>
  );
}
