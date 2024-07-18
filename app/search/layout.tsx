import Header from "@/components/custom/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 py-0 md:py-6">
      <div className="w-full">
        <Header />
      </div>
      <section className="mt-2 sm:mt-6">{children}</section>
    </div>
  );
}
