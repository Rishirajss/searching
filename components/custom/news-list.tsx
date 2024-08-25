import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
            <a
              href={item.loc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              Read more
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
