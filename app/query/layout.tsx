import { UserInput } from "@/components/custom/input"
import { DropdownNavigationMenu } from "@/components/custom/dropdown-menu";
import { SubNav } from "./subnav";

export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-2 py-0 md:py-6 px-2">
            <section className="flex gap-5 justify-between items-center py-3 px-0 md:px-6 lg:px-12 sm:pt-14">
                <div className="flex justify-center items-center">
                    <h1 className="text-2xl sm:text-3xl bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent ml-1">ibharat</h1>
                </div>
                <div className="hidden sm:block max-w-[800px] w-full"><UserInput /></div>
                <DropdownNavigationMenu />
            </section>
            <div className="sm:hidden"><UserInput/></div>
            <section>
                <SubNav />
            </section>
            <section>
                {children}
            </section>
        </div>
    )
}