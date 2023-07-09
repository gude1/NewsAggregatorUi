import { useState } from "react";
import NewsItem from "../../components/NewsItem/NewsItem";
import Select from "../../components/Select/Select";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [newspref, setNewsPref] = useState({
    newyork: true,
    guardian: true,
    newsorg: true,
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-evenly mt-4">
        <Select
          name="New York Times"
          checked={newspref.newyork}
          onChange={(e) => {
            setNewsPref((obj) => {
              return { ...obj, newyork: e.target.checked };
            });
          }}
        />
        <Select
          name="Guardian News"
          checked={newspref.guardian}
          onChange={(e) => {
            setNewsPref((obj) => {
              return { ...obj, guardian: e.target.checked };
            });
          }}
        />
        <Select
          name="News Org"
          checked={newspref.newsorg}
          onChange={(e) => {
            setNewsPref((obj) => {
              return { ...obj, newsorg: e.target.checked };
            });
          }}
        />
      </div>
      <div className="grid grid-cols-1 gap-y-4 gap-x-2 lg:grid-cols-3 justify-items-center sm:justify-items-start group group-first:mt-0">
        <NewsItem
          onClick={() => navigate("/details", { state: { hasPrev: true } })}
        />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </>
  );
}
