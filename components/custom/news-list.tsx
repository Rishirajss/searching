"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
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
    const reference = "ibharat.org"; // Reference for tracking
    const shareUrl = `${item.loc}?ref=${reference}`;

    if (navigator.share) {
      navigator
        .share({
          title: item.title,
          text: `Check out this article from ${item.publication_name}: ${item.title}`,
          url: shareUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <>
      {/* OpenGraph Metadata for Dynamic SEO */}
      {newsItems.map((item) => (
        <Head key={item._id}>
          <title>{item.title} | iBharat.org</title>
          <meta name="description" content={item.title} />
          <meta property="og:title" content={item.title} />
          <meta
            property="og:description"
            content={`Discover more about "${item.title}" on iBharat.org.`}
          />
          <meta
            property="og:image"
            content="https://ibharat.org/opengraph.jpg"
          />
          <meta property="og:url" content={`${item.loc}?ref=ibharat`} />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="iBharat.org" />
          {/* Additional Tags for Twitter */}
          <meta name="twitter:title" content={item.title} />
          <meta
            name="twitter:description"
            content={`Read this article: ${item.title}`}
          />
          <meta
            name="twitter:image"
            content="https://ibharat.org/opengraph.jpg"
          />
        </Head>
      ))}

      {/* News Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 px-2">
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
                <CardTitle className="text-lg font-semibold my-2 line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardContent>
            </a>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Source: {item.publication_name}
              </span>
              <button
                onClick={() => handleShare(item)}
                className="text-sm text-blue-500 rounded-full border p-1.5 hover:underline"
              >
                <Share2Icon size={16} />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
