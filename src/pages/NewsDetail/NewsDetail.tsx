import { useLocation } from "react-router-dom";
import PlaceHolderImage from "../../components/PlaceHolderImage/PlaceHolderImage";
import { News } from "../../redux/api/types";

export default function NewsDetail() {
  const location = useLocation();
  if (!location.state.news) {
    return null;
  }

  let data = location.state.news as News;
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-[700px] mt-4">
        <p className="font-bold text-xl md:text-2xl text-center">
          {data.title}
        </p>

        <PlaceHolderImage
          className="md:h-80 h-64 mt-3 rounded"
          placeholderClassName="h-64 md:h-80 mt-3 rounded"
        />
        <div className="flex justify-evenly mt-1">
          <span className="text-gray-400">{data.author}</span>
          <span className="text-gray-400">{data.date}</span>
          <span className="text-gray-400">{data.category}</span>
        </div>
        <p className="mt-3 text-justify">{data.desc}</p>
      </div>
    </div>
  );
}
