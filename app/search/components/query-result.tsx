"use client";
import React from "react";
import useSWR from "swr";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchWithHeaders } from "../../../utils/fetWithHeaders";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { RocketIcon } from "@radix-ui/react-icons";
import Spinner from "../spinner";
import { SubNav } from "./subnav";
import { PaginationComponent } from "./pagination";
import Image from "next/image";

const BASE_URL = "https://beta.api.admin.ibharat.org/search/v2";
const WIKIPEDIA_API_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const truncateText = (text: string, maxLength: number) => {
  if (text?.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

export const ResultPage: React.FC = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");
  const page = parseInt(search.get("page") || "1", 10); // getting page for pagination
  const router = useRouter();

  const { data: searchData, isLoading: isSearchLoading } = useSWR(
    `${BASE_URL}/${encodedSearchQuery}/${page}`,
    fetchWithHeaders,
    { revalidateOnFocus: false },
  );

  const { data: wikiData, isLoading: isWikiLoading } = useSWR(
    encodedSearchQuery ? `${WIKIPEDIA_API_URL}${encodedSearchQuery}` : null,
    fetcher,
    { revalidateOnFocus: false },
  );

  const handlePageChange = (newPage: number) => {
    router.push(`/search?q=${encodedSearchQuery}&page=${newPage}`);
  };

  if (!encodedSearchQuery) {
    router.push("/search");
  }

  if (isSearchLoading || isWikiLoading) {
    return <Spinner />;
  }

  if (!searchData.totalCount) {
    return (
      <div className="flex justify-center items-center h-52">
        <p>UH OH... no results found!.</p>
      </div>
    );
  }

  return (
    <>
      <SubNav />
      <div className="flex flex-col md:flex-row gap-0 sm:gap-2">
        <div className="max-w-screen lg:w-3/4 ">
          <p className="py-2 px-2">
            About <strong>{searchData.totalCount}</strong> result for{" "}
            <strong>{searchQuery}</strong> keyword.
          </p>
          {searchData.records.map((res: any, index: number) => (
            <div
              key={index}
              className="mb-1.5 bg-gray-300/20 dark:bg-gray-800/10 px-3 py-4 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <a
                  href={"https://" + res.domain + "." + res.tld}
                  target="_blank"
                  className="text-blue-500 text-sm sm:text-base font-medium hover:underline"
                >
                  {res.metaTags.title}
                </a>
                <span>
                  <DotsVerticalIcon />
                </span>
              </div>
              <a
                href={"https://" + res.domain + "." + res.tld}
                target="_blank"
                className="text-blue-500 text-sm sm:text-base font-medium"
              >
                {"https://" + res.domain + "." + res.tld}
              </a>

              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {truncateText(res.metaTags?.description, 120)}
              </p>
            </div>
          ))}
        </div>
        {wikiData && (
          <div className="hidden lg:block md:w-1/4 h-fit border border-1 px-4 py-3 mt-10 bg-gray-300/20 dark:bg-gray-800/10 rounded-md">
            {wikiData ? (
              <>
                {wikiData.thumbnail && wikiData.thumbnail.source && (
                  <div className="flex justify-center">
                    <Image
                      src={wikiData?.thumbnail?.source}
                      alt={wikiData?.title}
                      width="150"
                      height="150"
                      className="text-center rounded-md"
                    />
                  </div>
                )}
                <h1 className="text-xl pt-2 border-t sm:mt-4 font-semibold">
                  {wikiData?.title}
                </h1>
                <a
                  href={wikiData.content_urls?.desktop?.page}
                  className="text-blue-500 py-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {wikiData.content_urls?.desktop?.page}
                </a>

                <p>{truncateText(wikiData.extract, 150)}</p>
                {wikiData?.content_urls && wikiData.content_urls?.desktop && (
                  <a
                    href={wikiData.content_urls?.desktop?.page}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More
                  </a>
                )}
              </>
            ) : (
              <p>No Wikipedia data found.</p>
            )}
          </div>
        )}
      </div>
      <div className="py-2">
        <PaginationComponent
          totalPages={searchData.totalPages}
          currentPage={page}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
};
