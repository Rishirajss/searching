import AdvertisePlanCards from "@/components/custom/advertisement";
import Header from "@/components/custom/header";

export default function FeedbackPage() {
  return (
    <div className="px-2 py-2 sm:py-4 md:py-6 lg:py-8">
      <div className="px-0">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center mt-4 sm:mt-6 md:mx-14">
        <div className="flex flex-col gap-2 justify-center items-center"></div>
        <AdvertisePlanCards />
      </div>
    </div>
  );
}
