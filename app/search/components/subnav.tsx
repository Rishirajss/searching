import { SearchCheck, Images, Airplay, Newspaper, MapIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface TabProps {
  tab: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabProps[] = [
  { tab: "all", label: "All", icon: <SearchCheck className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  { tab: "images", label: "Images", icon: <Images className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  { tab: "verified", label: "Verified", icon: <Images className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  { tab: "swadeshi", label: "Swadeshi", icon: <Images className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  { tab: "videos", label: "Videos", icon: <Airplay className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  // { tab: "maps", label: "Maps", icon: <MapIcon className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  { tab: "news", label: "News", icon: <Newspaper className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  { tab: "shopping", label: "Shopping", icon: <SearchCheck className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
];

export const SubNav = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
//   const { query } = router;
  const activeTab = searchParams.get('tab') || "all";

  const handleTabClick = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', tab);
    router.push(`?${params.toString()}`);
  };
  const isTabActive = (tab: string) => tab === activeTab;

  return (
    <nav className="w-full overflow-x-auto py-2 px-1 md:px-2 rounded-md bg-gray-600/20">
      <ul className="flex items-center gap-1">
        {tabs.map(({ tab, label, icon }) => (
          <li key={tab}>
            <Button
              variant={isTabActive(tab) ? "default" : "ghost"}
              className="rounded-full h-9"
              onClick={() => handleTabClick(tab)}
            >
              {icon}
              <span className="text-[12px] sm:text-sm">{label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};