import PlaceHolderImage from "../PlaceHolderImage/PlaceHolderImage";

type NewsItemsProps = {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  section?: string;
  onClick?: React.DOMAttributes<HTMLDivElement>["onClick"];
  body?: string;
  date?: string;
};

export default function NewsItem({
  className,
  section = "Entertainment",
  onClick,
  body = " Hello everyone, my name is owolabi gideon iyinoluwa babatunde I am a player of many games and riddles",
  date = "June 12 2023",
}: NewsItemsProps) {
  return (
    <div
      onClick={onClick}
      className={`border border-gray-300 mt-2 rounded-md cursor-pointer w-full flex h-44 items-center p-4 ${className}`}
    >
      <div className="flex-[1] h-full flex flex-col">
        <span className="uppercase font-bold text-blue-900">{section}</span>
        <span className="mt-2 mr-1 overflow-y-auto cursor-text">{body}</span>
        <span className="mt-2 text-xs font-bold">{date}</span>
      </div>
      <PlaceHolderImage
        placeholderClassName="h-28 w-28 rounded"
        className="h-28 w-28 rounded"
      />
    </div>
  );
}
