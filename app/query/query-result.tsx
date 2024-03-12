"use client"
import useSWR from 'swr';
import { fetchWithHeaders } from '../../utils/fetWithHeaders';
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { SketchLogoIcon } from "@radix-ui/react-icons"


const BASE_URL = 'https://beta.api.search.ibharat.org/api/search';

export const QueryPage: React.FC = () => {
  const queryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const q = queryParams ? queryParams.get('q') || '' : '';
  const text = encodeURIComponent(q); // Encode inputValue for URL
  const page = 1; // Default page value

  const { data, error } = useSWR(
    q ? `${BASE_URL}/${text}/${page}` : null,
    fetchWithHeaders
  );

  if (error) return <div className="flex  py-14 justify-center items-center"><p>Failed to load search results.</p></div>;
  if (!data) return <div className="flex py-14 justify-center items-center"><p>Loading...</p></div>;

  return (
    <>
     {
      data.length > 0 ? (
        <div className='flex flex-col md:flex-row gap-0 sm:gap-2'>
        <div className="max-w-screen lg:w-3/4 ">
          {data.map((res: any, index: number) => (
            <div key={index} className="mb-1.5 bg-gray-400/10 dark:bg-gray-800/10 px-3 py-4 rounded-lg">
              <div className="flex items-center gap-2">
                <SketchLogoIcon className="ring-1 ring-slate-100/10 rounded-md bg-gray-400/10 dark:bg-gray-700/50 hover:bg-red-400 hover:dark:bg-gray-700/90 p-1 h-5 w-5" />
                <a href={res.domain} className="text-blue-400 text-sm sm:text-base font-medium hover:underline">{res.metaTags.title}</a>
                <span><DotsVerticalIcon /></span>
              </div>
              <span className="text-xs text-gray-400 hover:underline hover:text-blue-400">{res.domain}</span>
              <p className="text-gray-400 text-sm sm:text-base">{res.metaTags && res.metaTags.description}</p>
            </div>
          ))}

        </div>
        <div className="hidden lg:block md:w-1/4 h-fit p-6 mr-4 bg-gray-800/10 rounded-md">
          <h1>HTML</h1>
          <p>Family of markup languages for displaying information viewable in a web browser</p>
          <a href="html.spec.whatwg.org" className='text-blue-500'>html.spec.whatwg.org</a>
          <p>HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web. <a href="" className='text-blue-500'>Wikipedia</a></p>
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
      ): (
        <p className='text-center py-2'>Sorry no results found</p>
      )
     }
    </>
  );
};
