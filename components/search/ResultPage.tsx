"use client";
import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { SubNav } from "./SubNav";
import { ResultCard } from "./ResultCard";
import { ImageGrid } from "./ImageGrid";
import { NewsGrid } from "./NewsGrid";
import { SidePanel } from "./SidePanel";
import { PaginationComponent } from "./Pagination";
import Spinner from "./Spinner";
import { fetchSearchResults } from "@/utils/api";
import type { TabType } from "@/utils/types";
import Link from "next/link";

export const ResultPage: React.FC = () => {
  const router = useRouter();
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const page = parseInt(search.get("page") || "1", 10);
  const activeTab = (search.get("tab") || "all") as TabType;

  const { data: searchData, isLoading } = useSWR(
    searchQuery ? [searchQuery, page, activeTab] : null,
    ([query, page, tab]) => fetchSearchResults(query, page, tab),
    { revalidateOnFocus: false },
  );

  console.log(searchData);

  const handlePageChange = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(search);
      params.set("page", newPage.toString());
      router.push(`/search?${params.toString()}`);
    },
    [router, search],
  );

  if (!searchQuery) {
    router.push("/search");
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!searchData?.totalCount && searchData?.profileData == null) {
    return (
      <>
        <SubNav />
        <div className="flex flex-col py-20 justify-center items-center h-52 rounded-lg">
          <p className="text-lg font-semibold mb-4">No Results Found</p>
          <p className="text-sm mb-4 text-center">
            Would you like to contribute by submitting your website URL?
          </p>
          <Link
            href="/submiturl"
            className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
          >
            Submit URL
          </Link>
        </div>
      </>
    );
  }

  const renderResults = () => {
    switch (activeTab) {
      case "images":
        return <ImageGrid images={searchData.records} />;
      case "news":
        return <NewsGrid news={searchData.records} />;
      default:
        return searchData.records.map((result: any, index: number) => (
          <ResultCard key={index} result={result} />
        ));
    }
  };

  return (
    <>
      <SubNav />
      <div className="flex flex-col md:flex-row gap-4 sm:gap-2 px-2 sm:px-6 md:px-20">
        <div className="max-w-screen lg:w-3/4">
          <p className="py-2 px-2">
            About <strong>{searchData.totalCount}</strong> results for{" "}
            <strong>{searchQuery}</strong>
          </p>
          {renderResults()}
        </div>
        <div className="hidden lg:block md:w-1/4 h-fit">
          <SidePanel
            profileData={searchData.profileData}
            wikiData={searchData.wikiData}
            activeTab={activeTab}
          />
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
