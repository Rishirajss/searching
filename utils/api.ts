import { fetchWithHeaders } from "./fetWithHeaders";
import { TabType } from "./types";
const BASE_URL = "https://beta.api.admin.ibharat.org/search/v3";

export const fetchSearchResults = async (
  query: string,
  page: number,
  tab: TabType,
) => {
  const url = `${BASE_URL}/html/${page}?q=${encodeURIComponent(query)}&tab=${tab}`;

  const response = await fetchWithHeaders(url);
  return response;
};
