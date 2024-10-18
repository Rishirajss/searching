"use client";
import React from "react";
import useSWR from "swr";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchWithHeaders } from "../../../utils/fetWithHeaders";
import Spinner from "../spinner";
import { SubNav } from "./subnav";
import { PaginationComponent } from "./pagination";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://beta.api.admin.ibharat.org/search/v3";

interface SearchResult {
  popular_title?: string;
  title?: string;
  popular_dis?: string;
  popular_web?: string;
  protocol?: string;
  domain?: string;
  tld?: string;
  path?: string;
  meta?: {
    "og:title"?: string;
    "twitter:title"?: string;
    description?: string;
    "og:description"?: string;
    "twitter:description"?: string;
    "og:url"?: string;
    "og:site_name"?: string;
    "twitter:image"?: string;
  };
}

interface ProfileData {
  profiles_logo: string;
  profiles_title: string;
  profiles_subtitle: string;
  profiles_ownweb: string;
  profiles_dis: string;
}

interface WikiData {
  thumbnail?: {
    source: string;
  };
  title: string;
  content_urls?: {
    desktop?: {
      page: string;
    };
  };
  extract: string;
}

interface SearchData {
  totalCount: number;
  totalPages: number;
  records: SearchResult[];
  profileData: ProfileData | null;
  wikiData: WikiData | null;
}

const truncateText = (text: string | undefined, maxLength: number): string => {
  if (text && text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text || "";
};

export const ResultPage: React.FC = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");
  const page = parseInt(search.get("page") || "1", 10);
  const router = useRouter();

  const { data: searchData, isLoading } = useSWR<SearchData>(
    `${BASE_URL}/${encodedSearchQuery}/${page}`,
    fetchWithHeaders,
    { revalidateOnFocus: false },
  );

  const handlePageChange = (newPage: number) => {
    router.push(`/search?q=${encodedSearchQuery}&page=${newPage}`);
  };

  if (!encodedSearchQuery) {
    router.push("/search");
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!searchData?.totalCount && searchData?.profileData == null) {
    return (
      <div className="flex flex-col py-20 justify-center items-center h-52 rounded-lg  transform hover:scale-105">
        <p className="text-lg font-semibold mb-4">UH OH... No Results Found!</p>
        <p className="text-sm mb-4 text-center">
          It seems we&apos;re still gathering data. Your help could make a
          difference!
        </p>
        <p className="text-sm mb-4 text-center">
          Would you like to contribute by submitting your website URL?
        </p>
        <div className="flex space-x-4">
          <Link
            href="/submiturl"
            className="inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition duration-200 transform hover:scale-105"
          >
            Submit URL
          </Link>
        </div>
      </div>
    );
  }

  const { records, profileData, wikiData } = searchData!;

  const renderResult = (res: SearchResult) => {
    const title =
      res.popular_title ||
      res.title ||
      res.meta?.["og:title"] ||
      res.meta?.["twitter:title"] ||
      "Untitled";
    const description =
      res.popular_dis ||
      res.meta?.description ||
      res.meta?.["og:description"] ||
      res.meta?.["twitter:description"] ||
      "";
    const url =
      res.popular_web ||
      `${res.protocol}://${res.domain}.${res.tld}${res.path ? `/${res.path}` : ""}` ||
      res.meta?.["og:url"] ||
      "";
    const siteName = res.meta?.["og:site_name"];

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
        {/* {res.meta?.["twitter:image"] && ( */}
        {/*   <Image */}
        {/*     src={res.meta["twitter:image"]} */}
        {/*     alt={title} */}
        {/*     width={100} */}
        {/*     height={100} */}
        {/*     className="mt-2 rounded-md" */}
        {/*   /> */}
        {/* )} */}
      </div>
    );
  };

  return (
    <>
      <SubNav />
      <div className="flex flex-col md:flex-row gap-0 sm:gap-2 px-2 sm:px-6 md:px-20">
        <div className="max-w-screen lg:w-3/4 ">
          <p className="py-2 px-2">
            About <strong>{searchData.totalCount}</strong> results for{" "}
            <strong>{searchQuery}</strong> keyword.
          </p>
          {records.map((res, index) => (
            <div key={index}>{renderResult(res)}</div>
          ))}
        </div>
        <div className="hidden lg:block md:w-1/4 h-fit border border-1 px-4 py-3 mt-10 bg-gray-300/20 dark:bg-gray-800/10 rounded-md">
          {profileData ? (
            <>
              <Image
                src={profileData.profiles_logo}
                width={150}
                height={150}
                alt=""
                className="w-full rounded-md"
              />
              <h1 className="text-xl pt-2 border-t sm:mt-4 font-semibold">
                {profileData.profiles_title}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {profileData.profiles_subtitle}
              </p>
              <a
                href={profileData.profiles_ownweb}
                className="text-blue-500 py-3 text-xs block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profileData.profiles_ownweb}
              </a>

              <p className="">{truncateText(profileData.profiles_dis, 150)}</p>
            </>
          ) : wikiData ? (
            <>
              {wikiData.thumbnail && wikiData.thumbnail.source && (
                <div className="flex justify-center">
                  <Image
                    src={wikiData.thumbnail.source}
                    alt={wikiData.title}
                    width={150}
                    height={150}
                    className="text-center rounded-md"
                  />
                </div>
              )}
              <h1 className="text-xl pt-2 border-t sm:mt-4 font-semibold">
                {wikiData.title}
              </h1>
              {wikiData.content_urls?.desktop?.page && (
                <a
                  href={wikiData.content_urls.desktop.page}
                  className="text-blue-500 py-3 text-xs block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {wikiData.content_urls.desktop.page}
                </a>
              )}
              <p>{truncateText(wikiData.extract, 150)}</p>
              {wikiData.content_urls?.desktop?.page && (
                <a
                  href={wikiData.content_urls.desktop.page}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More
                </a>
              )}
            </>
          ) : (
            <p>No additional information available.</p>
          )}
        </div>
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

export default ResultPage;
