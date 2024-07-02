
export const fetchWithHeaders = async (url: string) => {

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Api Error: $(res.status)`);
  return res.json();
};

