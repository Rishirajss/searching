import { SearchCheck, Images, Airplay, Newspaper, MapIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const SubNav = () => {
    return (
        <nav className="w-full overflow-x-auto mb-2 pb-2 border-b border-gray-900">
            <ul className="flex sm:justify-center gap-3">
                <li>
                    <Link href="/search" className="flex items-center gap-2 hover:text-gray-400">
                    <Button variant="ghost" className="rounded-full">
                        <SearchCheck className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> <span className="text-[12px] sm:text-sm">All</span>
                    </Button>
                    </Link>
                </li>
                <li>
                    <Link href="/images" className="flex items-center gap-2 hover:text-gray-400">
                    <Button variant="ghost" className="rounded-full">
                        <Images className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> <span className="text-[12px] sm:text-sm">Images</span>
                    </Button>
                    </Link>
                </li>
                <li>
                    <Link href="/videos" className="flex items-center gap-2 hover:text-gray-400">
                    <Button variant="ghost" className="rounded-full">
                        <Airplay className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> <span className="text-[12px] sm:text-sm">Videos</span>
                    </Button>
                    </Link>    
                </li>
                <li>
                    <Link href="/news" className="flex items-center gap-2 hover:text-gray-400">
                    <Button variant="ghost" className="rounded-full">
                        <MapIcon className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> <span className="text-[12px] sm:text-sm">Maps</span>
                    </Button>
                    </Link>
                </li>
                <li>
                    <Link href="/maps" className="flex items-center gap-2 hover:text-gray-400">
                    <Button variant="ghost" className="rounded-full">
                        <Newspaper className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> <span className="text-[12px] sm:text-sm">News</span>
                    </Button>
                    </Link>   
                </li>
                <li>
                    <Link href="/maps" className="flex items-center gap-2 hover:text-gray-400">
                    <Button variant="ghost" className="rounded-full">
                        <SearchCheck className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> <span className="text-[12px] sm:text-sm">Shopping</span>
                    </Button>
                    </Link>   
                </li>
                {/* <li>
                    <Link href="/maps" className="flex items-center gap-2 hover:text-gray-400">
                    <Button variant="outline" className="rounded-full">
                        <Sparkles className="mr-2 h-4 w-4" /> Trendings
                    </Button>
                    </Link>   
                </li> */}
            </ul>
        </nav>
    )
}