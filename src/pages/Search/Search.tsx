import { useState } from "react";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import NewsItem from "../../components/NewsItem/NewsItem";

export default function Search() {
  const [newspref, setNewsPref] = useState({
    newyork: true,
    guardian: true,
    newsorg: true,
  });
  return (
    <div>
      <div className="flex items-center justify-center mt-2">
        <Input
          parentClassName="mt-2 max-w-[300px]"
          placeholder="test@mail.com"
          type="search"
          lefticon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:stroke-color-bg stroke-[#667085]"
            >
              <path
                d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          name="search"
        />
      </div>
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
      <div className="grid grid-cols-1 gap-y-4 gap-x-2 lg:grid-cols-3 justify-items-center sm:justify-items-start mt-2">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
}
