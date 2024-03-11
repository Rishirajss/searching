"use client"
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { SketchLogoIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    setIsLoading(true);
    setResult([])

    const queryParams = new URLSearchParams(window.location.search);
    const q = queryParams.get('q') || '';

    const id = localStorage.getItem('token');
    async function fetchQueryResults() {
      try {
        if (!id) {
          throw new Error('Token not found in local storage');
        }
        const BASE_URL = 'https://beta.api.search.ibharat.org/api/search';
        const text = encodeURIComponent(q); // Encode inputValue for URL
        const page = 1; // Default page value

        const url = `${BASE_URL}/${text}/${page}`;
        let newId = id.replace(/'/g, ' ');
      
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'id': `${newId}`
          }
        });
        console.log(response)

        if (!response.ok) {
          throw new Error('Failed to submit query');
        }
       
        const responseData = await response.json();
        if (responseData.data.length > 0) {
          setResult(responseData.data)
        } else {
          setResult([])
        }
      } catch (error: any) {
        console.error('Error:', error.message);
      }
      finally {
        setIsLoading(false); // Set loading state to false after fetching data
      }
    }
    fetchQueryResults();
    console.log("fetchQueryResults called")
  }, [window.location.search])
  const searchResults = [
    {
      icon: "SketchLogoIcon",
      title: "HTML Tutorial - W3Schools",
      url: "https://www.w3schools.com/html/",
      description: "HTML is the standard markup language for Web pages. With this tutorial, you can learn HTML syntax, elements, attributes, events, and more. You can also edit, test, and practice HTML code with interactive examples and exercises."
    },
    {
      icon: "SketchLogoIcon",
      title: "HHTML: HyperText Markup Language | MDN - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      description: "17 Jul 2023HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation ( CSS) or functionality/behavior ( JavaScript ). Hypertext refers to links that connect web pages to one another ..."
    },
    {
      icon: "SketchLogoIcon",
      title: "HTML basics - Learn web development | MDN - MDN Web Docs",
      url: "https://www.geeksforgeeks.org/html-tutorials/",
      description: "4 days agoHTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to"
    },
    {
      icon: "SketchLogoIcon",
      title: "Learn HTML | Codecademy",
      url: "https://www.w3schools.com/html/",
      description: "Learn HTML basics and how to structure, present, and form web pages with this beginner-friendly course. Practice with interactive projects, quizzes, and get a certificate of completion."
    },
    {
      icon: "SketchLogoIcon",
      title: "HTML For Beginners The Easy Way: Start Learning HTML & CSS Today",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      description: "13 Feb 2024This tutorial covers everything from HTML fundamentals to HTML5, forms, media, APIs, and more. It also includes exercises, examples, cheat sheet, interview questions, and recommended tutorials for beginners and professionals."
    },
    {
      icon: "SketchLogoIcon",
      title: "HTML Introduction - GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/html-tutorials/",
      description: "HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    // Add more search results here
  ];

  return (
    <>
      {isLoading && <p className="flex items-center justify-center">Loading...</p>}
      {result.length > 0 ? (
        <div className='flex flex-col md:flex-row gap-0 sm:gap-2'>
          <div className="max-w-screen lg:w-3/4 ">
            {result.map((res: any, index) => (
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
                {/* Add more rows if needed */}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-96">
          <h1 className="text-2xl font-bold">No results found</h1>
        </div>
      )}
    </>
  );
};

export default SearchResult;