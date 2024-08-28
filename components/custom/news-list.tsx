"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Share2Icon } from "lucide-react";

interface NewsItem {
  _id: string;
  title: string;
  publication_name: string;
  image_url: string;
  loc: string;
}

interface NewsGridProps {
  newsItems: NewsItem[];
}

export default function NewsGrid({ newsItems }: NewsGridProps) {
  const handleShare = (item: NewsItem) => {
    if (navigator.share) {
      navigator
        .share({
          title: item.title,
          text: `Check out this article from ${item.publication_name}: ${item.title}`,
          url: `https://yourwebsite.com/article/${item._id}?ref=yourReferenceId`,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {newsItems.map((item) => (
        <Card key={item._id} className="flex flex-col h-full">
          <a href={item.loc} target="_blank" rel="noopener noreferrer">
            <CardHeader className="p-0">
              <Image
                src={item.image_url}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">
                {item.title}
              </CardTitle>
            </CardContent>
          </a>
          <CardFooter className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Source: {item.publication_name}
            </span>
            <div className="flex gap-2 items-center">
              <a
                href={item.loc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 underline hover:underline"
              >
                Read more
              </a>

              <button
                onClick={() => handleShare(item)}
                className="text-sm text-blue-500 border p-1 rounded-full hover:underline"
              >
                <Share2Icon size={16} />
              </button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
