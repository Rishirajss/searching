import NewsGrid from "@/components/custom/news-list";

async function getNewsItems() {
  const url = process.env.NEXT_PUBLIC_NEWS_API_URL || "";

  // Use Next.js 13+ fetch with caching options
  const res = await fetch(url.toString(), {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news items");
  }

  return res.json();
}

export const revalidate = 0; // This ensures the page is dynamically rendered on each request

export default async function Page() {
  const newsItems = await getNewsItems();

  return (
    <main>
      <h1 className="text-2xl font-bold text-center my-4">Latest News</h1>
      <NewsGrid newsItems={newsItems?.articles} />
    </main>
  );
}
