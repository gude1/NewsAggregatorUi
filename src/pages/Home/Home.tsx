import { useState } from "react";
import NewsItem from "../../components/NewsItem/NewsItem";
import Select from "../../components/Select/Select";
import { useNavigate } from "react-router-dom";
import { useGetNewsQuery, useGetUserQuery } from "../../redux/api";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import Button from "../../components/Button/Button";

export default function Home() {
  const [newspref, setNewsPref] = useState({
    newyork: true,
    guardian: true,
    newsorg: true,
  });
  const navigate = useNavigate();
  const userQuery = useGetUserQuery();
  const newsQuery = useGetNewsQuery();
  const renderSelectList = () => {
    if (
      userQuery.isFetching ||
      userQuery.isLoading ||
      userQuery.isError ||
      !userQuery.data
    ) {
      return (
        <>
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </>
      );
    }

    return (
      <>
        <Select
          name="New York Times"
          checked={newspref.newyork}
          // onChange={(e) => {
          //   setNewsPref((obj) => {
          //     return { ...obj, newyork: e.target.checked };
          //   });
          // }}
        />
        <Select
          name="Guardian News"
          checked={newspref.guardian}
          // onChange={(e) => {
          //   setNewsPref((obj) => {
          //     return { ...obj, guardian: e.target.checked };
          //   });
          // }}
        />
        <Select
          name="News Org"
          checked={newspref.newsorg}
          // onChange={(e) => {
          //   setNewsPref((obj) => {
          //     return { ...obj, newsorg: e.target.checked };
          //   });
          // }}
        />
      </>
    );
  };

  const renderNewsList = () => {
    if (
      newsQuery.isFetching ||
      newsQuery.isLoading ||
      newsQuery.isError ||
      !newsQuery.data ||
      !newsQuery.data.data
    ) {
      return (
        <div className="flex flex-wrap mt-4">
          <PlaceHolder className="flex-[1]" />
          <PlaceHolder className="flex-[1]" />
          <PlaceHolder className="flex-[1]" />
          <PlaceHolder className="flex-[1]" />
          <PlaceHolder className="flex-[1]" />
          <PlaceHolder className="flex-[1]" />
          <PlaceHolder className="flex-[1]" />
          <PlaceHolder className="flex-[1]" />
        </div>
      );
    }

    let data = newsQuery.data.data;
    return data.map((item, index) => {
      return (
        <NewsItem
          section={item.category}
          title={item.title}
          img={item.image}
          date={item.date}
        />
      );
    });
  };

  return (
    <>
      <div className="flex justify-evenly mt-4">{renderSelectList()}</div>
      <div className="grid grid-cols-1 gap-y-4 gap-x-2 lg:grid-cols-3 justify-items-center sm:justify-items-start group group-first:mt-0">
        {renderNewsList()}
      </div>
    </>
  );
}
