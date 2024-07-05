import Contact from "@/components/custom/contact";
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
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">
            India&apos;s next generations swadeshi search engine!
          </h1>
          <p className="text-base py-1">
            Drop your query on email or contact us through phone number.
          </p>
          <Button variant="secondary" className="">
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> info@ibharat.org
          </Button>
        </div>
        <Contact />
      </div>
    </div>
  );
}
