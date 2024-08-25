import NewsGrid from "@/components/custom/news-list";

async function getNewsItems() {
  const url = process.env.NEXT_PUBLIC_NEWS_API_URL || "";
  const res = await fetch(url.toString());
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch news items");
  }
  return res.json();
}

export default async function Page() {
  const newsItems = await getNewsItems();

  return (
    <main>
      <h1 className="text-2xl font-bold text-center my-4">Latest News</h1>
      <NewsGrid newsItems={newsItems?.articles} />
    </main>
  );
}
