import { getSession } from './sessionUtils';

export const fetchWithHeaders = async (url: string) => {
  const session:any = getSession();
  let id = session.replace(/"|'/g, ' ');

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${session}`,
      'id': `${id}`,
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data.data;
};