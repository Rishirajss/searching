import { UserInput } from "@/components/custom/input";
import { DropdownNavigationMenu } from "@/components/custom/dropdown-menu";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col gap-28 p-2 sm:p-6 md:p-24">
      <nav className="flex justify-end ">
        <DropdownNavigationMenu/>
      </nav>
      <section>
        <UserInput/>
      </section>
    </main>
  );
}
