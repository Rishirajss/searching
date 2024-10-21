import Image from "next/image";
import { NewsSearchResult } from "@/utils/types";
import { truncateText } from "@/utils/searchUtils";

interface NewsGridProps {
  news: NewsSearchResult[];
}

export const NewsGrid: React.FC<NewsGridProps> = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {news.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          {item.imageUrl && (
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={200}
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
          )}
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-2">
            {truncateText(item.description, 100)}
          </p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{item.source}</span>
            <span className="text-gray-500">
              {new Date(item.publishedAt).toLocaleDateString()}
            </span>
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm mt-2 block"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};
