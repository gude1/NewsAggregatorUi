import NewsItem from "../../components/NewsItem/NewsItem";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-y-4 gap-x-2 lg:grid-cols-3 justify-items-center sm:justify-items-start group group-first:mt-0">
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
}
