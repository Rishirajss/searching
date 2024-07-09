import Image from "next/image";
import Link from "next/link";
import { DollarSign, Star, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: 1,
    title: "Top Ads",
    image: "/img/top-ad.png",
    content: [
      "10 Keyword monthly 500 INR",
      "20 Keyword monthly 750 INR",
      "30 Keyword monthly 1000 INR",
      "Fix top ad monthly 25000 INR only",
    ],
    price: "Starting at 500 INR/month",
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
  },
  {
    id: 2,
    title: "Side Ads",
    image: "/img/side-ad.png",
    content: [
      "10 Keyword monthly 500 INR",
      "20 Keyword monthly 750 INR",
      "30 Keyword monthly 1000 INR",
      "Fix side ad monthly 25000 INR only",
    ],
    price: "Starting at 500 INR/month",
    icon: <Star className="w-6 h-6 text-indigo-600" />,
  },
  {
    id: 3,
    title: "Banner Ads",
    image: "/img/banner-ad.png",
    content: [
      "10 Keyword monthly 1500 INR",
      "20 Keyword monthly 1750 INR",
      "30 Keyword monthly 2000 INR",
      "Fix banner ad monthly 45000 INR only",
    ],
    price: "Starting at 1500 INR/month",
    icon: <DollarSign className="w-6 h-6 text-indigo-600" />,
  },
];

const AdvertisementPlanCards = () => {
  return (
    <div className="container mx-auto p-2 md:p-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        iBharat Search Engine Ads
      </h2>
      <p className="text-center mb-12 text-gray-600">
        Grow your business with iBharat.org ads. Choose a plan that suits your
        needs and budget.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className="flex flex-col border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            <CardHeader className="p-0">
              <Image
                src={plan.image}
                alt={`${plan.title} Plan`}
                width={300}
                height={200}
                layout="responsive"
                className="rounded-t-lg"
              />
              <div className="flex items-center mt-4 px-4">
                {plan.icon}
                <CardTitle className="text-2xl font-bold ml-2 text-gray-800">
                  {plan.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow px-4 py-2">
              <ul className="list-disc list-inside text-gray-700">
                {plan.content.map((line, index) => (
                  <li key={index} className="mb-2">
                    {line}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-center p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-xl font-semibold mb-4">{plan.price}</p>
              <Button className="w-full text-white transition-colors duration-300">
                <Link href="/contact">Book Space</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdvertisementPlanCards;
