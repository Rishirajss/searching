import Image from "next/image";
import { ImageSearchResult } from "@/utils/types";
import { truncateText } from "@/utils/searchUtils";

interface ImageGridProps {
  images: ImageSearchResult[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <a href={image.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={image.thumbnail}
              alt={image.title}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48 transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {truncateText(image.title, 50)}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
