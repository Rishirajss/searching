import { SearchCheck, Images, Airplay, Newspaper, MapIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface TabProps {
  tab: string;
  label: string;
}

const tabs: TabProps[] = [
  {
    tab: "all",
    label: "All",
  },
  {
    tab: "images",
    label: "Images",
  },
  {
    tab: "verified",
    label: "Verified",
  },
  {
    tab: "swadeshi",
    label: "Swadeshi",
  },
  {
    tab: "videos",
    label: "Videos",
  },
  // { tab: "maps", label: "Maps", icon: <MapIcon className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  {
    tab: "news",
    label: "News",
  },
  {
    tab: "shopping",
    label: "Shopping",
  },
];

export const SubNav = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  //   const { query } = router;
  const activeTab = searchParams.get("tab") || "all";

  const handleTabClick = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };
  const isTabActive = (tab: string) => tab === activeTab;

  return (
    <nav className="no-scrollbar w-full overflow-x-auto py-2 bg-gray-400/20 dark:bg-gray-600/20 px-2 sm:px-6 md:px-20">
      <ul className="flex items-center gap-2">
        {tabs.map(({ tab, label }) => (
          <li key={tab}>
            <Button
              className={`h-9 bg-transparent hover:bg-transparent px-0.5 mx-1 ${isTabActive(tab) ? "border-b-[3px] border-blue-500 bg-none rounded-none" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              <span
                className={`text-[12px] sm:text-[15px] hover:text-blue-500 font-bold ${isTabActive(tab) ? "text-gray-900" : "text-gray-600"}`}
              >
                {label}
              </span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
