import PlaceHolderImage from "../PlaceHolderImage/PlaceHolderImage";

type NewsItemsProps = {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  section?: string;
  onClick?: React.DOMAttributes<HTMLDivElement>["onClick"];
  title?: string;
  author?: string;
  img?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  date?: string;
};

export default function NewsItem({
  className,
  section = "Entertainment",
  img,
  author,
  onClick,
  title = " Hello everyone, my name is owolabi gideon iyinoluwa babatunde I am a player of many games and riddles",
  date = "June 12 2023",
}: NewsItemsProps) {
  return (
    <div
      onClick={onClick}
      className={`border border-gray-300 mt-2 rounded-md cursor-pointer w-full flex h-44 items-center p-4 ${className}`}
    >
      <div className="flex-[1] h-full flex flex-col justify-evenly">
        <span className="uppercase font-bold text-blue-900">{section}</span>
        <span className="mt-2 mr-1 overflow-y-auto cursor-text flex-[1]">
          {title}
        </span>
        <div className="flex justify-between items-center mr-3">
          <span className="mt-2 text-xs font-bold">{date}</span>
          <span className="mt-2 text-xs font-bold ml-2">{author}</span>
        </div>
      </div>
      <PlaceHolderImage
        src={img}
        placeholderClassName="h-28 w-28 rounded hidden sm:flex"
        className="h-28 w-28 rounded hidden"
      />
    </div>
  );
}
