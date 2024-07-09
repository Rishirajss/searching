import { AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you have a button component

const Disclaimer = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-yellow-500 mr-4" />
        <h1 className="text-4xl font-bold">Disclaimer</h1>
      </div>
      <div className="bg-white p-6 rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold flex items-center">
            Disclaimer For Swadeshi Results
          </h2>
        </div>
        <div className="mb-4 text-lg leading-relaxed">
          <p className="mb-2 flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2 mt-1" />
            The website does not guarantee that a brand is completely Indian or
            that products are made in India.
          </p>
          <p className="mb-2 flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2 mt-1" />
            Electronics brands mentioned on the website may not be manufactured
            by Indian companies in India.
          </p>
          <p className="mb-2 flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2 mt-1" />
            We do not guarantee or claim that any product mentioned on the
            website is 100% Indian or made in India.
          </p>
          <p className="mb-2 flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2 mt-1" />
            We advise you to use your discretion before buying any product
            listed on the website.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
            Acknowledge
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
