import Image from "next/image";
import { ProfileData, WikiData } from "@/utils/types";
import { truncateText } from "@/utils/searchUtils";

interface SidePanelProps {
  profileData: ProfileData | null;
  wikiData: WikiData | null;
  activeTab: string;
}

export const SidePanel: React.FC<SidePanelProps> = ({
  profileData,
  wikiData,
  activeTab,
}) => {
  if ((!profileData && !wikiData && activeTab === "all") || activeTab === "") {
    return <p className="mt-4 ml-2">No additional information available.</p>;
  }

  return profileData || wikiData ? (
    <div className="mt-4 border border-1 px-4 py-3 bg-gray-300/20 dark:bg-gray-800/10 rounded-md">
      {profileData ? (
        <>
          <Image
            src={profileData.profiles_logo}
            width={150}
            height={150}
            alt=""
            className="w-full rounded-md"
          />
          <h1 className="text-xl pt-2 border-t sm:mt-4 font-semibold">
            {profileData.profiles_title}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {profileData.profiles_subtitle}
          </p>
          <a
            href={profileData.profiles_ownweb}
            className="text-blue-500 py-3 text-xs block"
            target="_blank"
            rel="noopener noreferrer"
          >
            {profileData.profiles_ownweb}
          </a>
          <p>{truncateText(profileData.profiles_dis, 150)}</p>
        </>
      ) : (
        wikiData && (
          <>
            {wikiData.thumbnail && (
              <Image
                src={wikiData.thumbnail.source}
                alt={wikiData.title}
                width={150}
                height={150}
                className="w-full rounded-md"
              />
            )}
            <h1 className="text-xl pt-2 border-t sm:mt-4 font-semibold">
              {wikiData.title}
            </h1>
            <p>{truncateText(wikiData.extract, 150)}</p>
            {wikiData.content_urls?.desktop?.page && (
              <a
                href={wikiData.content_urls.desktop.page}
                className="text-blue-500 mt-2 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more on Wikipedia
              </a>
            )}
          </>
        )
      )}
    </div>
  ) : (
    ""
  );
};
