import React from "react";

export type PlaceHolderProps = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function PlaceHolder({ className }: PlaceHolderProps) {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <div className="h-8 animate-loading img-placeholder-skeleton"></div>
      <div className="h-8 mt-2 animate-loading img-placeholder-skeleton"></div>
    </div>
  );
}
