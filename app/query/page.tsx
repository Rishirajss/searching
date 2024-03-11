import { PaginationElement } from "./pagination";
import { RelatedSearch } from "./related-searches";
import SearchResult from "./search";



export default function Page(){
  return (
    <div className="px-0 md:px-8 lg:px-20 lg:pr-4">
      <SearchResult/>
      {/* <RelatedSearch/> */}
      <PaginationElement/>
    </div>
  )
}