import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export function RelatedSearch() {
    return (
        <div className="flex">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full lg:w-2/3">
                <Button variant="outline" className="rounded-full">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4" /> HTML full form
                </Button>
                <Button variant="outline" className="rounded-full">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4" /> HTML editor
                </Button>
                <Button variant="outline" className="rounded-full">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4" /> HTML tags
                </Button>
                <Button variant="outline" className="rounded-full">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4" /> HTML code
                </Button>
                <Button variant="outline" className="rounded-full">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4" /> HTML compiler
                </Button>
                <Button variant="outline" className="rounded-full">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4" /> HTML language
                </Button>
                <Button variant="outline" className="rounded-full">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4" /> HTML docs
                </Button>
            </div>
        </div>
    )
}
