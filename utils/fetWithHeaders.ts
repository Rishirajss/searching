import { getSession } from './sessionUtils';

export const fetchWithHeaders = async (url: string) => {
  const session:any = getSession();
  let id = session.replace(/"|'/g, ' ');
  console.log("calling api")

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${session}`,
      'id': `${id}`,
      'Content-Type': 'application/json',
    },
  });

  return await res.json();
};