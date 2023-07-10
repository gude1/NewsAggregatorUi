import { useState } from "react";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import NewsItem from "../../components/NewsItem/NewsItem";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { searchNews } from "../../redux/thunk/search";
import { NewsResponse } from "../../redux/api/types";
import { useNavigate } from "react-router-dom";
import { setNewsResults } from "../../redux/slice/NewsResultSlice";

export default function Search() {
  const [newspref] = useState({
    newyork: true,
    guardian: true,
    newsorg: true,
  });
  const [searchword, setSearchWord] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const newsresults = useAppSelector((state) => state.newsres);

  const onSearchClick = async () => {
    try {
      if (!searchword || searchword.length < 1) {
        return;
      }
      Swal.fire({
        title: "Processing",
        allowOutsideClick: false,
        didOpen() {
          Swal.showLoading();
        },
      });
      const result = await dispatch(
        searchNews({
          keyword: searchword,
        })
      );
      dispatch(
        setNewsResults({
          keyword: searchword,
        })
      );
      const { meta, payload } = result;
      if (meta.requestStatus == "rejected") {
        Swal.fire({
          title: "Search request failed please try again",
          icon: "error",
          allowOutsideClick: false,
        });
        return;
      }

      if (meta.requestStatus == "fulfilled") {
        Swal.close();
        let result = payload as NewsResponse;
        if (result.data.length < 1) {
          Swal.fire({
            title: `No results for search: "${searchword}"`,
          });
          return;
        }
        dispatch(
          setNewsResults({
            keyword: searchword,
            data: result.data,
            page: result.page,
          })
        );
      }
    } catch (err) {
      Swal.fire({
        title: "Search request failed please try again",
        icon: "error",
      });
    }
  };

  const renderNewsList = () => {
    return newsresults.data.map((item, index) => {
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
    <div>
      <div className="flex items-center justify-center mt-2">
        <Input
          parentClassName="mt-2 max-w-[300px]"
          placeholder="test@mail.com"
          type="search"
          lefticonClick={onSearchClick}
          onChange={(e) => {
            setSearchWord(e.target.value || "");
          }}
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
        <Select name="New York Times" defaultChecked={newspref.newyork} />
        <Select name="Guardian News" defaultChecked={newspref.guardian} />
        <Select name="News Org" defaultChecked={newspref.newsorg} />
      </div>
      {newsresults.data.length > 0 && (
        <p className="mt-5">
          Search Result for <strong>"{newsresults.keyword}"</strong>
        </p>
      )}
      <div className="grid grid-cols-1 gap-y-4 gap-x-2 lg:grid-cols-3 justify-items-center sm:justify-items-start mt-2">
        {renderNewsList()}
      </div>
    </div>
  );
}
