import Contact from "@/components/custom/contact";
import Header from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export default function FeedbackPage() {
  return (
    <div className="px-2 py-2 sm:py-4 md:py-6 lg:py-8">
      <Header />
      <div className="flex flex-col justify-center items-center mt-4 sm:mt-6 md:mt-10">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center my-4">
            Drop your query on email or contact us through phone number.
          </h1>
          <Button variant="outline" className="">
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> info@ibharat.org
          </Button>
        </div>
        <Contact />
      </div>
    </div>
  );
}
