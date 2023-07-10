import { useState } from "react";
import NewsItem from "../../components/NewsItem/NewsItem";
import Select from "../../components/Select/Select";
import { useNavigate } from "react-router-dom";
import { useGetNewsQuery, useGetUserQuery } from "../../redux/api";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";

export default function Home() {
  const [newspref] = useState({
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
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
        </>
      );
    }

    return (
      <>
        <Select name="New York Times" defaultChecked={newspref.newyork} />
        <Select name="Guardian News" defaultChecked={newspref.guardian} />
        <Select name="News Org" defaultChecked={newspref.newsorg} />
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
        <>
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
        </>
      );
    }

    let data = newsQuery.data.data;
    return data.map((item, index) => {
      return (
        <NewsItem
          key={String(index)}
          section={item.category}
          onClick={() =>
            navigate("/details", { state: { news: item, hasPrev: true } })
          }
          title={item.title}
          author={item.author}
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
