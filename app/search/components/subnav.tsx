import {
  SearchCheck,
  Images,
  Airplay,
  Newspaper,
  MapIcon,
  ShoppingBag,
  CheckSquare2,
  VerifiedIcon,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface TabProps {
  tab: string;
  label: string;
  icon: JSX.Element;
}

const tabs: TabProps[] = [
  {
    tab: "all",
    label: "All",
    icon: <SearchCheck className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />,
  },
  {
    tab: "images",
    label: "Images",
    icon: <Images className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />,
  },
  {
    tab: "verified",
    label: "Verified",
    icon: <VerifiedIcon className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />,
  },
  {
    tab: "swadeshi",
    label: "Swadeshi",
    icon: <CheckSquare2 className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />,
  },
  {
    tab: "videos",
    label: "Videos",
    icon: <Airplay className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />,
  },
  {
    tab: "maps",
    label: "Maps",
    icon: <MapIcon className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />,
  },
  {
    tab: "news",
    label: "News",
    icon: <Newspaper className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />,
  },
  {
    tab: "shopping",
    label: "Shopping",
    icon: <ShoppingBag className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />,
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
    <nav className="no-scrollbar w-full overflow-x-auto py-1 bg-gray-400/20 dark:bg-gray-600/20 px-2 sm:px-6 md:px-20">
      <ul className="flex items-center gap-2">
        {tabs.map(({ tab, label, icon }) => (
          <li key={tab}>
            <Button
              className={`h-9 bg-transparent hover:bg-transparent px-0.5 mx-1 ${isTabActive(tab) ? "border-b-[3px] border-blue-500 bg-none rounded-none" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              <div
                className={`text-[12px] sm:text-[15px] flex items-center hover:text-blue-500 font-medium ${isTabActive(tab) ? "text-gray-900" : "text-gray-600"}`}
              >
                <span>{icon}</span> <span>{label}</span>
              </div>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
