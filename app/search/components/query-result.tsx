"use client";
import useSWR from "swr";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchWithHeaders } from "../../../utils/fetWithHeaders";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { RocketIcon } from "@radix-ui/react-icons";
import Spinner from "../spinner";
import { SubNav } from "./subnav";
import { PaginationComponent } from "./pagination";

const BASE_URL = "https://beta.api.search.ibharat.org/api/search";

export const ResultPage: React.FC = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");
  const page = parseInt(search.get("page") || "1", 10); // getting page for pagination
  const router = useRouter();

  const { data, isLoading } = useSWR(
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

  if (!data) {
    return <p className="text-center mt-10">UH OH... no results found!.</p>;
  }

  return (
    <>
      <SubNav />
      <div className="flex flex-col md:flex-row gap-0 sm:gap-2">
        <div className="max-w-screen lg:w-3/4 ">
          <p className="py-2 px-2">
            About <strong>{data.totalCount}</strong> result for{" "}
            <strong>`{searchQuery}`</strong> keyword.
          </p>
          {data.data.map((res: any, index: number) => (
            <div
              key={index}
              className="mb-1.5 bg-gray-300/20 dark:bg-gray-800/10 px-3 py-4 rounded-lg"
            >
              <div className="flex items-center gap-2">
                {res.metaTags["og:image"] ? (
                  <img
                    src={res.metaTags["og:image"]}
                    alt={res.metaTags.title}
                    className="ring-1 ring-slate-100/10 rounded-md bg-gray-400/10 dark:bg-gray-700/50 hover:bg-red-400 hover:dark:bg-gray-700/90 p-1 h-5 w-5"
                  />
                ) : (
                  <RocketIcon className="ring-1 ring-slate-100/10 rounded-md bg-gray-400/10 dark:bg-gray-700/50 hover:bg-red-400 hover:dark:bg-gray-700/90 p-1 h-5 w-5" />
                )}
                <a
                  href={res.domain}
                  className="text-blue-500 text-sm sm:text-base font-medium hover:underline"
                >
                  {res.metaTags.title}
                </a>
                <span>
                  <DotsVerticalIcon />
                </span>
              </div>
              <span className="text-xs text-gray-500 hover:underline hover:text-blue-400">
                {res.domain}
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {res.metaTags && res.metaTags.description}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden lg:block md:w-1/4 h-fit p-6 mt-10 bg-gray-300/20 dark:bg-gray-800/10 rounded-md">
          <h1>HTML</h1>
          <p>
            Family of markup languages for displaying information viewable in a
            web browser
          </p>
          <a href="html.spec.whatwg.org" className="text-blue-500">
            html.spec.whatwg.org
          </a>
          <p>
            HyperText Markup Language or HTML is the standard markup language
            for documents designed to be displayed in a web browser. It defines
            the content and structure of web.{" "}
            <a href="" className="text-blue-500">
              Wikipedia
            </a>
          </p>
          <table className="table-auto text-sm">
            <tbody>
              <tr>
                <td className="py-2">Filename extension</td>
                <td className="px-4 py-2">html, htm</td>
              </tr>
              <tr>
                <td className="py-2">Internet media type</td>
                <td className="px-4 py-2">text/HTML</td>
              </tr>
              <tr>
                <td className="py-2">Type code</td>
                <td className="px-4 py-2">TEXT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-2">
        <PaginationComponent
          totalPages={data.totalPages}
          currentPage={page}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
};
