import Feedback from "@/components/custom/feedback";
import Header from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export default function FeedbackPage() {
  return (
    <div className="px-2 py-2 sm:py-4 md:py-6 lg:py-8">
      <div className="px-0 sm:px-8 md:px-10 lg:px-28">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center mt-4 sm:mt-6 md:mt-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl mb-1">
            Please give us you feeback to make iBharat much better.
          </h1>
          <Button variant="outline" className="">
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> info@ibharat.org
          </Button>
        </div>
        <Feedback />
      </div>
    </div>
  );
}
