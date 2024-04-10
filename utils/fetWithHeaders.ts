import { getSession } from "./sessionUtils";

export const fetchWithHeaders = async (url: string) => {
  const session: any = getSession();
  let id = session.replace(/"|'/g, " ");

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${session}`,
      id: `${id}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`Api Error: $(res.status)`);
  return res.json();
};

