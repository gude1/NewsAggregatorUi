import React from "react";

const icons = [
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2L2 12h3v8h4v-6h6v6h4v-8h3L12 2zm0 15l-5.5-5.5 1.41-1.41L11 13.17V4h2v9.17l2.09-2.09L17.5 12.5 12 18z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20.71 19.29l-4.83-4.83A7.939 7.939 0 0 0 18 10c0-4.41-3.59-8-8-8S2 5.59 2 10c0 4.41 3.59 8 8 8a7.939 7.939 0 0 0 4.46-1.36l4.83 4.83 1.41-1.41zM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6zm12.59 6l-2.09-2.09A5.938 5.938 0 0 1 12 16c-3.31 0-6-2.69-6-6 0-1.2.36-2.33 1-3.27V4.59L2.71 6 4 7.29 7.71 11H4v2h6.59z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 11H4v2h16v-2zm2-7h-2v2h2V4zM4 4H2v2h2V4zm14 0h-2v2h2V4zm-8 8H4v2h4v-2zm10-8h-2v2h2V4zm0 16h-2v2h2v-2zM6 20H4v2h2v-2zm6 0H8v2h4v-2zm6 0h-2v2h2v-2z" />
  </svg>,
];

const Navbar: React.FC = () => {
  return (
    <div className="fixed md:left-0 md:top-0 -bg-white bottom-0 w-full md:w-[17.5rem]"></div>
  );
};

export default Navbar;
