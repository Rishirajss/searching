import { SearchResult } from "@/utils/types";
import { truncateText } from "@/utils/searchUtils";

interface ResultCardProps {
  result: SearchResult;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const title =
    result.popular_title ||
    result.title ||
    result.meta?.["og:title"] ||
    result.meta?.["twitter:title"] ||
    "Untitled";

  const description =
    result.popular_dis ||
    result.meta?.description ||
    result.meta?.["og:description"] ||
    result.meta?.["twitter:description"] ||
    "";

  const url =
    result.popular_web ||
    `${result.protocol}://${result.domain}.${result.tld}${result.path ? `/${result.path}` : ""}` ||
    result.meta?.["og:url"] ||
    "";

  const siteName = result.meta?.["og:site_name"];

  return (
    <div className="mb-1 px-3 py-1 rounded-lg">
      <div className="flex items-center gap-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-base sm:text-xl font-medium hover:underline"
        >
          {truncateText(title, 100)}
        </a>
      </div>
      <div className="flex items-center text-sm text-green-600 dark:text-green-400">
        {siteName && <span className="mr-2">{siteName} |</span>}
        <span>{url}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1">
        {truncateText(description, 150)}
      </p>
    </div>
  );
};
