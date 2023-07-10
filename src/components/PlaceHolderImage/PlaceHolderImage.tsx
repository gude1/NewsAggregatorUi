import React, { useState } from "react";
import imgPlaceholderSvg from "../../assets/images/imageplaceholder.svg";

type ImageProps = {
  placeholderClassName?: string;
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default function PlaceHolderImage({
  src,
  width,
  className = "",
  onClick,
  placeholderClassName = "",
  alt = "",
}: ImageProps): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          className={`flex justify-center transition-all items-center animate-loading img-placeholder-skeleton ${
            loaded && "hidden"
          } ${placeholderClassName}`}
          onClick={onClick}
        >
          <img src={imgPlaceholderSvg} width={"20%"} alt={alt} />
        </div>
      )}
      <img
        src={src}
        width={width}
        height={width}
        alt={alt}
        onLoad={() => setLoaded(true)}
        // loading="lazy"
        onClick={onClick}
        className={`transition-all object-cover ${
          !loaded && "hidden"
        } ${className}`}
      />
    </>
  );
}
