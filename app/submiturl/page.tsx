import SubmitURL from "@/components/custom/submit-url";
import Header from "@/components/custom/header";
export default function SubmitURLPage() {
  return (
    <div className="px-2 py-2 sm:py-4 md:py-6 lg:py-8">
      <div className="px-0 sm:px-8 md:px-10 lg:px-28">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center mt-4 sm:mt-6 md:mt-10">
        <SubmitURL />
      </div>
    </div>
  );
}
