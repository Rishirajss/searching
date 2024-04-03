import { UserInput } from "@/app/input";
import { DropdownNavigationMenu } from "@/components/custom/dropdown-menu";
import AuthButton from "@/components/custom/auth-button";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen flex-col gap-10 p-2 sm:p-6 md:p-24 md:py-12">
      <nav className="flex md:justify-end">
        <div className="flex flex-row-reverse sm:flex-row justify-between sm:justify-start w-full sm:w-auto gap-3">
          <AuthButton/>
          <DropdownNavigationMenu/>
        </div>
      </nav>
      <section className="flex justify-center mt-10">
      <h1 className="text-4xl sm:text-7xl font-bold">
        <span className="bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">iBharat</span>
      </h1>
      </section>
      <section>
        <UserInput/>
      </section>
      <p className="text-center text-xl">भारत का अपना स्वदेशी सर्च इंजन™</p>
    </main>
  );
}
