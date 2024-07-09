import Header from "@/components/custom/header";
import Disclaimer from "@/components/custom/disclaimer";

export default function About() {
  return (
    <div className="px-2 py-2 sm:py-4 md:py-6 lg:py-8">
      <div className="px-0">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center mt-4 md:mx-14">
        <Disclaimer />
      </div>
    </div>
  );
}
