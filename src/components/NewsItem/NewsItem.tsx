import PlaceHolderImage from "../PlaceHolderImage/PlaceHolderImage";

type NewsItemsProps = {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export default function NewsItem({}: NewsItemsProps) {
  return (
    <div className="border border-gray-300 mt-2 rounded-md cursor-pointer w-full flex h-44 items-center p-4">
      <div className="flex-[1] h-full flex flex-col">
        <span className="uppercase font-bold text-blue-900">Entertainment</span>
        <span className="mt-2 mr-1 overflow-y-auto cursor-text">
          Hello everyone, my name is owolabi gideon iyinoluwa babatunde I am a
          player of many games and riddles
        </span>
        <span className="mt-2 text-xs font-bold">June 12 2023</span>
      </div>
      <PlaceHolderImage
        placeholderClassName="h-28 w-28 rounded"
        className="h-28 w-28 rounded"
      />
    </div>
  );
}
